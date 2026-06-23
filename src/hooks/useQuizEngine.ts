import { useMemo, useState } from 'react'
import { resultRules } from '../config/resultRules'
import { questions } from '../data/questions'
import { submitQuizResult } from '../services/googleSheet'
import type { AnswerKey, AnswerRecord, Player, ResultRule, ScreenName } from '../types/quiz'

const emptyPlayer: Player = {
  name: '',
  photoUrl: '',
}

function getResultRule(score: number) {
  return resultRules.find((rule) => score >= rule.minScore && score <= rule.maxScore) ?? resultRules[resultRules.length - 1]
}

export function useQuizEngine() {
  const [screen, setScreen] = useState<ScreenName>('landing')
  const [player, setPlayer] = useState<Player>(emptyPlayer)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [failedQuestionNumber, setFailedQuestionNumber] = useState<number | null>(null)

  const currentQuestion = questions[currentQuestionIndex]
  const totalScore = useMemo(() => answers.reduce((sum, answer) => sum + answer.score, 0), [answers])
  const result = useMemo<ResultRule>(() => getResultRule(totalScore), [totalScore])

  const startRegistration = () => setScreen('registration')

  const startQuiz = (nextPlayer?: Player) => {
    if (nextPlayer) {
      setPlayer(nextPlayer)
    }
    setAnswers([])
    setCurrentQuestionIndex(0)
    setFailedQuestionNumber(null)
    setScreen('quiz')
  }

  const submitAnswer = (answerKey: AnswerKey) => {
    const answer = currentQuestion.answers.find((item) => item.key === answerKey)
    if (!answer) {
      return
    }

    const nextAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        answerKey,
        score: answer.score,
      },
    ]

    setAnswers(nextAnswers)

    if (currentQuestionIndex + 1 >= questions.length) {
      const nextTotalScore = nextAnswers.reduce((sum, item) => sum + item.score, 0)
      const nextResult = getResultRule(nextTotalScore)

      void submitQuizResult({
        player,
        answers: nextAnswers,
        totalScore: nextTotalScore,
        result: nextResult,
        status: 'Hoàn thành',
      }).catch(() => undefined)

      setScreen('result')
      return
    }

    setCurrentQuestionIndex((index) => index + 1)
  }

  const failByTimeout = () => {
    setFailedQuestionNumber(currentQuestionIndex + 1)
    setScreen('gameOver')
  }

  const retryQuiz = () => {
    setAnswers([])
    setCurrentQuestionIndex(0)
    setFailedQuestionNumber(null)
    setScreen('quiz')
  }

  const backHome = () => {
    setAnswers([])
    setCurrentQuestionIndex(0)
    setFailedQuestionNumber(null)
    setScreen('landing')
  }

  return {
    screen,
    player,
    questions,
    currentQuestion,
    currentQuestionIndex,
    answers,
    totalScore,
    result,
    failedQuestionNumber,
    startRegistration,
    startQuiz,
    submitAnswer,
    failByTimeout,
    retryQuiz,
    backHome,
  }
}

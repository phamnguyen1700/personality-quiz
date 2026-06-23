export type AnswerKey = 'A' | 'B' | 'C'

export type QuizAnswer = {
  key: AnswerKey
  label: string
  score: number
}

export type QuizQuestion = {
  id: number
  question: string
  answers: QuizAnswer[]
}

export type ResultRule = {
  minScore: number
  maxScore: number
  title: string
  description: string
  strengths: string[]
  weaknesses: string[]
}

export type Player = {
  name: string
  photoUrl: string
}

export type ScreenName = 'landing' | 'registration' | 'quiz' | 'gameOver' | 'result'

export type AnswerRecord = {
  questionId: number
  answerKey: AnswerKey
  score: number
}

import { useMemo, useState } from "react";
import { resultRules } from "../config/resultRules";
import { questions } from "../data/questions";
import { submitQuizResult } from "../services/googleSheet";
import type { AnswerKey, AnswerRecord, PersonalityAttribute, Player, ResultRule, ScreenName } from "../types/quiz";

const emptyPlayer: Player = {
  name: "",
  photoUrl: "",
};

const attributeOrder: PersonalityAttribute[] = ["ĐP", "KL", "LH", "TG"];

function getAttributeCounts(answers: AnswerRecord[]) {
  return answers.reduce<Record<PersonalityAttribute, number>>(
    (counts, answer) => {
      counts[answer.attribute] += 1;
      return counts;
    },
    { ĐP: 0, KL: 0, LH: 0, TG: 0 },
  );
}

function getDominantAttribute(answers: AnswerRecord[]) {
  const counts = getAttributeCounts(answers);
  return attributeOrder.reduce<PersonalityAttribute>((winner, attribute) => {
    return counts[attribute] > counts[winner] ? attribute : winner;
  }, "ĐP");
}

function getResultRule(answers: AnswerRecord[]) {
  const dominantAttribute = getDominantAttribute(answers);
  return resultRules.find((rule) => rule.attribute === dominantAttribute) ?? resultRules[0];
}

export function useQuizEngine() {
  const [screen, setScreen] = useState<ScreenName>("landing");
  const [player, setPlayer] = useState<Player>(emptyPlayer);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [failedQuestionNumber, setFailedQuestionNumber] = useState<number | null>(null);
  const [hasSubmittedResult, setHasSubmittedResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const attributeCounts = useMemo(() => getAttributeCounts(answers), [answers]);
  const totalScore = useMemo(() => Math.max(...Object.values(attributeCounts)), [attributeCounts]);
  const result = useMemo<ResultRule>(() => getResultRule(answers), [answers]);

  const startWelcome = () => setScreen("welcome");
  const continueToName = () => setScreen("name");

  const submitName = (name: string) => {
    setPlayer((current) => ({ ...current, name }));
    setScreen("photo");
  };

  const updatePlayerName = (name: string) => {
    setPlayer((current) => ({ ...current, name }));
  };

  const submitPhoto = (photoUrl: string) => {
    setPlayer((current) => ({ ...current, photoUrl }));
    setScreen("ready");
  };

  const startQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setFailedQuestionNumber(null);
    setScreen("quiz");
  };

  const submitAnswer = (answerKey: AnswerKey) => {
    const answer = currentQuestion.answers.find((item) => item.key === answerKey);
    if (!answer) {
      return;
    }

    const nextAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        answerKey,
        attribute: answer.attribute,
      },
    ];

    setAnswers(nextAnswers);

    if (currentQuestionIndex + 1 >= questions.length) {
      setScreen("result");
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
  };

  const failByTimeout = () => {
    setFailedQuestionNumber(currentQuestionIndex + 1);
    setScreen("gameOver");
  };

  const retryQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setFailedQuestionNumber(null);
    setHasSubmittedResult(false);
    setScreen("quiz");
  };

  const showAvatar = () => {
    if (!hasSubmittedResult) {
      setHasSubmittedResult(true);

      void submitQuizResult({
        player,
        answers,
        totalScore,
        result,
        status: "Hoàn thành",
      }).catch((error) => {
        setHasSubmittedResult(false);
        console.error("Failed to submit quiz result", error);
      });
    }

    setScreen("avatar");
  };

  const backHome = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setFailedQuestionNumber(null);
    setHasSubmittedResult(false);
    setPlayer(emptyPlayer);
    setScreen("landing");
  };

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
    startWelcome,
    continueToName,
    submitName,
    updatePlayerName,
    submitPhoto,
    startQuiz,
    submitAnswer,
    failByTimeout,
    retryQuiz,
    showAvatar,
    backHome,
  };
}

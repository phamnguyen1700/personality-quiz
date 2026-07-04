export type AnswerKey = "A" | "B" | "C" | "D";

export type PersonalityAttribute = "ĐP" | "KL" | "LH" | "TG";

export type QuizAnswer = {
  key: AnswerKey;
  label: string;
  attribute: PersonalityAttribute;
};

export type QuizQuestion = {
  id: number;
  question: string;
  answers: QuizAnswer[];
};

export type ResultRule = {
  attribute: PersonalityAttribute;
  color: {
    primary: string;
    border: string;
    soft: string;
    text: string;
  };
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
};

export type Player = {
  name: string;
  photoUrl: string;
};

export type ScreenName =
  | "landing"
  | "welcome"
  | "name"
  | "photo"
  | "ready"
  | "quiz"
  | "gameOver"
  | "result"
  | "avatar";

export type AnswerRecord = {
  questionId: number;
  answerKey: AnswerKey;
  attribute: PersonalityAttribute;
};

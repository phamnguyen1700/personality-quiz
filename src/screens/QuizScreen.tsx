import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnswerCard } from "../components/AnswerCard";
import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { TerminalWindow } from "../components/TerminalWindow";
import { appConfig } from "../config/appConfig";
import type {
  AnswerKey,
  Player,
  QuizQuestion,
} from "../types/quiz";

type QuizScreenProps = {
  player: Player;
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answer: AnswerKey) => void;
  onTimeout: () => void;
};

function QuestionCountdown({ onTimeout }: { onTimeout: () => void }) {
  const [secondsLeft, setSecondsLeft] = useState<number>(
    appConfig.questionTimeLimit,
  );

  useEffect(() => {
    setSecondsLeft(appConfig.questionTimeLimit);
  }, []);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = window.setTimeout(
      () => setSecondsLeft((seconds) => seconds - 1),
      1000,
    );
    return () => window.clearTimeout(timer);
  }, [onTimeout, secondsLeft]);

  return <span>[ {secondsLeft}s ]</span>;
}

export function QuizScreen({
  player,
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onTimeout,
}: QuizScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const progress = currentIndex + 1;

  useEffect(() => {
    setSelectedAnswer(null);
  }, [question.id]);

  const handleNext = () => {
    if (!selectedAnswer) {
      return;
    }
    onAnswer(selectedAnswer);
  };

  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1040px]"
      >
        <TerminalWindow bodyClassName="grid gap-0 bg-[#252525] p-0 lg:grid-cols-[34%_66%]">
          <aside className="grid place-items-center border-b border-white/15 bg-[#1b1b1b] px-7 py-9 text-center lg:border-b-0 lg:border-r">
            <div className="grid w-full max-w-[260px] gap-5">
              <div className="quiz-avatar-frame mx-auto grid h-40 w-40 place-items-center rounded-full border-[5px] border-amber-300 bg-[#141414]">
                {player.photoUrl ? (
                  <img src={player.photoUrl} alt={player.name} className="quiz-avatar-photo h-[118px] w-[118px] rounded-full object-cover" />
                ) : (
                  <span className="font-mono text-lg text-white">[ USER ]</span>
                )}
              </div>
              <h2 className="font-sans text-[1.35rem] font-black leading-tight text-white">
                Chào [{player.name.toUpperCase()}]! Trả lời câu hỏi để tăng tốc trên đường đua nhé 😉
              </h2>
              <p className="font-mono text-lg font-black text-amber-300">
                Câu {progress}/{totalQuestions}
              </p>
              <div className="mx-auto w-full max-w-[240px]">
                <ProgressBar current={progress} total={totalQuestions} />
              </div>
            </div>
          </aside>

          <section className="relative grid gap-5 px-5 py-9 sm:px-8">
            <div className="absolute right-8 top-4 font-mono text-2xl font-black text-amber-300">
              <QuestionCountdown key={question.id} onTimeout={onTimeout} />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="grid gap-5 pt-11"
              >
                <div className="bg-amber-300 px-5 py-6 text-center text-black">
                  <h1 className="font-sans text-base font-black leading-tight sm:text-lg">
                    Câu {progress}: {question.question}
                  </h1>
                </div>

                <div className="grid gap-2.5">
                  {question.answers.map((answer) => (
                    <div
                      key={answer.key}
                      className={selectedAnswer === answer.key ? "ring-2 ring-amber-300" : ""}
                    >
                      <AnswerCard answer={answer} onSelect={() => setSelectedAnswer(answer.key)} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </section>
        </TerminalWindow>
        <div className="mt-4 flex justify-end">
          <Button
            type="button"
            onClick={handleNext}
            disabled={!selectedAnswer}
            variant="secondary"
            className="min-w-[275px] rounded-none py-4 text-base"
          >
            {progress === totalQuestions ? "Xem kết quả >" : "Câu tiếp theo >"}
          </Button>
        </div>
      </motion.div>
    </main>
  );
}

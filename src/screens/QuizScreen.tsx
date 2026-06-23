import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedAvatar } from "../components/AnimatedAvatar";
import { AnswerCard } from "../components/AnswerCard";
import { ProgressBar } from "../components/ProgressBar";
import { TimerRing } from "../components/TimerRing";
import { appConfig } from "../config/appConfig";
import type {
  AnswerKey,
  Player,
  QuizAnswer,
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

const questionIcons = [
  "🌅",
  "🧊",
  "📊",
  "🎁",
  "🧭",
  "🗂️",
  "⚙️",
  "🏆",
  "💸",
  "🛒",
];

function shuffleAnswers(answers: QuizAnswer[]) {
  const shuffled = [...answers];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

type PlayerProgressProps = {
  player: Player;
  currentIndex: number;
  totalQuestions: number;
  progress: number;
};

function PlayerProgress({
  player,
  currentIndex,
  totalQuestions,
  progress,
}: PlayerProgressProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <AnimatedAvatar src={player.photoUrl} alt={player.name} size="md" />
      <p className="font-hand text-base text-brown xl:text-lg">
        Chào {player.name}! Câu này nè 😊
      </p>
      <div className="mx-auto flex justify-center gap-1.5" aria-hidden="true">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <motion.span
            key={index}
            animate={
              index === currentIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }
            }
            transition={{
              duration: 0.8,
              repeat: index === currentIndex ? Infinity : 0,
              ease: "easeInOut",
            }}
            className={`h-2 w-2 rounded-full ${index <= currentIndex ? "bg-sun" : "bg-ink/10"}`}
          />
        ))}
      </div>
      <div className="w-full max-w-56">
        <ProgressBar current={progress} total={totalQuestions} />
        <p className="mt-2 font-display text-sm font-black text-brown xl:text-base">
          Câu {progress}/{totalQuestions}
        </p>
      </div>
    </div>
  );
}

type QuestionTimerProps = {
  onTimeout: () => void;
};

function QuestionTimer({ onTimeout }: QuestionTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState<number>(
    appConfig.questionTimeLimit,
  );

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

  return (
    <TimerRing
      secondsLeft={secondsLeft}
      totalSeconds={appConfig.questionTimeLimit}
    />
  );
}

export function QuizScreen({
  player,
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onTimeout,
}: QuizScreenProps) {
  const shuffledAnswers = useMemo(
    () => shuffleAnswers(question.answers),
    [question.answers],
  );
  const progress = currentIndex + 1;

  return (
    <main className="relative z-10 min-h-screen lg:grid lg:h-screen lg:grid-cols-[42%_58%] lg:overflow-hidden">
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -24 }}
        className="hidden bg-mint/45 px-4 py-6 text-center lg:flex lg:h-screen lg:min-h-0 lg:flex-col lg:items-center lg:justify-center lg:gap-4 lg:py-5"
      >
        <PlayerProgress
          player={player}
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          progress={progress}
        />
      </motion.aside>

      <section className="flex min-h-screen items-start justify-center px-3 py-4 lg:h-screen lg:min-h-0 lg:items-center lg:overflow-y-auto lg:px-7 xl:px-8">
        <div className="grid w-full max-w-xl gap-2.5 pb-6 lg:gap-3 lg:pb-0 xl:gap-4">
          <div className="rounded-3xl bg-mint/45 px-4 py-4 lg:hidden">
            <PlayerProgress
              player={player}
              currentIndex={currentIndex}
              totalQuestions={totalQuestions}
              progress={progress}
            />
          </div>

          <header className="flex items-center justify-between gap-3">
            <div className="rounded-full border-2 border-dashed border-sky bg-sky/20 px-3 py-2 font-display text-sm font-black text-teal">
              Không thành thật..trời đánh 😎
            </div>
            <QuestionTimer key={question.id} onTimeout={onTimeout} />
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="grid gap-2.5 sm:gap-3 xl:gap-4"
            >
              <div className="rounded-2xl border-2 border-sky/50 bg-white/80 p-3 text-center shadow-soft sm:p-4 xl:p-5">
                <motion.div
                  animate={{ y: [0, -5, 0], rotate: [0, 4, -4, 0] }}
                  transition={{
                    duration: 1.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-orange to-sun text-xl shadow-soft sm:h-10 sm:w-10 sm:text-2xl xl:h-12 xl:w-12 xl:text-3xl"
                >
                  {questionIcons[currentIndex % questionIcons.length]}
                </motion.div>
                <p className="font-display text-sm font-black leading-snug text-ink sm:text-base xl:text-xl">
                  {question.question}
                </p>
                <div className="squiggle mx-auto mt-2 h-4 w-20 sm:w-24" />
              </div>

              <div className="grid gap-2.5 sm:gap-3 xl:gap-4">
                {shuffledAnswers.map((answer) => (
                  <AnswerCard
                    key={answer.key}
                    answer={answer}
                    onSelect={() => onAnswer(answer.key)}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

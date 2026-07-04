import type { QuizAnswer } from "../types/quiz";

type AnswerCardProps = {
  answer: QuizAnswer;
  onSelect: () => void;
};

const stripColors = {
  A: "bg-green-400",
  B: "bg-pink-500",
  C: "bg-amber-300",
  D: "bg-cyan-400",
};

export function AnswerCard({ answer, onSelect }: AnswerCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative w-full border border-white/22 bg-[#1f1f1f] py-3 pl-12 pr-4 text-left shadow-[0_3px_5px_rgba(0,0,0,0.35)] transition hover:border-white/55 hover:bg-[#282828] sm:py-3.5"
    >
      <span className={`absolute left-0 top-0 h-full w-3 ${stripColors[answer.key]}`} aria-hidden="true" />
      <span className="font-sans text-sm font-semibold leading-snug text-white sm:text-base">
        <span className="font-bold">{answer.key}. </span>
        {answer.label}
      </span>
    </button>
  );
}

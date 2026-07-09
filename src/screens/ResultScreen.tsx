import { motion } from "framer-motion";
import { Celebration } from "../components/Celebration";
import { ResultModal } from "../components/ResultModal";
import type { Player, ResultRule } from "../types/quiz";

type ResultScreenProps = {
  player: Player;
  result: ResultRule;
  onAvatar: () => void;
};

export function ResultScreen({ player, result, onAvatar }: ResultScreenProps) {
  return (
    <main className="relative z-10 min-h-screen px-4 py-8 text-white sm:px-6 lg:grid lg:h-screen lg:place-items-center lg:overflow-hidden lg:px-10">
      <Celebration />

      <motion.section
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="mx-auto w-full max-w-5xl"
      >
        <ResultModal player={player} result={result} onAvatar={onAvatar} />
      </motion.section>
    </main>
  );
}

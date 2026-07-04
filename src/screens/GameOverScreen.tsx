import { motion } from "framer-motion";
import { Button } from "../components/Button";
import type { Player } from "../types/quiz";

type GameOverScreenProps = {
  player: Player;
  failedQuestionNumber: number;
  onRetry: () => void;
  onHome: () => void;
};

export function GameOverScreen({ player, failedQuestionNumber, onRetry, onHome }: GameOverScreenProps) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-5 py-10 text-white">
      <motion.section
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        className="terminal-panel w-full max-w-2xl p-7 text-center sm:p-9"
      >
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-red-400 bg-red-500/20 font-mono text-3xl text-red-200">
          !
        </div>
        <img src={player.photoUrl} alt={player.name} className="mx-auto mt-6 h-28 w-28 rounded-[4px] border-2 border-amber-300 object-cover" />
        <h1 className="mt-6 font-display text-4xl font-black uppercase italic text-orange sm:text-6xl">
          Hết giờ!
        </h1>
        <p className="mt-4 font-mono text-sm uppercase leading-relaxed text-white/75">
          {player.name} bị dừng ở câu <strong className="text-amber-300">{failedQuestionNumber}</strong>.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Button onClick={onRetry} variant="secondary">
            Chơi lại
          </Button>
          <Button onClick={onHome} variant="ghost">
            Về Home
          </Button>
        </div>
      </motion.section>
    </main>
  );
}

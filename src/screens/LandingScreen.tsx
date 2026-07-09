import { motion } from "framer-motion";

type LandingScreenProps = {
  onStart: () => void;
};

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <main className="landing-art-screen relative z-10 h-[100dvh] overflow-hidden text-white">
      <motion.button
        type="button"
        className="landing-start-button"
        onClick={onStart}
        aria-label="Tham gia trò chơi"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        whileTap={{ scale: 0.97, y: 2 }}
      >
        <span>Tham gia trò chơi !</span>
      </motion.button>
    </main>
  );
}

import { motion } from "framer-motion";

type LandingScreenProps = {
  onStart: () => void;
};

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <main className="landing-art-screen relative z-10 h-[100dvh] overflow-hidden text-white">
      <img className="landing-logo landing-logo-panasonic" src="/muda-assets/landing-logos/panasonic.webp" alt="Panasonic" />
      <img
        className="landing-logo landing-logo-event"
        src="/muda-assets/landing-logos/muda-buster-2026.webp"
        alt="Muda Buster 2026"
      />

      <section className="landing-hero-lockup" aria-label="Muda Buster Game">
        <img
          className="landing-muda-game-art"
          src="/muda-assets/landing-logos/muda-buster-game.webp"
          alt="Muda Buster Game"
        />
        <img
          className="landing-character-art"
          src="/muda-assets/landing-logos/character-test.webp"
          alt="Trò chơi trắc nghiệm Character-Test"
        />
      </section>

      <section className="landing-content-lockup">
        <img
          className="landing-description-art"
          src="/muda-assets/landing-logos/description.webp"
          alt="Bạn là Chiến Thần Linh Hoạt hay Vua Kỷ Luật trên đường đua săn tìm Muda?"
        />

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
      </section>
    </main>
  );
}

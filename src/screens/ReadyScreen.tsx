import { motion } from "framer-motion";
import { Button } from "../components/Button";

type ReadyScreenProps = {
  onStart: () => void;
};

export function ReadyScreen({ onStart }: ReadyScreenProps) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-center text-white">
      <motion.section initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl">
        <h1 className="font-display text-[clamp(2.2rem,7vw,4.8rem)] font-black uppercase leading-tight tracking-wide text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]">
          Bạn đã hoàn thành ghi danh!
          <span className="block">Sẵn sàng tham gia đường đua?</span>
        </h1>
        <Button onClick={onStart} variant="secondary" className="mt-8 min-w-64">
          Bắt đầu đua &gt;
        </Button>
      </motion.section>
    </main>
  );
}

import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { TerminalWindow } from "../components/TerminalWindow";

type WelcomeScreenProps = {
  onContinue: () => void;
};

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-white">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl">
        <TerminalWindow bodyClassName="grid min-h-[280px] place-items-center bg-[#5a210f] px-5 py-12 text-center">
          <div>
            <h1 className="font-display text-2xl font-black uppercase leading-tight text-white sm:text-4xl">
              Chào mừng bạn đến
              <span className="block">với đường đua Muda Buster 2026</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg font-display text-xl font-black italic leading-tight text-white sm:text-3xl">
              Cùng tìm hiểu bạn là ai trên đường đua này nhé!
            </p>
            <Button onClick={onContinue} variant="secondary" className="mt-8 min-w-64">
              Tiếp tục &gt;
            </Button>
          </div>
        </TerminalWindow>
      </motion.div>
    </main>
  );
}

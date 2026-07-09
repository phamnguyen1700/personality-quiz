import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { TerminalWindow } from "../components/TerminalWindow";

type ReadyScreenProps = {
  onStart: () => void;
};

export function ReadyScreen({ onStart }: ReadyScreenProps) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-center text-white">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl">
        <TerminalWindow bodyClassName="grid min-h-[280px] place-items-center bg-[#5a210f] px-5 py-12 text-center">
          <div>
            <h1 className="font-display text-2xl font-black uppercase leading-tight text-white sm:text-4xl">
              Bạn đã hoàn thành ghi danh!
              <span className="block">Sẵn sàng tham gia đường đua?</span>
            </h1>
            <Button onClick={onStart} variant="secondary" className="mt-8 min-w-64">
              Bắt đầu đua &gt;
            </Button>
          </div>
        </TerminalWindow>
      </motion.div>
    </main>
  );
}

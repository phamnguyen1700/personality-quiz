import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { fetchParticipantCount } from "../services/googleSheet";
import { appConfig } from "../config/appConfig";

type LandingScreenProps = {
  onStart: () => void;
};

export function LandingScreen({ onStart }: LandingScreenProps) {
  const [participantText, setParticipantText] = useState<string>(
    appConfig.participantCountFallback,
  );

  useEffect(() => {
    let isActive = true;

    fetchParticipantCount()
      .then((count) => {
        if (isActive) {
          setParticipantText(`${count.toLocaleString("vi-VN")} chiến binh đã vào đường đua.`);
        }
      })
      .catch(() => {
        if (isActive) {
          setParticipantText(appConfig.participantCountFallback);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <main className="relative z-10 min-h-screen overflow-hidden px-5 py-5 text-white sm:px-8 lg:px-12">
      <header className="flex items-start justify-between gap-4">
        <div className="font-display text-xl font-black tracking-tight sm:text-2xl">Panasonic</div>
        <div className="text-right font-mono text-[0.65rem] font-black uppercase tracking-[0.38em] text-white/70 sm:text-xs">
          <span className="block">Muda</span>
          <span className="block">Buster 2026</span>
        </div>
      </header>

      <section className="grid min-h-[calc(100vh-72px)] items-center gap-10 pb-10 pt-8 lg:grid-cols-[1fr_0.82fr] lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-4xl text-center lg:col-span-2"
        >
          <h1 className="muda-title mx-auto max-w-4xl text-[clamp(4.2rem,14vw,12rem)] leading-[0.78]">
            MUDA
            <span className="block">BUSTER</span>
          </h1>
          <p className="mt-2 font-display text-[clamp(1.55rem,4vw,3.25rem)] font-black italic tracking-wide text-white/90 drop-shadow-[0_6px_16px_rgba(0,0,0,0.75)]">
            Game
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="self-end"
        >
          <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-white/80">
            Trò chơi trắc nghiệm
          </p>
          <h2 className="muda-subtitle mt-2 text-[clamp(2.3rem,6vw,5rem)] leading-[0.86]">
            Character Test
          </h2>
          <p className="mt-3 font-mono text-xs font-black uppercase tracking-wider text-amber-200">
            {participantText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="landing-cta self-end text-center lg:text-right"
        >
          <p className="mx-auto max-w-2xl font-sans text-sm font-bold leading-snug text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] sm:text-[0.95rem] lg:ml-auto">
            Bạn là <strong>CHIẾN THẦN LINH HOẠT</strong> hay <strong>VUA KỶ LUẬT</strong> trên đường đua săn tìm Muda?
            <span className="mt-1 block text-xs font-semibold text-white/95 sm:text-sm">
              Thử ngay trắc nghiệm để đọc vị phong cách làm việc và nhận ngay bí kíp loại bỏ lãng phí!
            </span>
          </p>
          <Button onClick={onStart} className="landing-cta-button mt-4 w-full max-w-sm sm:w-auto sm:min-w-[360px]">
            Tham gia trò chơi !
          </Button>
        </motion.div>
      </section>
    </main>
  );
}

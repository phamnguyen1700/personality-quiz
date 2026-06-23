import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { appConfig } from "../config/appConfig";
import { Button } from "../components/Button";
import { ManagerIntro } from "../components/ManagerIntro";
import { fetchParticipantCount } from "../services/googleSheet";

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
          setParticipantText(
            `Đã có ${count.toLocaleString("vi-VN")} người khám phá tính cách của mình rồi!`,
          );
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
    <main className="relative z-10 flex min-h-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
      <ManagerIntro />

      <section className="flex flex-1 items-center justify-center px-4 py-6 lg:h-screen lg:px-8 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="w-full max-w-2xl text-center lg:text-left"
        >
          <div className="mx-auto mb-5 inline-flex rounded-full border-2 border-dashed border-sky bg-sky/20 px-4 py-2 font-display text-sm font-black text-teal lg:mx-0">
            🎭 web chiếu yêu
          </div>

          <h1 className="font-display text-3xl font-black leading-[1.08] text-ink sm:text-4xl xl:text-5xl">
            Bạn Là Kiểu
            <span className="block text-orange">Người Thế Nào</span>
            Trong Công Ty?
          </h1>

          <div className="my-5 h-4 w-28 rounded-full squiggle lg:mx-0 mx-auto" />

          <p className="mx-auto max-w-xl text-base leading-relaxed text-brown lg:mx-0 xl:text-lg">
            {appConfig.quizSubtitle}
          </p>

          <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            <div className="feature-card -rotate-1 bg-sun">
              ✏️ Không có câu sai!
            </div>
            <div className="feature-card rotate-1 bg-green">
              ⏱️ Chỉ 2 phút thôi
            </div>
            <div className="feature-card bg-pink sm:col-span-1">
              🎁 Miễn phí 100%
            </div>
          </div>

          <Button
            onClick={onStart}
            className="mt-7 w-full max-w-xs py-3 text-base xl:text-lg"
          >
            Bắt Đầu Chơi! 🚀
          </Button>

          <p className="mt-5 text-sm text-brown/65 xl:text-base">
            {participantText} 🌟
          </p>
        </motion.div>
      </section>
    </main>
  );
}

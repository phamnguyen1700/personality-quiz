import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Celebration } from "../components/Celebration";
import { TerminalWindow } from "../components/TerminalWindow";
import type { Player, ResultRule } from "../types/quiz";

type ResultScreenProps = {
  player: Player;
  totalScore: number;
  result: ResultRule;
  onAvatar: () => void;
  onHome: () => void;
};

const frameUrl = "/muda-assets/Flower%20frame.png";

export function ResultScreen({ player, totalScore, result, onAvatar, onHome }: ResultScreenProps) {
  const accentBox = {
    borderColor: result.color.border,
    background: result.color.soft,
    boxShadow: `0 0 22px ${result.color.soft}`,
  };

  return (
    <main className="relative z-10 min-h-screen px-4 py-8 text-white sm:px-6 lg:grid lg:h-screen lg:place-items-center lg:overflow-hidden lg:px-10">
      <Celebration />

      <motion.section
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="mx-auto w-full max-w-6xl"
      >
        <TerminalWindow bodyClassName="grid gap-6 bg-[#252525] p-5 sm:p-7 lg:grid-cols-[0.8fr_1.25fr] lg:p-9">
          <aside className="grid place-items-center gap-5 text-center">
            <div
              className="result-avatar-preview"
              style={{
                borderColor: result.color.border,
                boxShadow: `0 0 0 2px ${result.color.soft}, 0 0 34px ${result.color.primary}55, 0 22px 42px rgba(0,0,0,0.44)`,
              }}
            >
              <img src={player.photoUrl} alt={player.name} className="result-avatar-photo" />
              <img src={frameUrl} alt="" className="result-avatar-art" aria-hidden="true" />
            </div>
            <h1
              className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl"
              style={{ color: result.color.primary, textShadow: `0 0 18px ${result.color.soft}` }}
            >
              Chúc mừng!
              <span className="block">Bạn chính là</span>
              <span className="block">{result.title}!</span>
            </h1>
            <div className="font-mono text-xs font-black uppercase tracking-[0.16em] text-white/70">
              Dominant {totalScore}/10
            </div>
          </aside>

          <div className="grid gap-3">
            <div className="border-2 p-4" style={accentBox}>
              <h2 className="font-mono text-lg font-black uppercase" style={{ color: result.color.primary }}>
                [Mô tả]
              </h2>
              <p className="mt-2 font-mono text-sm font-bold leading-relaxed text-white/86">{result.description}</p>
            </div>
            <div className="border-2 p-4" style={accentBox}>
              <h2 className="font-mono text-lg font-black uppercase" style={{ color: result.color.primary }}>
                [Bạn phù hợp làm việc với]
              </h2>
              <p className="mt-2 font-mono text-lg font-black" style={{ color: result.color.text }}>
                {result.strengths[3] ?? "Đội tối ưu vận hành"}
              </p>
            </div>
            <div className="border-2 p-4" style={accentBox}>
              <h2 className="font-mono text-lg font-black uppercase" style={{ color: result.color.primary }}>
                [Gợi ý tối ưu]
              </h2>
              <ul className="mt-2 grid gap-1 font-mono text-sm font-bold leading-relaxed text-white/86">
                {result.weaknesses.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                onClick={onAvatar}
                variant="secondary"
                className="rounded-none"
                style={{ background: result.color.primary }}
              >
                Tải xuống avatar &gt;
              </Button>
              <Button type="button" variant="ghost" onClick={onHome} className="rounded-none">
                Về Home
              </Button>
            </div>
          </div>
        </TerminalWindow>
      </motion.section>
    </main>
  );
}

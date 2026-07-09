import { Button } from "./Button";
import type { PersonalityAttribute, Player, ResultRule } from "../types/quiz";

type ResultModalProps = {
  player: Player;
  result: ResultRule;
  totalScore: number;
  onAvatar: () => void;
};

const resultFrameByAttribute: Record<PersonalityAttribute, string> = {
  ĐP: "/muda-assets/result-frames/ava_red.png",
  KL: "/muda-assets/result-frames/ava_yellow.png",
  LH: "/muda-assets/result-frames/ava_green.png",
  TG: "/muda-assets/result-frames/ava_blue.png",
};

const resultHeroByAttribute: Record<PersonalityAttribute, string> = {
  ĐP: "/muda-assets/heroes/racer_red_cropped.png",
  KL: "/muda-assets/heroes/racer_yellow_cropped.png",
  LH: "/muda-assets/heroes/racer_green_cropped.png",
  TG: "/muda-assets/heroes/racer_blue_cropped.png",
};

export function ResultModal({
  player,
  result,
  totalScore,
  onAvatar,
}: ResultModalProps) {
  const frameUrl = resultFrameByAttribute[result.attribute];
  const heroUrl = resultHeroByAttribute[result.attribute];

  return (
    <section className="relative mx-auto w-full rounded-[10px] border border-white/10 bg-[#202020]/95 px-6 py-7 shadow-[0_30px_90px_rgba(0,0,0,0.58)] sm:px-9 sm:py-9 lg:min-h-[420px] lg:px-12 lg:pr-[310px]">
      <div
        className="pointer-events-none absolute left-0 top-0 h-24 w-56 bg-[#2f3540]"
        style={{ clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="pointer-events-none absolute left-[34%] top-16 h-3 w-44"
        style={{
          background: `linear-gradient(90deg, ${result.color.primary}, #ff4b36 58%, #28d4ff 58%)`,
          clipPath: "polygon(0 0, 94% 0, 100% 100%, 6% 100%)",
        }}
      />

      <div className="relative z-10 max-w-2xl">
        <p className="font-display text-lg font-black uppercase italic text-amber-100 sm:text-xl">
          Bạn chính là
        </p>
        <h1 className="mt-1 font-display text-[clamp(2.7rem,6vw,5.2rem)] font-black uppercase leading-[0.9] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.72)]">
          {result.title}
        </h1>
        <p className="mt-5 max-w-xl font-mono text-sm font-bold leading-relaxed text-white/86 sm:text-base">
          {result.wording}
        </p>

        <ul className="mt-6 grid gap-3 font-mono text-sm font-bold leading-relaxed text-white/88 sm:text-base">
          {result.strengths.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div>
            <h2 className="font-display text-sm font-black uppercase italic text-white">
              Best matching
            </h2>
            <p className="mt-2 font-mono text-sm font-bold leading-relaxed text-white/78">
              {result.strengths[3] ?? "Đội tối ưu vận hành"}
            </p>
          </div>
          <div>
            <h2 className="font-display text-sm font-black uppercase italic text-white">
              Gợi ý Muda Optimization
            </h2>
            <ul className="mt-2 grid gap-1 font-mono text-sm font-bold leading-relaxed text-white/78">
              {result.weaknesses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center pt-3 md:col-span-2">
            <Button
              type="button"
              onClick={onAvatar}
              variant="primary"
              className="min-h-[64px] w-full max-w-[500px] rounded-full px-5 text-[1.65rem]"
            >
              Nhận ảnh đại diện dành riêng cho bạn
            </Button>
          </div>
        </div>
      </div>

      <aside className="relative z-10 mx-auto mt-8 grid w-full max-w-[320px] place-items-center lg:absolute lg:-bottom-16 lg:-right-[130px] lg:mt-0 lg:w-[390px] lg:max-w-none">
        <div
          className="absolute -bottom-8 h-24 w-72 bg-[#d72e34] lg:bottom-6 lg:right-12 lg:h-32 lg:w-[360px]"
          style={{ clipPath: "polygon(8% 32%, 100% 0, 90% 100%, 0 78%)" }}
        />
        <div
          className="absolute -right-6 bottom-5 h-3 w-36 bg-cyan-300 lg:right-24 lg:bottom-11 lg:w-48"
          style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 7% 100%)" }}
        />
        <img
          src={heroUrl}
          alt={result.title}
          className="relative z-10 max-h-[360px] w-full object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.62)] lg:max-h-[540px]"
        />
        <div
          className="absolute left-0 top-4 h-20 w-20 overflow-hidden rounded-full border-[3px] bg-black/65 shadow-[0_0_22px_rgba(0,0,0,0.45)] sm:h-24 sm:w-24 lg:hidden"
          style={{
            borderColor: result.color.border,
            boxShadow: `0 0 0 2px ${result.color.soft}, 0 0 30px ${result.color.primary}55`,
          }}
        >
          <img
            src={player.photoUrl}
            alt={player.name}
            className="absolute inset-[15%] h-[70%] w-[70%] rounded-full object-cover"
          />
          <img
            src={frameUrl}
            alt=""
            className="absolute inset-[-22%] h-[144%] w-[144%] object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative mt-4 font-mono text-xs font-black uppercase tracking-[0.18em] text-white/70 lg:absolute lg:bottom-8 lg:left-40">
          Dominant {totalScore}/10
        </div>
      </aside>
    </section>
  );
}

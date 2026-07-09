import { motion } from "framer-motion";

type TimerRingProps = {
  secondsLeft: number;
  totalSeconds: number;
};

export function TimerRing({ secondsLeft, totalSeconds }: TimerRingProps) {
  const radius = 27;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(1, secondsLeft / totalSeconds));
  const warning = secondsLeft <= 5;

  return (
    <motion.div
      animate={warning ? { scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] } : { scale: 1, rotate: 0 }}
      transition={warning ? { repeat: Infinity, duration: 0.55 } : { duration: 0.2 }}
      className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-full ${
        warning ? "text-red-300" : "text-amber-300"
      }`}
      aria-label={`Còn ${secondsLeft} giây`}
    >
      <svg className="absolute h-14 w-14 -rotate-90" viewBox="0 0 72 72" role="presentation">
        <circle cx="36" cy="36" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="5" />
        <motion.circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke={warning ? "#ff3b1f" : "#ffbf19"}
          strokeLinecap="round"
          strokeWidth="5"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: circumference * (1 - progress) }}
          transition={{ duration: 0.35 }}
        />
      </svg>
      <span className="relative font-display text-xl font-black leading-none drop-shadow-[0_2px_5px_rgba(0,0,0,0.75)]">
        {secondsLeft}
        <span className="ml-0.5 text-xs">s</span>
      </span>
    </motion.div>
  );
}

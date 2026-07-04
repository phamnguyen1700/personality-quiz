import { motion } from "framer-motion";

type TimerRingProps = {
  secondsLeft: number;
  totalSeconds: number;
};

export function TimerRing({ secondsLeft, totalSeconds }: TimerRingProps) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = secondsLeft / totalSeconds;
  const warning = secondsLeft <= 5;

  return (
    <motion.div
      animate={warning ? { scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] } : { scale: 1, rotate: 0 }}
      transition={warning ? { repeat: Infinity, duration: 0.55 } : { duration: 0.2 }}
      className={`relative grid h-14 w-14 place-items-center rounded-full border bg-black/72 shadow-[0_0_24px_rgba(255,153,0,0.2)] backdrop-blur-md sm:h-16 sm:w-16 ${
        warning ? "border-red-500 text-red-300" : "border-amber-300/70 text-amber-300"
      }`}
    >
      <svg className="absolute h-14 w-14 -rotate-90 sm:h-16 sm:w-16" viewBox="0 0 72 72" role="presentation">
        <circle cx="36" cy="36" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="7" />
        <motion.circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke={warning ? "#ff3b1f" : "#ffbf19"}
          strokeLinecap="round"
          strokeWidth="7"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: circumference * (1 - progress) }}
          transition={{ duration: 0.35 }}
        />
      </svg>
      <span className="relative font-mono text-lg font-black sm:text-xl">{secondsLeft}</span>
    </motion.div>
  );
}

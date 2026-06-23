import { motion } from 'framer-motion'

type TimerRingProps = {
  secondsLeft: number
  totalSeconds: number
}

export function TimerRing({ secondsLeft, totalSeconds }: TimerRingProps) {
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const progress = secondsLeft / totalSeconds
  const warning = secondsLeft <= 5

  return (
    <motion.div
      animate={warning ? { scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] } : { scale: 1, rotate: 0 }}
      transition={warning ? { repeat: Infinity, duration: 0.55 } : { duration: 0.2 }}
      className={`grid h-14 w-14 place-items-center rounded-full bg-white shadow-soft sm:h-16 sm:w-16 ${
        warning ? 'text-orange' : 'text-teal'
      }`}
    >
      <svg className="absolute h-14 w-14 -rotate-90 sm:h-16 sm:w-16" viewBox="0 0 72 72" role="presentation">
        <circle cx="36" cy="36" r={radius} fill="none" stroke="#E7F7F7" strokeWidth="7" />
        <motion.circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke={warning ? '#FE5517' : '#36A9CF'}
          strokeLinecap="round"
          strokeWidth="7"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: circumference * (1 - progress) }}
          transition={{ duration: 0.35 }}
        />
      </svg>
      <span className="relative font-display text-lg font-black sm:text-xl">{secondsLeft}</span>
    </motion.div>
  )
}

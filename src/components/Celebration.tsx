import { motion } from 'framer-motion'

const confetti = ['🎉', '⭐', '✨', '🌈', '🚀', '💫', '🎊', '🌟', '🟧', '🟩', '🟦', '💖']
const bursts = [
  { left: '18%', top: '16%' },
  { left: '82%', top: '18%' },
  { left: '72%', top: '70%' },
]

export function Celebration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bursts.map((burst, burstIndex) => (
        <div key={`${burst.left}-${burst.top}`} className="absolute" style={burst}>
          {Array.from({ length: 10 }).map((_, index) => (
            <motion.span
              key={index}
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{
                x: Math.cos((index / 10) * Math.PI * 2) * 70,
                y: Math.sin((index / 10) * Math.PI * 2) * 70,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{ delay: burstIndex * 0.35, duration: 1.4, repeat: Infinity, repeatDelay: 2.2 }}
              className="absolute h-2 w-2 rounded-full bg-orange"
            />
          ))}
        </div>
      ))}
      {confetti.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          initial={{ y: -70, opacity: 0, rotate: 0, x: 0 }}
          animate={{
            y: ['0vh', '105vh'],
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            x: [0, index % 2 ? -24 : 24, 0],
          }}
          transition={{
            delay: index * 0.18,
            duration: 4.2 + (index % 3) * 0.4,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: 'easeInOut',
          }}
          className="absolute text-3xl"
          style={{ left: `${5 + index * 8}%` }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  )
}

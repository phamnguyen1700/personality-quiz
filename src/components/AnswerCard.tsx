import { motion } from 'framer-motion'
import type { QuizAnswer } from '../types/quiz'

type AnswerCardProps = {
  answer: QuizAnswer
  onSelect: () => void
}

const cardColors = {
  A: 'bg-sun shadow-[0_4px_0_#e4ae25]',
  B: 'bg-green shadow-[0_4px_0_#5cc889]',
  C: 'bg-pink shadow-[0_4px_0_#df83a0]',
}

const icons = {
  A: '📋',
  B: '💬',
  C: '⚡',
}

export function AnswerCard({ answer, onSelect }: AnswerCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ y: -4, rotate: answer.key === 'A' ? -1 : answer.key === 'B' ? 1 : -0.6 }}
      whileTap={{ scale: 0.98, y: 2 }}
      className={`w-full rounded-2xl px-3 py-2 text-left transition sm:py-2.5 xl:px-4 xl:py-3 ${cardColors[answer.key]}`}
    >
      <span className="flex items-start gap-2.5 xl:gap-4">
        <motion.span
          animate={{ y: [0, -3, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-xl border-2 border-white/70 bg-white/70 text-sm sm:h-8 sm:w-8 sm:text-base xl:h-9 xl:w-9 xl:text-lg"
        >
          {icons[answer.key]}
        </motion.span>
        <span className="font-display text-xs font-bold leading-snug text-ink sm:text-sm xl:text-base">{answer.label}</span>
      </span>
    </motion.button>
  )
}

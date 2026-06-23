import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import type { Player } from '../types/quiz'

type GameOverScreenProps = {
  player: Player
  failedQuestionNumber: number
  onRetry: () => void
  onHome: () => void
}

export function GameOverScreen({ player, failedQuestionNumber, onRetry, onHome }: GameOverScreenProps) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-5 py-10">
      <motion.section
        initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        className="w-full max-w-2xl rounded-[36px] border-4 border-orange bg-cream p-8 text-center shadow-playful"
      >
        <motion.div animate={{ rotate: [0, -8, 8, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} className="mx-auto text-6xl">
          ⏰
        </motion.div>
        <img src={player.photoUrl} alt={player.name} className="mx-auto mt-6 h-28 w-28 rounded-full border-4 border-sun object-cover" />
        <h1 className="mt-5 font-display text-5xl font-black text-orange">Hết giờ rồi!</h1>
        <p className="mt-4 text-2xl text-brown">
          {player.name} bị dừng ở câu <strong>{failedQuestionNumber}</strong>.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Button onClick={onRetry} variant="secondary">
            Chơi lại
          </Button>
          <Button onClick={onHome} variant="ghost">
            Về trang đầu
          </Button>
        </div>
      </motion.section>
    </main>
  )
}

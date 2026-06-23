import { motion } from 'framer-motion'
import { AnimatedAvatar } from '../components/AnimatedAvatar'
import { Button } from '../components/Button'
import { Celebration } from '../components/Celebration'
import type { Player, ResultRule } from '../types/quiz'

type ResultScreenProps = {
  player: Player
  totalScore: number
  result: ResultRule
  onHome: () => void
}

const resultIcons = ['🎉', '🌟', '💎', '🚀', '🎯']

export function ResultScreen({ player, totalScore, result, onHome }: ResultScreenProps) {
  return (
    <main className="relative z-10 min-h-screen lg:grid lg:h-screen lg:grid-cols-[42%_58%] lg:overflow-hidden">
      <Celebration />

      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative flex min-h-[280px] flex-col items-center justify-center gap-3 bg-mint/45 px-4 py-6 text-center lg:h-screen lg:min-h-0 lg:py-5"
      >
        <AnimatedAvatar src={player.photoUrl} alt={player.name} size="lg" />
        <div>
          <h2 className="font-display text-2xl font-black text-ink xl:text-3xl">{player.name}</h2>
          <div className="mx-auto mt-3 inline-flex rounded-full bg-orange px-4 py-2 font-display text-sm font-black text-white shadow-[0_4px_0_#cc4616] xl:text-base">
            🏅 {result.title.split('-')[0].trim()}
          </div>
          <div className="mt-3 flex justify-center gap-2 text-xl text-sun xl:text-2xl" aria-hidden="true">
            {resultIcons.map((icon, index) => (
              <motion.span
                key={icon}
                animate={{ y: [0, -6, 0], rotate: [0, index % 2 ? -8 : 8, 0] }}
                transition={{ duration: 1.4 + index * 0.12, repeat: Infinity, ease: 'easeInOut' }}
              >
                {icon}
              </motion.span>
            ))}
          </div>
          <p className="mt-2 font-display text-base font-black text-brown xl:text-lg">{totalScore} điểm phù hợp ✨</p>
        </div>
      </motion.aside>

      <section className="flex items-center justify-center px-4 py-5 lg:h-screen lg:min-h-0 lg:overflow-y-auto lg:px-7 xl:px-8">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative grid w-full max-w-xl gap-3 xl:gap-4"
        >
          <div>
            <p className="font-hand text-base text-brown xl:text-lg">🎊 Bạn đã hoàn thành rồi {player.name}!</p>
            <h1 className="mt-2 font-display text-xl font-black leading-tight text-ink sm:text-2xl xl:text-3xl">
              {player.name} là...
              <span className="block text-orange">🦁 {result.title}</span>
            </h1>
            <div className="squiggle mt-3 h-4 w-28" />
          </div>

          <div className="inline-flex w-fit rounded-full bg-orange px-4 py-2 font-display text-sm font-black text-white shadow-[0_4px_0_#cc4616] xl:text-base">
            Bứt phá. Sáng tạo. Truyền cảm hứng.
          </div>

          <p className="text-sm leading-relaxed text-brown xl:text-base">{result.description}</p>

          <div className="rounded-2xl border-2 border-sun bg-cream/80 p-4 shadow-soft xl:p-5">
            <h2 className="font-display text-base font-black text-brown xl:text-lg">🌞 Điểm mạnh của {player.name}</h2>
            <ul className="mt-2 grid gap-1.5 font-display text-sm font-bold text-ink xl:text-base">
              {result.strengths.map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-green bg-mint/80 p-4 shadow-soft xl:p-5">
            <h2 className="font-display text-base font-black text-teal xl:text-lg">🌱 Hướng phát triển cho {player.name}</h2>
            <ul className="mt-2 grid gap-1.5 font-display text-sm font-bold text-ink xl:text-base">
              {result.weaknesses.map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
          </div>

          <Button onClick={onHome} className="w-full max-w-56 py-2 text-sm xl:text-base">
            Kết thúc 👋
          </Button>
        </motion.div>
      </section>
    </main>
  )
}

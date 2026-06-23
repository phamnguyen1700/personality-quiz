import { motion } from 'framer-motion'
import { appConfig } from '../config/appConfig'
import { AnimatedAvatar } from './AnimatedAvatar'

const introIcons = ['🌈', '⭐', '🎮', '💫', '🎉']

export function ManagerIntro() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="relative flex min-h-[280px] flex-col items-center justify-center gap-3 bg-mint/40 px-4 py-6 text-center lg:h-screen lg:min-h-0 lg:w-[42%] lg:gap-4 lg:py-5"
    >
      <AnimatedAvatar src={appConfig.managerImage} alt={appConfig.managerName} size="lg" />

      <div className="space-y-2">
        <p className="font-display text-xl font-black text-ink xl:text-2xl">Xin chào, mình là</p>
        <h2 className="font-display text-2xl font-black text-orange xl:text-3xl">{appConfig.managerName} 👋</h2>
        <p className="mx-auto max-w-xs font-hand text-base leading-relaxed text-brown xl:text-lg">{appConfig.welcomeNote}</p>
      </div>

      <div className="flex gap-2 text-xl xl:text-2xl" aria-hidden="true">
        {introIcons.map((icon, index) => (
          <motion.span
            key={icon}
            animate={{ y: [0, -6, 0], rotate: [0, index % 2 ? -8 : 8, 0] }}
            transition={{ duration: 1.6 + index * 0.12, repeat: Infinity, ease: 'easeInOut' }}
          >
            {icon}
          </motion.span>
        ))}
      </div>
    </motion.aside>
  )
}

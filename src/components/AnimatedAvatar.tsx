import { motion } from 'framer-motion'

type AnimatedAvatarProps = {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-12 w-12 border-3 sm:h-14 sm:w-14',
  md: 'h-16 w-16 border-3 sm:h-20 sm:w-20 xl:h-24 xl:w-24',
  lg: 'h-20 w-20 border-3 sm:h-24 sm:w-24 xl:h-28 xl:w-28',
}

export function AnimatedAvatar({ src, alt, size = 'md', className = '' }: AnimatedAvatarProps) {
  return (
    <motion.div
      initial={{ scale: 0.84, opacity: 0, rotate: -4 }}
      animate={{ scale: 1, opacity: 1, rotate: 0, y: [0, -6, 0] }}
      exit={{ scale: 1.12, opacity: 0, rotate: 5 }}
      transition={{
        scale: { type: 'spring', stiffness: 260, damping: 18 },
        opacity: { duration: 0.2 },
        rotate: { duration: 0.3 },
        y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`relative inline-grid place-items-center ${className}`}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-8px] rounded-full border-[3px] border-dashed border-sun sm:inset-[-10px]"
      />
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ rotate: [-2, 2, -2], scale: 1.05 }}
        transition={{ duration: 0.28 }}
        className={`${sizes[size]} relative rounded-full border-sun bg-sky/50 object-cover shadow-soft`}
      />
      <motion.span
        animate={{ scale: [1, 1.22, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-2 top-0 text-xl sm:text-2xl"
        aria-hidden="true"
      >
        ✨
      </motion.span>
    </motion.div>
  )
}

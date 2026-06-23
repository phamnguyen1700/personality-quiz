import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type ButtonProps = HTMLMotionProps<'button'> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variants = {
  primary:
    'bg-orange text-white shadow-[0_5px_0_#cc4616,0_12px_24px_rgba(254,85,23,0.18)] hover:-translate-y-0.5',
  secondary: 'bg-sun text-ink shadow-[0_5px_0_#e4ae25] hover:-translate-y-0.5',
  ghost: 'bg-white/70 text-brown border-2 border-dashed border-sky',
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97, y: 2 }}
      className={`rounded-xl px-4 py-2 font-display text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

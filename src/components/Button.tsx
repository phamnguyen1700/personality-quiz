import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "muda-button bg-[linear-gradient(180deg,#ff8a1c_0%,#ff4b00_100%)] text-white shadow-[0_7px_0_#9b2800,0_18px_34px_rgba(255,91,0,0.38)] hover:-translate-y-0.5",
  secondary:
    "muda-button bg-[linear-gradient(180deg,#ffd23f_0%,#ff9d00_100%)] text-[#1b1209] shadow-[0_7px_0_#8b4a00,0_18px_34px_rgba(255,178,0,0.3)] hover:-translate-y-0.5",
  ghost:
    "border border-white/25 bg-black/35 text-white shadow-[0_0_22px_rgba(255,255,255,0.08)] backdrop-blur-md hover:border-orange/80",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97, y: 2 }}
      className={`rounded-full px-6 py-3 font-display text-sm font-black uppercase italic tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

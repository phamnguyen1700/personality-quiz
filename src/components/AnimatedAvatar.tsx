import { motion } from "framer-motion";

type AnimatedAvatarProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-12 w-12 sm:h-14 sm:w-14",
  md: "h-16 w-16 sm:h-20 sm:w-20 xl:h-24 xl:w-24",
  lg: "h-24 w-24 sm:h-28 sm:w-28 xl:h-36 xl:w-36",
};

export function AnimatedAvatar({ src, alt, size = "md", className = "" }: AnimatedAvatarProps) {
  return (
    <motion.div
      initial={{ scale: 0.84, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -4, 0] }}
      exit={{ scale: 1.12, opacity: 0 }}
      transition={{
        scale: { type: "spring", stiffness: 260, damping: 18 },
        opacity: { duration: 0.2 },
        y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`relative inline-grid place-items-center ${className}`}
    >
      <motion.div className="absolute inset-[-8px] rounded-[6px] border border-amber-300/70 shadow-[0_0_24px_rgba(255,191,0,0.2)] sm:inset-[-10px]" />
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.28 }}
        className={`${sizes[size]} relative rounded-[4px] border-2 border-amber-300 bg-black object-cover shadow-[0_20px_40px_rgba(0,0,0,0.45)] grayscale-[0.1] contrast-125`}
      />
      <motion.span
        animate={{ scale: [1, 1.22, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-0 text-xl text-amber-300 sm:text-2xl"
        aria-hidden="true"
      >
        $
      </motion.span>
    </motion.div>
  );
}

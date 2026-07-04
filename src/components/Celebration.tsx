import { motion } from "framer-motion";

const pieces = [
  "bg-amber-300",
  "bg-orange",
  "bg-red-500",
  "bg-white",
  "bg-cyan-300",
  "bg-amber-300",
  "bg-orange",
  "bg-white",
  "bg-red-500",
  "bg-cyan-300",
];

export function Celebration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((color, index) => (
        <motion.span
          key={`${color}-${index}`}
          initial={{ y: -70, opacity: 0, rotate: 0, x: 0 }}
          animate={{
            y: ["0vh", "105vh"],
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            x: [0, index % 2 ? -30 : 30, 0],
          }}
          transition={{
            delay: index * 0.18,
            duration: 4.2 + (index % 3) * 0.4,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: "easeInOut",
          }}
          className={`absolute h-3 w-8 rounded-sm ${color}`}
          style={{ left: `${6 + index * 9}%` }}
        />
      ))}
    </div>
  );
}

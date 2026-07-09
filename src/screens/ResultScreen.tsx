import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { Celebration } from "../components/Celebration";
import type { Player, ResultRule } from "../types/quiz";

type ResultScreenProps = {
  player: Player;
  result: ResultRule;
  onNameChange: (name: string) => void;
  onAvatar: () => void;
};

export function ResultScreen({ player, result, onNameChange, onAvatar }: ResultScreenProps) {
  const fileName = `${result.attribute}.png`;

  return (
    <main className="result-art-screen relative z-10 grid min-h-screen place-items-center overflow-hidden px-4 py-8 text-white">
      <Celebration />

      <motion.section
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="result-art-modal"
        style={
          {
            "--result-modal-desktop": `url("/muda-assets/result-modals/desktop/${fileName}")`,
            "--result-modal-mobile": `url("/muda-assets/result-modals/mobile/${fileName}")`,
          } as CSSProperties
        }
        aria-label={result.title}
      >
        <input
          value={player.name}
          onChange={(event) => onNameChange(event.target.value)}
          className="result-name-input"
          aria-label="Tên hiển thị trên kết quả"
          maxLength={32}
          spellCheck={false}
        />
        <button
          type="button"
          className="result-avatar-button"
          onClick={onAvatar}
          aria-label="Nhận ảnh đại diện dành riêng cho bạn"
        >
          <span>Nhận ảnh đại diện</span>
        </button>
      </motion.section>
    </main>
  );
}

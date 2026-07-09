import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { TerminalWindow } from "../components/TerminalWindow";
import type { PersonalityAttribute, Player, ResultRule } from "../types/quiz";

type AvatarScreenProps = {
  player: Player;
  result: ResultRule;
};

const CANVAS_SIZE = 2000;
const FRAME_PHOTO_CIRCLE = {
  x: 250,
  y: 250,
  size: 1500,
};

const resultFrameByAttribute: Record<PersonalityAttribute, string> = {
  ĐP: "/muda-assets/result-frames/ava_red.png",
  KL: "/muda-assets/result-frames/ava_blue.png",
  LH: "/muda-assets/result-frames/ava_green.png",
  TG: "/muda-assets/result-frames/ava_yellow.png",
};

function loadCanvasImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawCoverImage(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const scaledWidth = image.naturalWidth * scale;
  const scaledHeight = image.naturalHeight * scale;
  const offsetX = x + (width - scaledWidth) / 2;
  const offsetY = y + (height - scaledHeight) / 2;
  context.drawImage(image, offsetX, offsetY, scaledWidth, scaledHeight);
}

export function AvatarScreen({ player, result }: AvatarScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameUrl = resultFrameByAttribute[result.attribute];

  const downloadAvatar = async () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) {
      return;
    }

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    try {
      const image = await loadCanvasImage(player.photoUrl);
      context.save();
      context.beginPath();
      context.arc(
        FRAME_PHOTO_CIRCLE.x + FRAME_PHOTO_CIRCLE.size / 2,
        FRAME_PHOTO_CIRCLE.y + FRAME_PHOTO_CIRCLE.size / 2,
        FRAME_PHOTO_CIRCLE.size / 2,
        0,
        Math.PI * 2,
      );
      context.clip();
      drawCoverImage(
        context,
        image,
        FRAME_PHOTO_CIRCLE.x,
        FRAME_PHOTO_CIRCLE.y,
        FRAME_PHOTO_CIRCLE.size,
        FRAME_PHOTO_CIRCLE.size,
      );
      context.restore();
    } catch {
      // Keep the white backdrop if the user image cannot be drawn.
    }

    try {
      const frame = await loadCanvasImage(frameUrl);
      context.drawImage(frame, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    } catch {
      return;
    }

    const safeName = player.name.trim().toLowerCase().replace(/\s+/g, "-") || "avatar";
    const link = document.createElement("a");
    link.download = `muda-buster-${safeName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-white">
      <canvas ref={canvasRef} className="hidden" />
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl">
        <TerminalWindow bodyClassName="grid min-h-[390px] place-items-center bg-[#252525] px-5 py-8 text-center">
          <div>
            <div className="avatar-frame-preview mx-auto">
              <img src={player.photoUrl} alt={player.name} className="avatar-frame-photo" />
              <img src={frameUrl} alt="" className="avatar-frame-art" aria-hidden="true" />
            </div>
            <Button
              onClick={downloadAvatar}
              variant="secondary"
              className="mt-6 min-w-80 rounded-none"
            >
              Tải xuống avatar (.png)
            </Button>
            <p className="mt-4 font-mono text-sm italic text-white/75">
              Chúc mừng bạn đã hoàn thành chặng đua!
              <span className="block">Hãy thay avatar để khoe ngay với đồng đội nào!</span>
            </p>
          </div>
        </TerminalWindow>
      </motion.div>
    </main>
  );
}

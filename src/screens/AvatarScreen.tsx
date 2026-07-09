import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { TerminalWindow } from "../components/TerminalWindow";
import type { PersonalityAttribute, Player, ResultRule } from "../types/quiz";

type AvatarScreenProps = {
  player: Player;
  result: ResultRule;
};

const resultFrameByAttribute: Record<PersonalityAttribute, string> = {
  "ĐP": "/muda-assets/result-frames/ava_red.png",
  KL: "/muda-assets/result-frames/ava_yellow.png",
  LH: "/muda-assets/result-frames/ava_green.png",
  TG: "/muda-assets/result-frames/ava_blue.png",
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
  const sourceX = x + (width - scaledWidth) / 2;
  const sourceY = y + (height - scaledHeight) / 2;
  context.drawImage(image, sourceX, sourceY, scaledWidth, scaledHeight);
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

    canvas.width = 1080;
    canvas.height = 1080;
    context.clearRect(0, 0, 1080, 1080);
    context.fillStyle = "#050505";
    context.fillRect(0, 0, 1080, 1080);

    context.save();
    context.shadowColor = result.color.primary;
    context.shadowBlur = 48;
    context.strokeStyle = result.color.border;
    context.lineWidth = 18;
    context.beginPath();
    context.arc(540, 456, 308, 0, Math.PI * 2);
    context.stroke();
    context.restore();

    context.save();
    context.beginPath();
    context.arc(540, 456, 292, 0, Math.PI * 2);
    context.clip();

    try {
      const image = await loadCanvasImage(player.photoUrl);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      drawCoverImage(context, image, 248, 164, 584, 584);
    } catch {
      context.fillStyle = "#171717";
      context.fillRect(248, 164, 584, 584);
    }
    context.restore();

    try {
      const frame = await loadCanvasImage(frameUrl);
      context.drawImage(frame, 0, 0, 1080, 1080);
    } catch {
      context.strokeStyle = result.color.border;
      context.lineWidth = 18;
      context.strokeRect(64, 64, 952, 952);
    }

    context.textAlign = "center";
    context.fillStyle = "#ffffff";
    context.font = "900 44px Consolas, monospace";
    context.fillText(player.name.toUpperCase(), 540, 870);
    context.fillStyle = result.color.primary;
    context.font = "900 58px Consolas, monospace";
    context.fillText(result.title.toUpperCase(), 540, 940);

    const link = document.createElement("a");
    link.download = `muda-buster-${player.name.toLowerCase().replace(/\s+/g, "-")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-white">
      <canvas ref={canvasRef} className="hidden" />
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl">
        <TerminalWindow bodyClassName="grid min-h-[390px] place-items-center bg-[#252525] px-5 py-8 text-center">
          <div>
            <div
              className="avatar-frame-preview mx-auto"
              style={{ borderColor: "transparent", boxShadow: `0 0 34px ${result.color.soft}` }}
            >
              <img src={player.photoUrl} alt={player.name} className="avatar-frame-photo" />
              <img src={frameUrl} alt="" className="avatar-frame-art" aria-hidden="true" />
            </div>
            <Button
              onClick={downloadAvatar}
              className="mt-6 min-w-80 rounded-none text-black"
              style={{ background: result.color.primary }}
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

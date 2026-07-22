import { useRef, useState, type ChangeEvent, type PointerEvent } from "react";
import { motion } from "framer-motion";
import { TerminalWindow } from "../components/TerminalWindow";

type PhotoScreenProps = {
  onSubmit: (photoUrl: string) => void;
};

type CropPosition = {
  x: number;
  y: number;
};

type ImageSize = {
  width: number;
  height: number;
};

type DragState = {
  pointerId: number;
  startClientX: number;
  startClientY: number;
  startPosition: CropPosition;
};

const PREVIEW_SIZE = 230;
const OUTPUT_SIZE = 512;
const CROP_ZOOM = 1.16;
const MAX_PHOTO_SIZE_MB = 4;
const MAX_PHOTO_SIZE_BYTES = MAX_PHOTO_SIZE_MB * 1024 * 1024;

const clamp = (value: number, min = 0, max = 100) =>
  Math.min(max, Math.max(min, value));

export function PhotoScreen({ onSubmit }: PhotoScreenProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [imageSize, setImageSize] = useState<ImageSize | null>(null);
  const [cropPosition, setCropPosition] = useState<CropPosition>({
    x: 50,
    y: 50,
  });
  const [submitted, setSubmitted] = useState(false);
  const [photoError, setPhotoError] = useState("");

  const getImageMetrics = () => {
    const width = imageSize?.width ?? imageRef.current?.naturalWidth ?? 0;
    const height = imageSize?.height ?? imageRef.current?.naturalHeight ?? 0;

    if (!width || !height) {
      return {
        scale: 1,
        renderedWidth: PREVIEW_SIZE,
        renderedHeight: PREVIEW_SIZE,
        overflowX: 0,
        overflowY: 0,
      };
    }

    const scale =
      Math.max(PREVIEW_SIZE / width, PREVIEW_SIZE / height) * CROP_ZOOM;
    const renderedWidth = width * scale;
    const renderedHeight = height * scale;

    return {
      scale,
      renderedWidth,
      renderedHeight,
      overflowX: Math.max(renderedWidth - PREVIEW_SIZE, 0),
      overflowY: Math.max(renderedHeight - PREVIEW_SIZE, 0),
    };
  };

  const getImageOffset = () => {
    const metrics = getImageMetrics();
    return {
      ...metrics,
      offsetX: -metrics.overflowX * (cropPosition.x / 100),
      offsetY: -metrics.overflowY * (cropPosition.y / 100),
    };
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (file.size > MAX_PHOTO_SIZE_BYTES) {
      if (photoUrl) {
        URL.revokeObjectURL(photoUrl);
      }

      setPhotoUrl("");
      setImageSize(null);
      setPhotoError(
        `Ảnh đại diện tối đa ${MAX_PHOTO_SIZE_MB}MB. Vui lòng chọn ảnh nhẹ hơn.`,
      );
      event.target.value = "";
      return;
    }

    if (photoUrl) {
      URL.revokeObjectURL(photoUrl);
    }

    const nextPhotoUrl = URL.createObjectURL(file);
    setPhotoUrl(nextPhotoUrl);
    setImageSize(null);
    setCropPosition({ x: 50, y: 50 });
    setSubmitted(false);
    setPhotoError("");
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!photoUrl) {
      inputRef.current?.click();
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startPosition: cropPosition,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const { overflowX, overflowY } = getImageMetrics();
    const deltaX = event.clientX - drag.startClientX;
    const deltaY = event.clientY - drag.startClientY;

    setCropPosition({
      x: overflowX
        ? clamp(drag.startPosition.x - (deltaX / overflowX) * 100)
        : 50,
      y: overflowY
        ? clamp(drag.startPosition.y - (deltaY / overflowY) * 100)
        : 50,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
  };

  const createCroppedPhoto = () => {
    const image = imageRef.current;
    if (!image?.naturalWidth || !image.naturalHeight) {
      return photoUrl;
    }

    const { scale, offsetX, offsetY } = getImageOffset();
    const sourceX = clamp(-offsetX / scale, 0, image.naturalWidth);
    const sourceY = clamp(-offsetY / scale, 0, image.naturalHeight);
    const sourceWidth = Math.min(
      PREVIEW_SIZE / scale,
      image.naturalWidth - sourceX,
    );
    const sourceHeight = Math.min(
      PREVIEW_SIZE / scale,
      image.naturalHeight - sourceY,
    );

    const canvas = document.createElement("canvas");
    canvas.width = OUTPUT_SIZE;
    canvas.height = OUTPUT_SIZE;

    const context = canvas.getContext("2d");
    if (!context) {
      return photoUrl;
    }

    context.drawImage(
      image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      OUTPUT_SIZE,
      OUTPUT_SIZE,
    );
    return canvas.toDataURL("image/jpeg", 0.92);
  };

  const handlePrimaryAction = () => {
    if (!photoUrl) {
      setPhotoError("Bạn cần chọn ảnh từ máy.");
      inputRef.current?.click();
      return;
    }

    setPhotoError("");
    onSubmit(createCroppedPhoto());
  };

  const { renderedWidth, renderedHeight, offsetX, offsetY } = getImageOffset();

  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[770px]"
      >
        <TerminalWindow bodyClassName="grid min-h-[380px] place-items-center bg-[#5a210f] px-5 py-8 text-center">
          <div className="w-full max-w-[620px]">
            <div
              className={`photo-crop-box mx-auto ${photoUrl ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              role="button"
              tabIndex={0}
              aria-label={
                photoUrl ? "Kéo ảnh để chỉnh vị trí" : "Chọn ảnh từ máy"
              }
            >
              {photoUrl ? (
                <img
                  ref={imageRef}
                  src={photoUrl}
                  alt="Ảnh đại diện đã chọn"
                  className="photo-crop-image"
                  draggable={false}
                  onLoad={(event) => {
                    setImageSize({
                      width: event.currentTarget.naturalWidth,
                      height: event.currentTarget.naturalHeight,
                    });
                  }}
                  style={{
                    width: `${renderedWidth}px`,
                    height: `${renderedHeight}px`,
                    left: `${offsetX}px`,
                    top: `${offsetY}px`,
                  }}
                />
              ) : (
                <span className="photo-size-hint">4MB</span>
              )}
            </div>

            {photoUrl ? (
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-3 font-mono text-xs font-black uppercase text-amber-200 underline-offset-4 hover:text-white hover:underline"
              >
                Đổi ảnh
              </button>
            ) : null}

            <p className="mt-5 font-mono text-base font-black leading-relaxed text-white sm:text-lg">
              Tải lên ảnh đại diện của bạn để hoàn thành đăng ký đường đua
            </p>
            {photoError || (submitted && !photoUrl) ? (
              <p className="mt-2 font-mono text-sm font-bold text-amber-300">
                {photoError || "Bạn cần chọn ảnh từ máy."}
              </p>
            ) : null}

            <button
              type="button"
              onClick={() => {
                setSubmitted(true);
                handlePrimaryAction();
              }}
              className="mt-5 min-w-[230px] bg-green-400 px-8 py-4 font-mono text-sm font-black uppercase text-black shadow-[0_5px_0_#15803d] transition hover:-translate-y-0.5 hover:bg-green-300"
            >
              {photoUrl ? "Hoàn tất đăng ký" : "Chọn ảnh từ máy"}
            </button>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="sr-only"
            />
          </div>
        </TerminalWindow>
      </motion.div>
    </main>
  );
}

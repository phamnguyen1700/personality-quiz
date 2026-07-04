import { useRef, useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { TerminalWindow } from "../components/TerminalWindow";

type PhotoScreenProps = {
  onSubmit: (photoUrl: string) => void;
};

export function PhotoScreen({ onSubmit }: PhotoScreenProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const nextPhotoUrl = URL.createObjectURL(file);
    setPhotoUrl(nextPhotoUrl);
    setSubmitted(false);
  };

  const handlePrimaryAction = () => {
    if (!photoUrl) {
      inputRef.current?.click();
      return;
    }

    onSubmit(photoUrl);
  };

  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[770px]"
      >
        <TerminalWindow bodyClassName="grid min-h-[380px] place-items-center bg-[#5a210f] px-5 py-8 text-center">
          <div className="w-full max-w-[620px]">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="mx-auto grid h-[230px] w-[230px] place-items-center border-[3px] border-dashed border-white bg-[#202020] text-5xl font-light text-white transition hover:border-green-400 hover:text-green-400"
              aria-label="Chọn ảnh từ máy"
            >
              {photoUrl ? (
                <img src={photoUrl} alt="Ảnh đại diện đã chọn" className="h-full w-full object-cover" />
              ) : (
                "+"
              )}
            </button>

            <p className="mt-5 font-mono text-base font-black leading-relaxed text-white sm:text-lg">
              Tải lên ảnh đại diện của bạn để hoàn thành đăng ký đường đua
            </p>
            {submitted && !photoUrl ? (
              <p className="mt-2 font-mono text-sm font-bold text-amber-300">
                Bạn cần chọn ảnh từ máy.
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
            <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="sr-only" />
          </div>
        </TerminalWindow>
      </motion.div>
    </main>
  );
}

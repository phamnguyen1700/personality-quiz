import type { ChangeEvent } from "react";

type PhotoUploadProps = {
  previewUrl: string;
  onChange: (url: string) => void;
};

export function PhotoUpload({ previewUrl, onChange }: PhotoUploadProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    onChange(URL.createObjectURL(file));
  };

  return (
    <label className="group flex cursor-pointer flex-col items-center gap-4 rounded-[4px] border border-dashed border-amber-300/55 bg-black/45 p-5 text-center shadow-[0_0_36px_rgba(255,174,0,0.16)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-orange sm:p-6">
      <span className="grid h-28 w-28 place-items-center overflow-hidden rounded-[3px] border-2 border-amber-300 bg-zinc-950 text-4xl shadow-[0_0_24px_rgba(255,191,0,0.22)] sm:h-32 sm:w-32">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Ảnh người chơi"
            className="h-full w-full object-cover grayscale-[0.15] contrast-125"
          />
        ) : (
          "📸"
        )}
      </span>
      <span className="font-display text-base font-black uppercase italic text-amber-300 sm:text-lg">
        Tải ảnh chiến binh
      </span>
      <span className="font-mono text-xs uppercase leading-relaxed text-white/68 sm:text-sm">
        Ảnh dùng để tạo thẻ kết quả Muda Buster.
      </span>
      <input type="file" accept="image/*" onChange={handleChange} className="sr-only" />
    </label>
  );
}

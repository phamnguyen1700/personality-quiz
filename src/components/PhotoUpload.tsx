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
    <label className="group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-sky bg-white/75 p-4 text-center shadow-soft transition hover:-translate-y-0.5 sm:p-5">
      <span className="grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-sky/30 text-3xl sm:h-24 sm:w-24 sm:text-4xl">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Ảnh người chơi"
            className="h-full w-full object-cover"
          />
        ) : (
          "📸"
        )}
      </span>
      <span className="font-display text-base font-black text-teal sm:text-lg">
        Tải ảnh của bạn lên
      </span>
      <span className="font-hand text-sm text-brown sm:text-base">
        Yên tâm anh không sử dụng cho mục đích xấu đâu..
      </span>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="sr-only"
      />
    </label>
  );
}

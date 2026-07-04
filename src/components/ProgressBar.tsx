type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.max(0, Math.min(100, (current / total) * 100));

  return (
    <div className="h-6 overflow-hidden border border-black/25 bg-[#454545] shadow-[0_2px_5px_rgba(0,0,0,0.35)]">
      <div
        className="h-full bg-green-400 transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

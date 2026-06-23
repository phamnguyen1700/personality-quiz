type ProgressBarProps = {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.max(0, Math.min(100, (current / total) * 100))

  return (
    <div className="h-4 overflow-hidden rounded-full border-2 border-sky bg-white shadow-inner">
      <div
        className="h-full rounded-full bg-gradient-to-r from-sun via-orange to-pink transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}

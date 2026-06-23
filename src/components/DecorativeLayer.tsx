export function DecorativeLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="cloud cloud-blue float-slow left-4 top-8 sm:left-8" />
      <div className="cloud cloud-pink float-slower left-[34%] top-20 hidden md:block" />
      <div className="cloud cloud-yellow float-slow bottom-8 left-2" />
      <span className="star twinkle left-[7%] top-[12%] text-pink">✦</span>
      <span className="star twinkle-delay left-[36%] top-[4%] text-sun">★</span>
      <span className="star twinkle bottom-[11%] left-[38%] text-orange">✦</span>
      <span className="star twinkle-delay right-[28%] top-[69%] text-sun">✦</span>
    </div>
  )
}

export function DecorativeLayer() {
  const icons = [
    { label: "$", className: "muda-coin left-[8%] top-[22%]" },
    { label: "⏳", className: "muda-float-icon left-[22%] top-[48%] text-amber-300" },
    { label: "$", className: "muda-coin left-[28%] bottom-[16%]" },
    { label: "▷", className: "muda-float-icon right-[24%] top-[31%] text-white" },
    { label: "$", className: "muda-coin right-[9%] top-[23%]" },
    { label: "⚡", className: "muda-float-icon right-[18%] bottom-[34%] text-orange" },
    { label: "$", className: "muda-coin right-[7%] bottom-[21%]" },
    { label: "⧖", className: "muda-float-icon left-[55%] top-[13%] text-amber-200" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,211,118,0.2),transparent_18%),linear-gradient(180deg,rgba(0,8,18,0.32),rgba(0,0,0,0.78))]" />
      {icons.map((icon, index) => (
        <span
          key={`${icon.label}-${icon.className}`}
          className={`absolute ${icon.className}`}
          style={{ animationDelay: `${index * 0.35}s` }}
        >
          {icon.label}
        </span>
      ))}
    </div>
  );
}

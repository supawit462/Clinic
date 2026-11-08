// Decorative zodiac wheel, echoing the wheel on the Facebook cover.
const ANIMALS = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

export default function ZodiacWheel({ className = "" }: { className?: string }) {
  const rad = (i: number) => ((i * 30 - 90) * Math.PI) / 180;
  return (
    <svg className={`wheel ${className}`} viewBox="-100 -100 200 200" fill="none" stroke="currentColor" aria-hidden>
      <circle r="98" strokeWidth=".6" />
      <circle r="92" strokeWidth="1.2" />
      <circle r="78" strokeWidth=".6" />
      <circle r="56" strokeWidth=".8" />
      <circle r="30" strokeWidth=".6" />
      {Array.from({ length: 72 }, (_, i) => {
        const a = (i * 5 * Math.PI) / 180;
        const r2 = i % 6 === 0 ? 86 : 89;
        return <line key={`t${i}`} x1={Math.cos(a) * 92} y1={Math.sin(a) * 92} x2={Math.cos(a) * r2} y2={Math.sin(a) * r2} strokeWidth=".5" />;
      })}
      {ANIMALS.map((_, i) => {
        const a = rad(i) + Math.PI / 12;
        return <line key={`l${i}`} x1={Math.cos(a) * 30} y1={Math.sin(a) * 30} x2={Math.cos(a) * 78} y2={Math.sin(a) * 78} strokeWidth=".5" />;
      })}
      {ANIMALS.map((c, i) => (
        <text key={c} x={Math.cos(rad(i)) * 67} y={Math.sin(rad(i)) * 67 + 4} fill="currentColor" stroke="none" fontSize="12" textAnchor="middle" fontFamily="serif">
          {c}
        </text>
      ))}
      <path d="M0 -30 A15 15 0 0 1 0 0 A15 15 0 0 0 0 30 A30 30 0 0 1 0 -30Z" fill="currentColor" stroke="none" opacity=".5" />
    </svg>
  );
}

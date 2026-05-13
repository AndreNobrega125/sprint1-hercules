'use client';

interface Slice {
  value: number;
  color: string;
  label: string;
}

interface Props {
  slices: Slice[];
  total: number;
  centerLabel: string;
  centerSub: string;
}

export default function StatusDonut({ slices, total, centerLabel, centerSub }: Props) {
  const r = 54;
  const cx = 70;
  const cy = 70;
  const circumference = 2 * Math.PI * r;
  const gap = 3; // gap em graus entre fatias

  let cumulative = 0;

  const paths = slices.map((slice, i) => {
    const pct = slice.value / total;
    const dashLen = pct * circumference - (gap / 360) * circumference;
    const offset = circumference - cumulative * circumference;
    cumulative += pct;
    return (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={slice.color}
        strokeWidth={14}
        strokeDasharray={`${dashLen} ${circumference - dashLen}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.6s ease' }}
      />
    );
  });

  return (
    <div className="relative w-[140px] h-[140px] shrink-0">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        {/* Trilha */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e5e7eb" strokeWidth={14} />
        {paths}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-gray-800 leading-none">{centerLabel}</span>
        <span className="text-xs text-gray-400 mt-0.5">{centerSub}</span>
      </div>
    </div>
  );
}

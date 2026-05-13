'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

interface Props {
  title: string;
  back?: string;
  subtitle?: string;
}

export default function AppHeader({ title, back, subtitle }: Props) {
  const router = useRouter();
  return (
    <header
      style={{ background: 'linear-gradient(to right, rgb(100,99,220), rgb(136,135,243))' }}
      className="text-white px-4 pt-10 pb-4 flex items-center gap-3 shadow-md sticky top-0 z-40"
    >
      {back && (
        <button
          onClick={() => router.push(back)}
          className="p-1.5 -ml-1 rounded-full bg-white/15 hover:bg-white/25 transition-colors shrink-0"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      <div className="min-w-0">
        <h1 className="text-base font-bold leading-tight truncate">{title}</h1>
        {subtitle && (
          <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

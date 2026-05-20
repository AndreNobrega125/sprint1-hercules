'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

interface Props {
  title: string;
  back?: string;
  subtitle?: string;
}

export default function AppHeader({ title, back, subtitle }: Props) {
  const router = useRouter();
  return (
    <header
      style={{ background: 'rgb(101,82,245)' }}
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

      <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h1 className="text-base font-bold leading-tight truncate">{title}</h1>
          {subtitle && (
            <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {subtitle}
            </p>
          )}
        </div>
        {/* Logo Motiva pequeno no canto direito */}
        <Image
          src="/logomotiva.png"
          alt="Motiva"
          width={22}
          height={22}
          className="shrink-0 rounded-md opacity-90"
        />
      </div>
    </header>
  );
}

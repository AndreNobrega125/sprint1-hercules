'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, MapPin, ClipboardList, BarChart2 } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Início',   icon: LayoutDashboard },
  { href: '/trechos',   label: 'Trechos',  icon: MapPin           },
  { href: '/vistoria',  label: 'Vistoria', icon: ClipboardList    },
  { href: '/relatorio', label: 'Relatório',icon: BarChart2        },
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/90 backdrop-blur-md border-t border-gray-200 flex z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      {items.map(({ href, label, icon: Icon }) => {
        const active = path.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            style={active ? { color: 'rgb(136,135,243)' } : {}}
            className={`flex-1 flex flex-col items-center py-2.5 text-[11px] gap-0.5 transition-all duration-150 relative ${
              active ? 'font-semibold' : 'text-gray-400'
            }`}
          >
            {active && (
              <span
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                style={{ background: 'rgb(136,135,243)' }}
              />
            )}
            <Icon
              size={20}
              strokeWidth={active ? 2.5 : 1.8}
              className={`transition-transform duration-150 ${active ? 'scale-110' : 'scale-100'}`}
            />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

import { StatusVegetacao } from '@/lib/types';

const config: Record<StatusVegetacao, { label: string; className: string }> = {
  ok: { label: 'OK', className: 'bg-green-100 text-green-700 border border-green-300' },
  atencao: { label: 'Atenção', className: 'bg-yellow-100 text-yellow-700 border border-yellow-300' },
  critico: { label: 'Crítico', className: 'bg-red-100 text-red-700 border border-red-300' },
};

export default function StatusBadge({ status }: { status: StatusVegetacao }) {
  const { label, className } = config[status];
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${className}`}>
      {label}
    </span>
  );
}

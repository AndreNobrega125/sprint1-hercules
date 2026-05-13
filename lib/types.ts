export type StatusVegetacao = 'ok' | 'atencao' | 'critico';

export interface Trecho {
  id: string;
  codigo: string;
  rodovia: string;
  km_inicio: number;
  km_fim: number;
  municipio: string;
  status: StatusVegetacao;
  ultima_vistoria: string;
  altura_cm: number;
  responsavel: string;
}

export interface Vistoria {
  id: string;
  trecho_id: string;
  data: string;
  fiscal: string;
  altura_cm: number;
  status: StatusVegetacao;
  observacoes: string;
  foto_url?: string;
  recomendacao: string;
}

export interface Fiscal {
  nome: string;
  matricula: string;
  regional: string;
}

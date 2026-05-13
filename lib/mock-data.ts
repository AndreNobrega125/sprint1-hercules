import { Trecho, Vistoria } from './types';

// ──────────────────────────────────────────────
// TRECHOS — SP-280 Regional Oeste (18 trechos)
// ──────────────────────────────────────────────
export const trechos: Trecho[] = [
  // ── Semana atual (05/05 – 12/05) ──
  { id: '1',  codigo: 'SP-280-KM042', rodovia: 'SP-280', km_inicio: 42,  km_fim: 45,  municipio: 'Osasco',             status: 'critico', ultima_vistoria: '12/05/2026', altura_cm: 43, responsavel: 'João Silva'    },
  { id: '2',  codigo: 'SP-280-KM115', rodovia: 'SP-280', km_inicio: 115, km_fim: 118, municipio: 'Jandira',            status: 'critico', ultima_vistoria: '12/05/2026', altura_cm: 41, responsavel: 'João Silva'    },
  { id: '3',  codigo: 'SP-280-KM078', rodovia: 'SP-280', km_inicio: 78,  km_fim: 81,  municipio: 'Barueri',            status: 'critico', ultima_vistoria: '10/05/2026', altura_cm: 36, responsavel: 'Carlos Mendes' },
  { id: '4',  codigo: 'SP-280-KM201', rodovia: 'SP-280', km_inicio: 201, km_fim: 204, municipio: 'Porto Feliz',        status: 'critico', ultima_vistoria: '08/05/2026', altura_cm: 34, responsavel: 'Ricardo Nunes' },
  { id: '5',  codigo: 'SP-280-KM133', rodovia: 'SP-280', km_inicio: 133, km_fim: 136, municipio: 'Itapevi',            status: 'atencao', ultima_vistoria: '12/05/2026', altura_cm: 28, responsavel: 'Carlos Mendes' },
  { id: '6',  codigo: 'SP-280-KM067', rodovia: 'SP-280', km_inicio: 67,  km_fim: 70,  municipio: 'Barueri',            status: 'atencao', ultima_vistoria: '09/05/2026', altura_cm: 25, responsavel: 'Carlos Mendes' },
  { id: '7',  codigo: 'SP-280-KM178', rodovia: 'SP-280', km_inicio: 178, km_fim: 181, municipio: 'Araçariguama',       status: 'atencao', ultima_vistoria: '07/05/2026', altura_cm: 22, responsavel: 'Fernanda Lima' },
  { id: '8',  codigo: 'SP-280-KM244', rodovia: 'SP-280', km_inicio: 244, km_fim: 247, municipio: 'Sorocaba',           status: 'atencao', ultima_vistoria: '06/05/2026', altura_cm: 19, responsavel: 'Ricardo Nunes' },
  { id: '9',  codigo: 'SP-280-KM091', rodovia: 'SP-280', km_inicio: 91,  km_fim: 94,  municipio: 'Carapicuíba',        status: 'ok',      ultima_vistoria: '12/05/2026', altura_cm: 9,  responsavel: 'Ana Costa'     },
  { id: '10', codigo: 'SP-280-KM158', rodovia: 'SP-280', km_inicio: 158, km_fim: 161, municipio: 'Santana de Parnaíba',status: 'ok',      ultima_vistoria: '11/05/2026', altura_cm: 7,  responsavel: 'Ana Costa'     },
  { id: '11', codigo: 'SP-280-KM055', rodovia: 'SP-280', km_inicio: 55,  km_fim: 58,  municipio: 'Carapicuíba',        status: 'ok',      ultima_vistoria: '10/05/2026', altura_cm: 6,  responsavel: 'João Silva'    },
  { id: '12', codigo: 'SP-280-KM222', rodovia: 'SP-280', km_inicio: 222, km_fim: 225, municipio: 'Mairinque',          status: 'ok',      ultima_vistoria: '09/05/2026', altura_cm: 5,  responsavel: 'Fernanda Lima' },

  // ── Semana anterior (28/04 – 04/05) ──
  { id: '13', codigo: 'SP-280-KM101', rodovia: 'SP-280', km_inicio: 101, km_fim: 104, municipio: 'Cotia',              status: 'critico', ultima_vistoria: '03/05/2026', altura_cm: 39, responsavel: 'João Silva'    },
  { id: '14', codigo: 'SP-280-KM145', rodovia: 'SP-280', km_inicio: 145, km_fim: 148, municipio: 'Itapevi',            status: 'critico', ultima_vistoria: '02/05/2026', altura_cm: 33, responsavel: 'Carlos Mendes' },
  { id: '15', codigo: 'SP-280-KM190', rodovia: 'SP-280', km_inicio: 190, km_fim: 193, municipio: 'São Roque',          status: 'atencao', ultima_vistoria: '04/05/2026', altura_cm: 26, responsavel: 'Fernanda Lima' },
  { id: '16', codigo: 'SP-280-KM033', rodovia: 'SP-280', km_inicio: 33,  km_fim: 36,  municipio: 'Osasco',             status: 'atencao', ultima_vistoria: '30/04/2026', altura_cm: 17, responsavel: 'Ana Costa'     },
  { id: '17', codigo: 'SP-280-KM260', rodovia: 'SP-280', km_inicio: 260, km_fim: 263, municipio: 'Sorocaba',           status: 'ok',      ultima_vistoria: '29/04/2026', altura_cm: 8,  responsavel: 'Ricardo Nunes' },
  { id: '18', codigo: 'SP-280-KM018', rodovia: 'SP-280', km_inicio: 18,  km_fim: 21,  municipio: 'Osasco',             status: 'ok',      ultima_vistoria: '28/04/2026', altura_cm: 4,  responsavel: 'Ana Costa'     },
];

// ──────────────────────────────────────────────
// VISTORIAS — histórico de 2 semanas
// ──────────────────────────────────────────────
export const vistorias: Vistoria[] = [
  // ── 12/05 (Segunda) ──
  { id: 'v01', trecho_id: '1',  data: '12/05/2026', fiscal: 'João Silva',    altura_cm: 43, status: 'critico', observacoes: 'Vegetação ultrapassa 30 cm. Visibilidade da sinalização comprometida.', recomendacao: 'Roçada imediata. Acionar equipe em até 48h.' },
  { id: 'v02', trecho_id: '2',  data: '12/05/2026', fiscal: 'João Silva',    altura_cm: 41, status: 'critico', observacoes: 'Vegetação densa com inclinação sobre a pista. Risco elevado.', recomendacao: 'Roçada imediata. Notificar supervisor.' },
  { id: 'v03', trecho_id: '5',  data: '12/05/2026', fiscal: 'Carlos Mendes', altura_cm: 28, status: 'atencao', observacoes: 'Crescimento acelerado observado na margem direita.', recomendacao: 'Agendar roçada preventiva em 10 dias.' },
  { id: 'v04', trecho_id: '9',  data: '12/05/2026', fiscal: 'Ana Costa',     altura_cm: 9,  status: 'ok',      observacoes: 'Vegetação uniforme. Sem irregularidades.', recomendacao: 'Manter monitoramento quinzenal.' },

  // ── 11/05 (Domingo) ──
  { id: 'v05', trecho_id: '10', data: '11/05/2026', fiscal: 'Ana Costa',     altura_cm: 7,  status: 'ok',      observacoes: 'Vegetação baixa e uniforme. Trecho em bom estado.', recomendacao: 'Sem ação necessária.' },

  // ── 10/05 (Sábado) ──
  { id: 'v06', trecho_id: '3',  data: '10/05/2026', fiscal: 'Carlos Mendes', altura_cm: 36, status: 'critico', observacoes: 'Vegetação cresceu desde última vistoria. Margem esquerda crítica.', recomendacao: 'Roçada urgente. Ponto crítico mapeado.' },
  { id: 'v07', trecho_id: '11', data: '10/05/2026', fiscal: 'João Silva',    altura_cm: 6,  status: 'ok',      observacoes: 'Roçada recente. Condições normais.', recomendacao: 'Sem ação. Próxima vistoria em 15 dias.' },

  // ── 09/05 (Sexta) ──
  { id: 'v08', trecho_id: '6',  data: '09/05/2026', fiscal: 'Carlos Mendes', altura_cm: 25, status: 'atencao', observacoes: 'Vegetação em crescimento. Monitorar semanalmente.', recomendacao: 'Agendar roçada preventiva em 15 dias.' },
  { id: 'v09', trecho_id: '12', data: '09/05/2026', fiscal: 'Fernanda Lima', altura_cm: 5,  status: 'ok',      observacoes: 'Trecho vistoriado após roçada. Estado satisfatório.', recomendacao: 'Manter cronograma padrão.' },

  // ── 08/05 (Quinta) ──
  { id: 'v10', trecho_id: '4',  data: '08/05/2026', fiscal: 'Ricardo Nunes', altura_cm: 34, status: 'critico', observacoes: 'Altura supera limite regulatório. Sinalização parcialmente encoberta.', recomendacao: 'Roçada imediata. Registrar ocorrência formal.' },
  { id: 'v11', trecho_id: '1',  data: '08/05/2026', fiscal: 'João Silva',    altura_cm: 31, status: 'critico', observacoes: 'Primeiro registro crítico neste trecho no mês.', recomendacao: 'Escalar para supervisor regional.' },

  // ── 07/05 (Quarta) ──
  { id: 'v12', trecho_id: '7',  data: '07/05/2026', fiscal: 'Fernanda Lima', altura_cm: 22, status: 'atencao', observacoes: 'Crescimento moderado. Vegetação na faixa de atenção.', recomendacao: 'Vistoria em 7 dias. Agendar roçada.' },
  { id: 'v13', trecho_id: '2',  data: '07/05/2026', fiscal: 'João Silva',    altura_cm: 36, status: 'critico', observacoes: 'Vegetação crítica antes da roçada parcial realizada no dia 09.', recomendacao: 'Roçada emergencial solicitada.' },

  // ── 06/05 (Terça) ──
  { id: 'v14', trecho_id: '8',  data: '06/05/2026', fiscal: 'Ricardo Nunes', altura_cm: 19, status: 'atencao', observacoes: 'Vegetação crescendo na margem da pista. Não crítico ainda.', recomendacao: 'Monitorar. Roçada preventiva em 20 dias.' },
  { id: 'v15', trecho_id: '3',  data: '06/05/2026', fiscal: 'Carlos Mendes', altura_cm: 28, status: 'atencao', observacoes: 'Crescimento contínuo observado. Tendência de piorar.', recomendacao: 'Agendar roçada para a semana seguinte.' },

  // ── 04/05 (Domingo) ──
  { id: 'v16', trecho_id: '15', data: '04/05/2026', fiscal: 'Fernanda Lima', altura_cm: 26, status: 'atencao', observacoes: 'Vegetação em crescimento acelerado devido às chuvas da semana.', recomendacao: 'Roçada preventiva em até 15 dias.' },

  // ── 03/05 (Sábado) ──
  { id: 'v17', trecho_id: '13', data: '03/05/2026', fiscal: 'João Silva',    altura_cm: 39, status: 'critico', observacoes: 'Trecho crítico. Vegetação obstruindo visão da placa KM 102.', recomendacao: 'Roçada imediata solicitada ao setor de conservação.' },
  { id: 'v18', trecho_id: '13', data: '29/04/2026', fiscal: 'João Silva',    altura_cm: 27, status: 'atencao', observacoes: 'Crescimento progressivo. Tendência de atingir nível crítico.', recomendacao: 'Agendar roçada urgente.' },

  // ── 02/05 (Sexta) ──
  { id: 'v19', trecho_id: '14', data: '02/05/2026', fiscal: 'Carlos Mendes', altura_cm: 33, status: 'critico', observacoes: 'Altura ultrapassou limite. Pior trecho da semana.', recomendacao: 'Acionar equipe de roçada com prioridade máxima.' },
  { id: 'v20', trecho_id: '14', data: '28/04/2026', fiscal: 'Carlos Mendes', altura_cm: 21, status: 'atencao', observacoes: 'Vegetação entrando na faixa de atenção.', recomendacao: 'Iniciar processo de agendamento de roçada.' },

  // ── 30/04 (Quinta) ──
  { id: 'v21', trecho_id: '16', data: '30/04/2026', fiscal: 'Ana Costa',     altura_cm: 17, status: 'atencao', observacoes: 'Vegetação uniforme na faixa amarela. Sem risco imediato.', recomendacao: 'Monitorar semanalmente.' },

  // ── 29/04 (Quarta) ──
  { id: 'v22', trecho_id: '17', data: '29/04/2026', fiscal: 'Ricardo Nunes', altura_cm: 8,  status: 'ok',      observacoes: 'Trecho em bom estado após roçada da semana anterior.', recomendacao: 'Sem ação. Retornar em 15 dias.' },

  // ── 28/04 (Terça) ──
  { id: 'v23', trecho_id: '18', data: '28/04/2026', fiscal: 'Ana Costa',     altura_cm: 4,  status: 'ok',      observacoes: 'Vegetação recém-cortada. Estado ótimo.', recomendacao: 'Sem intervenção necessária.' },
  { id: 'v24', trecho_id: '16', data: '28/04/2026', fiscal: 'Ana Costa',     altura_cm: 12, status: 'atencao', observacoes: 'Vegetação na faixa de atenção. Acompanhar evolução.', recomendacao: 'Vistoria em 7 dias.' },
];

// ──────────────────────────────────────────────
// RESUMO — calculado a partir dos dados reais
// ──────────────────────────────────────────────
export const resumo = {
  total:         trechos.length,
  criticos:      trechos.filter(t => t.status === 'critico').length,
  atencao:       trechos.filter(t => t.status === 'atencao').length,
  ok:            trechos.filter(t => t.status === 'ok').length,
  vistorias_mes: vistorias.length,
};

// ──────────────────────────────────────────────
// HELPERS — agrupamento por dia da semana
// ──────────────────────────────────────────────
const DIAS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const DIAS_CURTO = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export function parseDate(ddmmyyyy: string): Date {
  const [d, m, y] = ddmmyyyy.split('/').map(Number);
  return new Date(y, m - 1, d);
}

export function diaDaSemana(ddmmyyyy: string): string {
  return DIAS[parseDate(ddmmyyyy).getDay()];
}

export function diaDaSemanaAbrev(ddmmyyyy: string): string {
  return DIAS_CURTO[parseDate(ddmmyyyy).getDay()];
}

/** Agrupa trechos pela data da última vistoria, mais críticos (maior altura) primeiro dentro de cada dia.
 *  Dias ordenados do mais recente para o mais antigo. */
export function trechosPorDia(): { label: string; data: string; trechos: typeof trechos }[] {
  const mapa = new Map<string, typeof trechos>();

  [...trechos]
    .sort((a, b) => b.altura_cm - a.altura_cm)
    .forEach(t => {
      const key = t.ultima_vistoria;
      if (!mapa.has(key)) mapa.set(key, []);
      mapa.get(key)!.push(t);
    });

  // Ordena as chaves (datas) do mais recente para o mais antigo
  const datasOrdenadas = [...mapa.keys()].sort((a, b) =>
    parseDate(b).getTime() - parseDate(a).getTime()
  );

  return datasOrdenadas.map(data => ({
    label: `${diaDaSemana(data)}, ${data}`,
    data,
    trechos: mapa.get(data)!,
  }));
}

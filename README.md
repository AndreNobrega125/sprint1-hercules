# VeroAI — Monitoramento Inteligente de Vegetação em Rodovias

> **Challenge CCR Motiva · Sprint 1 — Exploração, Requisitos e Protótipo**

---

## Descrição do Problema

A Motiva/CCR enfrenta desafios significativos no monitoramento da vegetação ao longo das rodovias concedidas. O processo atual depende de inspeções visuais manuais, planilhas descentralizadas, cronogramas fixos e avaliações subjetivas dos fiscais de campo. Esse modelo gera falta de padronização nos registros, risco de cortes desnecessários ou tardios, atrasos em intervenções preventivas e exposição a multas regulatórias quando a vegetação ultrapassa o limite de 30 cm estabelecido pelas normas vigentes.

---

## Integrantes

| Nome | RM |
|------|----|
| *(preencher)* | *(preencher)* |
| *(preencher)* | *(preencher)* |
| *(preencher)* | *(preencher)* |

---

## Persona Principal

**João Silva — Fiscal de Conservação Rodoviária**

Fiscal da Motiva com 8 anos de experiência, responsável por vistoriar trechos da SP-280 na Regional Oeste. Realiza inspeções periódicas a pé ou de veículo, registrando manualmente as condições da vegetação. Precisa de uma ferramenta ágil, confiável e padronizada para documentar ocorrências em campo com rapidez, sem depender de conexão estável com a internet.

---

## Proposta de Solução

O **VeroAI** é um aplicativo mobile para apoio ao monitoramento inteligente da vegetação em rodovias. O app permite que fiscais registrem vistorias por trecho, capturem e enviem fotos da vegetação com referência de estaca, insiram a altura estimada e recebam, automaticamente, a classificação de risco e a recomendação de ação correspondente.

### Faixas de Classificação

| Altura | Classificação | Ação |
|--------|---------------|------|
| até 10 cm | OK | Monitoramento regular |
| 10 cm a 30 cm | Atenção | Roçada preventiva em 15 dias |
| acima de 30 cm | Crítico | Roçada imediata (risco regulatório) |

---

## Stack Tecnológica

| Tecnologia | Versão | Papel |
|------------|--------|-------|
| Next.js | 16 | Framework principal (App Router) |
| React | 19 | Interface de usuário |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 4 | Estilização utility-first |
| Lucide React | latest | Ícones |
| Vercel | — | Hospedagem e deploy contínuo |

### Justificativa Técnica

O Next.js com App Router foi escolhido pela facilidade de roteamento declarativo, SSG nativo e deploy zero-config na Vercel. O Tailwind CSS viabiliza desenvolvimento ágil de UI mobile-first sem overhead de CSS customizado. TypeScript garante segurança de tipos desde o protótipo, reduzindo retrabalho nas Sprints seguintes. A Vercel foi escolhida como plataforma de hospedagem pela integração direta com repositórios GitHub, previews automáticos e latência otimizada para o Brasil.

---

## Funcionalidades Principais (Sprint 1)

- [x] Tela de login com autenticação simulada (matrícula + senha)
- [x] Dashboard com resumo de trechos críticos e acesso rápido
- [x] Lista de trechos monitorados ordenados por prioridade
- [x] Detalhe do trecho com histórico de vistorias
- [x] Fluxo completo de nova vistoria (4 passos)
  - [x] Identificação do trecho e fiscal
  - [x] Registro fotográfico simulado
  - [x] Inserção de altura e classificação automática
  - [x] Geração de recomendação de ação
- [x] Relatório consolidado com índice de conformidade
- [x] Navegação por bottom navigation bar
- [x] Layout mobile-first (max-width 430px)

---

## Protótipo Navegável

O protótipo foi desenvolvido como **aplicação web responsiva mobile-first**, simulando a experiência de uso de um aplicativo nativo. A escolha por um site responsivo hospedado na Vercel, em substituição ao Figma, permite demonstrar o fluxo real de navegação entre telas, interações de formulário, lógica de classificação e transições de estado — proporcionando uma avaliação mais completa da experiência do usuário do que wireframes estáticos.

> **Link do Protótipo:** *(inserir após deploy na Vercel)*

**Fluxo principal:**
`Login → Dashboard → Trechos → Detalhe → Nova Vistoria → Foto → Classificação → Recomendação → Relatório`

---

## Como Rodar Localmente

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd veroai

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no navegador.

Para simular a experiência mobile, pressione `F12` no Chrome e ative o modo de dispositivo móvel (iPhone 14 Pro recomendado).

Para acessar o app clique nesse link: https://sprint1-hercules.vercel.app/login

---

## Status do Projeto

| Sprint | Status | Entrega |
|--------|--------|---------|
| Sprint 1 — Exploração, Requisitos e Protótipo | Concluída | Mai/2026 |
| Sprint 2 — MVP com IA | Planejada | — |
| Sprint 3 — Integração e Testes | Planejada | — |

---

## Próximos Passos — Sprint 2

- Integração com API de visão computacional (CNN) para análise automática de altura a partir de fotos
- Backend real com banco de dados (Supabase ou Firebase)
- Autenticação corporativa (SSO Motiva)
- Mapa interativo dos trechos com geolocalização
- Exportação de relatórios em PDF
- Notificações push para trechos críticos
- Modo offline com sincronização posterior

---

## Licença

Projeto acadêmico desenvolvido para o **Challenge CCR Motiva — FIAP 2026**.

# Documento de Requisitos — VeroAI
**Challenge CCR Motiva · Sprint 1**

---

## 1. Contexto Regulatório e Operacional

### 1.1 Órgãos Reguladores

A operação de rodovias concedidas no Brasil está sujeita à fiscalização de dois órgãos principais:

- **ARTESP** (Agência de Transporte do Estado de São Paulo): regula as concessões estaduais, define padrões de manutenção das faixas de domínio e aplica penalidades contratuais em caso de descumprimento, incluindo altura de vegetação fora do limite permitido.
- **ANTT** (Agência Nacional de Transportes Terrestres): regula as concessões federais, com exigências semelhantes de conservação e manutenção preventiva das rodovias.

O limite regulatório de **30 cm de altura da vegetação** nas margens das pistas é estabelecido nos contratos de concessão e nos manuais técnicos de conservação rodoviária. O descumprimento pode resultar em notificações formais, deduções de receita e multas administrativas.

### 1.2 Fluxo Operacional de Conservação

O ciclo de monitoramento e controle da vegetação na Motiva envolve três perfis de atuação:

| Perfil | Responsabilidades |
|--------|-------------------|
| **Fiscal de campo** | Realizar inspeções periódicas, registrar altura e condições da vegetação, reportar pontos críticos, acompanhar execução de roçadas |
| **Supervisor regional** | Consolidar registros dos fiscais, priorizar intervenções, acionar equipes de conservação, responder a auditorias da ARTESP/ANTT |
| **Gestor operacional** | Acompanhar indicadores de conformidade, planejar cronogramas de roçada, garantir cumprimento contratual |

O processo atual é majoritariamente manual: inspeções anotadas em papel ou planilha, comunicação por rádio ou aplicativo de mensagens, sem rastreabilidade digital centralizada. O VeroAI atua diretamente nessa lacuna, digitalizando e padronizando o registro das vistorias de campo.

---

## 2. Persona Detalhada

**Nome fictício:** João Silva
**Cargo:** Fiscal de Conservação Rodoviária
**Empresa:** Motiva (concessionária CCR)
**Regional:** Regional Oeste — SP-280
**Experiência:** 8 anos no setor rodoviário

**Perfil comportamental:**
- Realiza entre 3 e 6 inspeções de campo por dia, percorrendo trechos de rodovia a pé ou de veículo
- Trabalha em ambientes com conectividade instável, exposição a sol, chuva e poeira
- Não possui familiaridade com ferramentas tecnológicas complexas
- Valoriza respostas rápidas, interfaces diretas e pouca digitação
- Precisa registrar evidências fotográficas para respaldo em eventuais auditorias

**Dores principais:**
- Preenchimento manual de planilhas após cada vistoria
- Ausência de critério padronizado para classificar o risco da vegetação conforme exigência ARTESP
- Dificuldade em priorizar qual trecho precisa de intervenção urgente
- Risco de multa quando vegetação supera 30 cm sem registro formal da ocorrência

**Expectativas com a solução:**
- Registrar uma vistoria completa em menos de 2 minutos
- Saber imediatamente se o trecho está dentro ou fora do padrão regulatório
- Ter evidência fotográfica vinculada ao registro para fins de auditoria
- Receber recomendação automática de ação com prazo definido

---

## 3. Problema Específico

O monitoramento da vegetação nas faixas de domínio das rodovias concedidas à Motiva/CCR é realizado de forma manual, descentralizada e sujeita a inconsistências. A ausência de uma ferramenta digital padronizada compromete a qualidade dos registros, aumenta o tempo de resposta para intervenções, dificulta a comprovação de conformidade perante ARTESP e ANTT, e eleva o risco de penalidades contratuais. O VeroAI tem como objetivo digitalizar e padronizar esse processo, tornando-o mais ágil, rastreável e alinhado às exigências regulatórias vigentes.

---

## 4. Requisitos Funcionais (RF)

| ID | Descrição | Prioridade |
|----|-----------|------------|
| RF01 | O sistema deve permitir o login do fiscal com matrícula e senha | Alta |
| RF02 | O sistema deve exibir um dashboard com resumo dos trechos por status de conformidade | Alta |
| RF03 | O sistema deve listar todos os trechos monitorados com status, altura e data da última vistoria | Alta |
| RF04 | O sistema deve agrupar os trechos por dia da semana da última vistoria | Média |
| RF05 | O sistema deve exibir os detalhes de cada trecho, incluindo histórico de vistorias | Alta |
| RF06 | O sistema deve permitir iniciar uma nova vistoria vinculada a um trecho específico | Alta |
| RF07 | O sistema deve permitir o registro ou simulação de fotografia da vegetação como evidência | Alta |
| RF08 | O sistema deve permitir ao fiscal informar a altura estimada da vegetação | Alta |
| RF09 | O sistema deve classificar automaticamente a vegetação em OK, Atenção ou Crítico com base nos limites regulatórios ARTESP/ANTT | Alta |
| RF10 | O sistema deve gerar uma recomendação de ação com prazo com base na classificação | Alta |
| RF11 | O sistema deve exibir um relatório consolidado com gráficos de altura por trecho e tendência mensal | Média |
| RF12 | O sistema deve exibir o índice de conformidade regulatória dos trechos | Média |
| RF13 | O sistema deve exibir alertas visuais destacados para trechos com status Crítico | Média |
| RF14 | O sistema deve registrar data, hora e fiscal responsável em cada vistoria | Alta |
| RF15 | O sistema deve ordenar trechos e alertas pela maior criticidade (maior altura primeiro) | Alta |

---

## 5. Requisitos Não Funcionais (RNF)

| ID | Descrição | Categoria |
|----|-----------|-----------|
| RNF01 | A interface deve ser mobile-first, com largura máxima de 430px, adaptada ao uso em campo | Usabilidade |
| RNF02 | O tempo de carregamento de cada tela deve ser inferior a 2 segundos | Performance |
| RNF03 | A aplicação deve funcionar nos navegadores Chrome e Safari mobile | Compatibilidade |
| RNF04 | O sistema deve ser responsivo para diferentes tamanhos de tela mobile | Usabilidade |
| RNF05 | Os dados devem ser simulados localmente (mock) na Sprint 1, sem necessidade de backend real | Arquitetura |
| RNF06 | O código deve ser escrito em TypeScript com tipagem explícita para facilitar manutenção | Manutenibilidade |
| RNF07 | O deploy deve ser realizado na Vercel com CI/CD automático via GitHub | Infraestrutura |
| RNF08 | A aplicação não deve armazenar dados sensíveis no cliente | Segurança |
| RNF09 | A classificação de risco deve seguir estritamente os limites regulatórios definidos pela ARTESP/ANTT | Conformidade |

---

## 6. Restrições Técnicas

- Não há backend real na Sprint 1; todos os dados são simulados por arquivos mock locais
- A funcionalidade de câmera real é simulada por um botão de placeholder
- Exportação de relatório em PDF não está disponível na Sprint 1
- A classificação por visão computacional (CNN) é prevista para Sprint 2
- A autenticação corporativa com integração ao sistema da Motiva não está implementada no protótipo

---

## 7. Fluxos Principais do Usuário

### Fluxo 1 — Login e Acesso ao Dashboard
```
[Tela de Login]
  Fiscal informa matrícula e senha corporativa
  → [Dashboard]
    Exibe distribuição de status (gráfico donut)
    Exibe gráfico de barras com altura por trecho
    Exibe trechos críticos ordenados por maior altura
    Exibe índice de conformidade regulatória
    Botão de acesso rápido "Nova Vistoria"
```

### Fluxo 2 — Consulta de Trecho
```
[Dashboard] → [Lista de Trechos]
  Trechos agrupados por dia da semana da última vistoria
  Filtro por status (Todos / Crítico / Atenção / OK)
  Campo de busca por código ou município
  → [Detalhe do Trecho]
    Exibe status, altura e barra de progresso regulatório
    Exibe histórico de vistorias com observações e recomendações
    Botão "Registrar Nova Vistoria"
```

### Fluxo 3 — Registro de Vistoria (Fluxo Principal)
```
[Passo 1 — Identificação]
  Selecionar trecho (lista priorizada por criticidade)
  Confirmar fiscal responsável
  Adicionar observações iniciais
  → [Passo 2 — Foto]
    Simular captura fotográfica (câmera ou galeria)
    → [Passo 3 — Classificação]
      Inserir altura estimada via slider ou botões
      Sistema classifica automaticamente: OK / Atenção / Crítico
      → [Passo 4 — Recomendação]
        Exibe ação recomendada com prazo e nível de prioridade
        Exibe resumo completo da vistoria
        → [Relatório] ao concluir
```

### Fluxo 4 — Relatório
```
[Menu → Relatório]
  Exibe KPIs: total de trechos, vistorias no mês, críticos, em atenção
  Gráfico de barras com altura por trecho (ordenado do maior para o menor)
  Gráfico de tendência mensal de trechos críticos e em atenção
  Índice de conformidade regulatória com barra visual
  Listagem de trechos por grupo de status, ordenados por altura
  Botão "Exportar PDF" (disponível na Sprint 2)
```

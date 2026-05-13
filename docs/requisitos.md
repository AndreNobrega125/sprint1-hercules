# Documento de Requisitos — VeroAI
**Challenge CCR Motiva · Sprint 1**

---

## 1. Persona Detalhada

**Nome fictício:** João Silva  
**Cargo:** Fiscal de Conservação Rodoviária  
**Empresa:** Motiva (concessionária CCR)  
**Regional:** Regional Oeste — SP-280  
**Experiência:** 8 anos no setor rodoviário  

**Perfil comportamental:**
- Realiza entre 3 e 6 inspeções de campo por dia, percorrendo trechos de rodovia a pé ou de veículo
- Trabalha em ambientes com conectividade instável e exposição a sol, chuva e poeira
- Não possui familiaridade com ferramentas tecnológicas complexas
- Valoriza respostas rápidas, interfaces diretas e pouca digitação

**Dores principais:**
- Preenchimento manual de planilhas após cada vistoria
- Ausência de critério padronizado para classificar o risco da vegetação
- Dificuldade em priorizar qual trecho precisa de intervenção urgente
- Risco de multa quando vegetação supera 30 cm sem registro formal

**Expectativas com a solução:**
- Registrar uma vistoria em menos de 2 minutos
- Saber imediatamente se o trecho está dentro ou fora do padrão regulatório
- Ter evidência fotográfica vinculada ao registro

---

## 2. Problema Específico

O monitoramento da vegetação nas faixas de domínio das rodovias concedidas à Motiva/CCR é realizado de forma manual, descentralizada e sujeita a inconsistências. A ausência de uma ferramenta digital padronizada compromete a qualidade dos registros, aumenta o tempo de resposta para intervenções e eleva o risco de penalidades regulatórias. O objetivo do VeroAI é digitalizar e padronizar esse processo, tornando-o mais ágil, rastreável e inteligente.

---

## 3. Requisitos Funcionais (RF)

| ID | Descrição | Prioridade |
|----|-----------|------------|
| RF01 | O sistema deve permitir o login do fiscal com matrícula e senha | Alta |
| RF02 | O sistema deve exibir um dashboard com resumo dos trechos por status | Alta |
| RF03 | O sistema deve listar todos os trechos monitorados com status e última vistoria | Alta |
| RF04 | O sistema deve exibir os detalhes de cada trecho, incluindo histórico de vistorias | Alta |
| RF05 | O sistema deve permitir iniciar uma nova vistoria vinculada a um trecho | Alta |
| RF06 | O sistema deve permitir o registro ou simulação de fotografia da vegetação | Alta |
| RF07 | O sistema deve permitir ao fiscal informar a altura estimada da vegetação | Alta |
| RF08 | O sistema deve classificar automaticamente a vegetação em OK, Atenção ou Crítico | Alta |
| RF09 | O sistema deve gerar uma recomendação de ação com base na classificação | Alta |
| RF10 | O sistema deve exibir um relatório consolidado com índice de conformidade | Média |
| RF11 | O sistema deve exibir alertas visuais para trechos com status Crítico | Média |
| RF12 | O sistema deve registrar data, hora e fiscal responsável em cada vistoria | Alta |

---

## 4. Requisitos Não Funcionais (RNF)

| ID | Descrição | Categoria |
|----|-----------|-----------|
| RNF01 | A interface deve ser mobile-first, com largura máxima de 430px | Usabilidade |
| RNF02 | O tempo de carregamento de cada tela deve ser inferior a 2 segundos | Performance |
| RNF03 | A aplicação deve funcionar nos navegadores Chrome e Safari mobile | Compatibilidade |
| RNF04 | O sistema deve ser responsivo para diferentes tamanhos de tela mobile | Usabilidade |
| RNF05 | Os dados devem ser simulados localmente (mock), sem necessidade de backend real na Sprint 1 | Arquitetura |
| RNF06 | O código deve ser escrito em TypeScript com tipagem explícita | Manutenibilidade |
| RNF07 | O deploy deve ser realizado na Vercel com CI/CD via GitHub | Infraestrutura |
| RNF08 | A aplicação não deve armazenar dados sensíveis no cliente | Segurança |

---

## 5. Restrições Técnicas

- Não há backend real na Sprint 1; todos os dados são simulados por arquivos mock locais
- A funcionalidade de câmera real é simulada por um botão de placeholder
- Exportação de relatório em PDF não está disponível na Sprint 1
- A classificação por visão computacional (CNN) é prevista para Sprint 2
- A autenticação corporativa (SSO) não está implementada no protótipo

---

## 6. Fluxos Principais do Usuário

### Fluxo 1 — Login e Acesso ao Dashboard
```
[Tela de Login]
  Fiscal informa matrícula e senha
  → [Dashboard]
    Exibe resumo: trechos Críticos, Atenção, OK
    Exibe trechos críticos com acesso rápido
    Botão "Nova Vistoria"
```

### Fluxo 2 — Consulta de Trecho
```
[Dashboard] → [Lista de Trechos]
  Trechos ordenados por prioridade (Crítico primeiro)
  → [Detalhe do Trecho]
    Exibe status, altura, barra de progresso
    Exibe histórico de vistorias anteriores
    Botão "Registrar Nova Vistoria"
```

### Fluxo 3 — Registro de Vistoria (Fluxo Principal)
```
[Passo 1 — Identificação]
  Selecionar trecho
  Confirmar fiscal responsável
  Adicionar observações iniciais
  → [Passo 2 — Foto]
    Simular captura fotográfica (câmera ou galeria)
    → [Passo 3 — Classificação]
      Inserir altura estimada (slider + botões +/-)
      Sistema classifica automaticamente: OK / Atenção / Crítico
      → [Passo 4 — Recomendação]
        Exibe ação recomendada com prazo
        Exibe resumo da vistoria
        → [Relatório] (ao concluir)
```

### Fluxo 4 — Relatório
```
[Menu → Relatório]
  Exibe KPIs do mês
  Exibe barra de conformidade com legenda de cores
  Lista trechos por grupo de status
  Botão "Exportar PDF" (Sprint 2)
```

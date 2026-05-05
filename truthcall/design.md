# Design do TruthCall

## Visão Geral

O TruthCall é um aplicativo de videochamada social que integra o jogo "Verdade ou Desafio" durante as chamadas. O design segue as diretrizes de interface do iOS (Apple HIG), com foco em **orientação portrait (9:16)** e **uso com uma mão**.

---

## Paleta de Cores

| Elemento | Cor | Uso |
|----------|-----|-----|
| **Primária** | `#FF6B6B` (Vermelho vibrante) | Botões principais, destaques |
| **Secundária** | `#4ECDC4` (Teal) | Botões secundários, acentos |
| **Sucesso** | `#51CF66` (Verde) | Confirmações, estados positivos |
| **Fundo** | `#FFFFFF` (Branco) / `#0F1419` (Escuro) | Fundo da tela |
| **Superfície** | `#F5F7FA` (Cinza claro) / `#1A1E27` (Cinza escuro) | Cards, containers |
| **Texto Principal** | `#1A1A1A` (Preto) / `#FFFFFF` (Branco) | Títulos, corpo de texto |
| **Texto Secundário** | `#666666` (Cinza) / `#AAAAAA` (Cinza claro) | Labels, hints |

---

## Telas Principais

### 1. **Tela de Boas-vindas (Splash)**
- Logo do TruthCall (ícone customizado)
- Mensagem de boas-vindas
- Botão "Começar" ou "Entrar"

### 2. **Tela Inicial (Home)**
- Campo de entrada para **nome da sala**
- Botão **"Criar ou Entrar na Chamada"** (primário, grande)
- Descrição breve: "Jogue Verdade ou Desafio com amigos"
- Ícone decorativo ou ilustração

### 3. **Tela de Jogo (Game)**
- **Cabeçalho**: Nome da sala (exibição)
- **Área Central**: Pergunta/Desafio sorteado (grande, legível)
- **Botões de Ação**:
  - "Verdade" (vermelho)
  - "Desafio" (teal)
  - "Sortear Pergunta" (verde)
  - "Nova Rodada" (cinza)
- **Botão Flutuante**: Copiar pergunta / Ler em voz alta
- **Botão de Saída**: Voltar ou sair da chamada

### 4. **Tela de Videochamada (Jitsi)**
- Integração com Jitsi Meet
- Overlay com botão flutuante para acessar o jogo
- Minimizar/Maximizar o jogo

---

## Fluxo de Usuário Primário

```
Splash Screen
    ↓
Home Screen (Inserir nome da sala)
    ↓
Botão "Criar ou Entrar"
    ↓
Jitsi Meet (Videochamada iniciada)
    ↓
Overlay com Botão "Jogar"
    ↓
Game Screen (Verdade ou Desafio)
    ↓
Sortear pergunta / desafio
    ↓
Exibir resultado
    ↓
Copiar ou Ler em voz alta
    ↓
Nova rodada ou voltar à chamada
```

---

## Componentes Principais

| Componente | Descrição | Comportamento |
|------------|-----------|----------------|
| **Input de Sala** | Campo de texto para nome da sala | Validação: não vazio, máx 50 caracteres |
| **Botão Primário** | "Criar ou Entrar" | Larga, destaque visual, haptic feedback |
| **Botão de Ação** | "Verdade", "Desafio", "Sortear" | Médio, feedback visual ao pressionar |
| **Card de Pergunta** | Exibe pergunta/desafio sorteado | Fundo destacado, texto grande (18-24px) |
| **Botão Flutuante** | Copiar / Ler em voz alta | Ícone + texto, posição fixa |
| **Tab Bar** | Navegação entre abas (opcional) | Ícones com labels |

---

## Tipografia

| Elemento | Tamanho | Peso | Espaçamento |
|----------|--------|------|-------------|
| **Título Principal** | 32px | Bold (700) | 1.2x line-height |
| **Título Secundário** | 24px | Semibold (600) | 1.2x line-height |
| **Corpo de Texto** | 16px | Regular (400) | 1.5x line-height |
| **Label/Hint** | 14px | Regular (400) | 1.4x line-height |
| **Pergunta/Desafio** | 20-24px | Semibold (600) | 1.6x line-height |

---

## Espaçamento e Layout

- **Padding padrão**: 16px (horizontal), 12px (vertical)
- **Gap entre elementos**: 12px (pequeno), 16px (médio), 24px (grande)
- **Raio de borda**: 12px (cards), 8px (botões)
- **Altura de botão**: 48px (primário), 40px (secundário)

---

## Animações e Feedback

| Ação | Feedback | Duração |
|------|----------|---------|
| Pressionar botão | Scale 0.97 + haptic light | 80ms |
| Sortear pergunta | Fade in + slide up | 300ms |
| Copiar pergunta | Toast notification | 2s |
| Transição de tela | Fade + slide | 250ms |

---

## Acessibilidade

- Contraste mínimo: WCAG AA (4.5:1 para texto)
- Tamanho mínimo de toque: 44x44pt
- Labels descritivos para botões
- Suporte a dark mode automático
- Leitura em voz alta integrada (TTS)

---

## Considerações de Implementação

1. **Jitsi Meet**: Usar `react-native-jitsi-meet` ou `expo-jitsi-meet`
2. **Armazenamento Local**: AsyncStorage para perguntas/desafios
3. **Text-to-Speech**: `expo-speech` para ler pergunta em voz alta
4. **Clipboard**: `expo-clipboard` para copiar pergunta
5. **Haptics**: `expo-haptics` para feedback tátil
6. **Tema**: NativeWind (Tailwind CSS) com suporte a dark mode

---

## Notas de Design

- Manter interface simples e intuitiva
- Priorizar botões grandes para uso com uma mão
- Cores vibrantes, mas não agressivas
- Feedback visual claro em todas as interações
- Suporte responsivo para diferentes tamanhos de tela

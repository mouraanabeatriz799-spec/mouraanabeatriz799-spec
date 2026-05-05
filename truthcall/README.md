# TruthCall

**Um aplicativo de videochamada social que integra o jogo "Verdade ou Desafio" em tempo real.**

---

## 📱 Visão Geral

O TruthCall é um aplicativo inovador que combina a funcionalidade de videochamada com um jogo social interativo. Desenvolvido com **React Native (Expo)** e integrado ao **Jitsi Meet**, o app permite que amigos joguem "Verdade ou Desafio" durante chamadas de vídeo, criando uma experiência social única e divertida.

### Problema Resolvido

Videochamadas tradicionais podem se tornar monótonas, especialmente em grupos de amigos. O TruthCall resolve esse problema oferecendo uma forma criativa e interativa de manter a diversão durante as chamadas, sem necessidade de ferramentas externas ou servidores complexos.

### Proposta de Valor

| Aspecto | Benefício |
|--------|----------|
| **Simplicidade** | Sem necessidade de backend ou configurações complexas |
| **Diversão** | Jogo integrado com perguntas e desafios pré-carregados |
| **Acessibilidade** | Interface intuitiva e responsiva para qualquer dispositivo |
| **Criatividade** | Mistura videochamada com entretenimento social |
| **Demonstração** | Perfeito para apresentações acadêmicas e projetos |

---

## 🛠️ Tecnologias Utilizadas

O TruthCall foi desenvolvido com as seguintes tecnologias:

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React Native** | 0.81.5 | Framework principal para desenvolvimento mobile |
| **Expo** | 54 | Plataforma para build e deploy de apps React Native |
| **TypeScript** | 5.9 | Tipagem estática para maior segurança de código |
| **NativeWind** | 4.2.1 | Tailwind CSS para React Native |
| **Jitsi Meet** | 2.3.1 | Integração de videochamada |
| **expo-speech** | ~1.1.0 | Text-to-Speech para ler perguntas em voz alta |
| **expo-clipboard** | ~15.0.8 | Copiar perguntas para área de transferência |
| **expo-haptics** | ~15.0.8 | Feedback tátil para interações |

---

## 📋 Funcionalidades

### Tela Inicial
- Campo de entrada para nome da sala de videochamada
- Validação para impedir sala vazia
- Botão destacado "Criar ou Entrar na Chamada"
- Descrição clara do funcionamento do app

### Tela de Videochamada
- Integração com Jitsi Meet para chamadas de vídeo
- Indicador de status da chamada
- Botão flutuante para acessar o jogo
- Opção para encerrar a chamada

### Tela de Jogo
- **Botões de Ação**:
  - "Verdade" - Sorteia uma pergunta de verdade
  - "Desafio" - Sorteia um desafio
  - "Sortear Pergunta" - Escolhe aleatoriamente entre verdade ou desafio
  - "Nova Rodada" - Reseta para nova pergunta

- **Funcionalidades Extras**:
  - Copiar pergunta/desafio para área de transferência
  - Ler pergunta em voz alta usando Text-to-Speech
  - Exibição clara e legível da pergunta sorteada
  - Histórico de perguntas já utilizadas

### Listas de Perguntas e Desafios
- **20 Perguntas de Verdade** pré-carregadas localmente
- **20 Desafios Simples** pré-carregados localmente
- Sorteio sem repetição durante a sessão
- Reset automático quando todas as perguntas forem usadas

---

## 🚀 Como Instalar

### Pré-requisitos
- Node.js 18+ instalado
- pnpm (gerenciador de pacotes)
- Expo CLI instalado globalmente: `npm install -g expo-cli`

### Passos de Instalação

1. **Clone ou baixe o projeto**:
   ```bash
   cd truthcall
   ```

2. **Instale as dependências**:
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   pnpm dev
   ```

4. **Acesse o preview**:
   - Abra o navegador e acesse a URL exibida no terminal
   - Ou escaneie o QR code com o Expo Go em seu dispositivo

### Build para Android/iOS

Para gerar um APK ou IPA, use os comandos:

```bash
# Para Android
pnpm android

# Para iOS
pnpm ios
```

---

## 📖 Como Usar

### Passo 1: Iniciar o App
Abra o TruthCall no seu dispositivo ou no preview do navegador.

### Passo 2: Inserir Nome da Sala
Digite um nome único para a sala de videochamada (ex: "Sala dos Amigos", "Reunião Noturna").

### Passo 3: Criar ou Entrar na Chamada
Clique no botão **"Criar ou Entrar na Chamada"** para iniciar a videochamada via Jitsi Meet.

### Passo 4: Iniciar o Jogo
Após a chamada estar ativa, clique em **"Abrir Jogo"** para acessar a tela de jogo.

### Passo 5: Jogar
- Escolha **"Verdade"** para sortear uma pergunta pessoal
- Escolha **"Desafio"** para sortear um desafio divertido
- Use **"Sortear Pergunta"** para deixar o app decidir
- Clique **"Copiar"** para copiar a pergunta
- Clique **"Ler em Voz Alta"** para ouvir a pergunta

---

## 🎮 Como Jogar

### Regras Básicas

1. **Verdade**: O jogador escolhido deve responder honestamente a uma pergunta pessoal
2. **Desafio**: O jogador escolhido deve completar um desafio divertido e seguro
3. **Rodadas**: Cada rodada permite sortear uma nova pergunta ou desafio
4. **Diversão**: O objetivo é se divertir e conhecer melhor seus amigos

### Exemplos de Perguntas de Verdade
- "Qual é o seu maior medo?"
- "Você já mentiu para seus amigos?"
- "Qual é o seu segredo mais embaraçoso?"
- "Qual pessoa você mais admira?"

### Exemplos de Desafios
- "Faça uma dança engraçada por 10 segundos"
- "Cante uma música em voz alta"
- "Imite um animal"
- "Fale com sotaque diferente por 1 minuto"

---

## 🎨 Design e Interface

### Paleta de Cores
- **Primária**: Vermelho vibrante (#FF6B6B) - Botões principais
- **Secundária**: Teal (#4ECDC4) - Botões secundários
- **Sucesso**: Verde (#51CF66) - Confirmações
- **Fundo**: Branco/Escuro com suporte a dark mode

### Características de Design
- Interface responsiva para diferentes tamanhos de tela
- Suporte a modo escuro automático
- Botões grandes para uso com uma mão
- Feedback visual e tátil em todas as interações
- Tipografia clara e legível

---

## 📸 Screenshots

*Espaço reservado para screenshots do aplicativo*

### Tela Inicial
```
[Screenshot da tela inicial com campo de entrada]
```

### Tela de Jogo
```
[Screenshot da tela de jogo com pergunta sorteada]
```

### Tela de Videochamada
```
[Screenshot da tela de videochamada ativa]
```

---

## 🔗 QR Code para Preview

*Espaço reservado para QR Code do preview*

Escaneie o QR code abaixo para acessar o preview do TruthCall:

```
[QR Code será gerado automaticamente]
```

**Link de Preview**: [Clique aqui para acessar o preview do TruthCall](https://8081-i0l0f7gal72zpr6j80ie7-d74612f3.us2.manus.computer)

---

## 🏗️ Estrutura do Projeto

```
truthcall/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx       # Layout da tab bar
│   │   └── index.tsx         # Tela inicial
│   ├── _layout.tsx           # Layout raiz
│   ├── call.tsx              # Tela de videochamada
│   └── game.tsx              # Tela de jogo
├── components/
│   ├── screen-container.tsx  # Container com SafeArea
│   └── ui/
│       └── icon-symbol.tsx   # Mapeamento de ícones
├── hooks/
│   ├── use-colors.ts         # Hook para cores do tema
│   └── use-color-scheme.ts   # Hook para modo escuro
├── lib/
│   ├── utils.ts              # Utilitários (cn)
│   └── _core/
│       └── theme.ts          # Configuração de tema
├── assets/
│   └── images/
│       ├── icon.png          # Ícone do app
│       ├── splash-icon.png   # Ícone de splash
│       └── favicon.png       # Favicon
├── app.config.ts             # Configuração do Expo
├── theme.config.js           # Paleta de cores
├── tailwind.config.js        # Configuração do Tailwind
└── README.md                 # Este arquivo
```

---

## 🔧 Configuração

### Variáveis de Ambiente

O TruthCall não requer variáveis de ambiente externas. Todas as configurações estão no arquivo `app.config.ts`:

```typescript
const env = {
  appName: "TruthCall",
  appSlug: "truthcall",
  logoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/...",
};
```

### Permissões Necessárias

O app requer as seguintes permissões:

| Permissão | Propósito |
|-----------|----------|
| **Internet** | Conexão com Jitsi Meet e serviços online |
| **Câmera** | Videochamada via Jitsi Meet |
| **Microfone** | Áudio durante a videochamada |
| **Clipboard** | Copiar perguntas para área de transferência |

Essas permissões são solicitadas automaticamente quando necessário.

---

## 🧪 Testes

Para executar os testes do projeto:

```bash
pnpm test
```

Os testes cobrem:
- Sorteio de perguntas e desafios
- Validação de entrada de sala
- Navegação entre telas
- Funcionalidade de copiar e ler em voz alta

---

## 🐛 Troubleshooting

### Problema: App não carrega
**Solução**: Limpe o cache e reinicie o servidor
```bash
pnpm dev
```

### Problema: Videochamada não funciona
**Solução**: Verifique permissões de câmera e microfone no dispositivo

### Problema: Text-to-Speech não funciona
**Solução**: Verifique se o idioma português (pt-BR) está disponível no dispositivo

### Problema: Perguntas se repetem
**Solução**: Isso é esperado após usar todas as 20 perguntas. O app reseta automaticamente.

---

## 📝 Licença

Este projeto foi desenvolvido como demonstração acadêmica e criativa. Sinta-se livre para usar, modificar e distribuir conforme necessário.

---

## 👨‍💻 Desenvolvimento

### Stack Técnico
- **Frontend**: React Native + Expo
- **Linguagem**: TypeScript
- **Styling**: NativeWind (Tailwind CSS)
- **State Management**: React Hooks + AsyncStorage
- **Integração**: Jitsi Meet, Expo APIs

### Próximas Melhorias Possíveis
- Integração completa com Jitsi Meet SDK
- Sincronização de perguntas entre participantes
- Sistema de pontuação e ranking
- Perguntas customizadas por usuário
- Suporte a múltiplos idiomas
- Temas customizáveis
- Histórico de rodadas

---

## 📞 Suporte

Para dúvidas ou sugestões sobre o TruthCall, entre em contato com o desenvolvedor ou abra uma issue no repositório.

---

## 🎉 Conclusão

O TruthCall é uma solução criativa e simples para tornar videochamadas mais divertidas e interativas. Perfeito para amigos, familiares e colegas que desejam se conhecer melhor enquanto se divertem. Desenvolvido com tecnologias modernas e práticas de desenvolvimento profissional, o app está pronto para demonstração e uso imediato.

**Aproveite o jogo e divirta-se!** 🎮📱

---

**Desenvolvido com ❤️ usando React Native, Expo e Jitsi Meet**

*Última atualização: Maio de 2026*

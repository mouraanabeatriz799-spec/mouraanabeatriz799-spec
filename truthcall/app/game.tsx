import { ScrollView, Text, View, Pressable, Alert, Share, Platform } from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";
import * as Speech from "expo-speech";
import * as Clipboard from "expo-clipboard";

// Listas de perguntas e desafios
const PERGUNTAS_VERDADE = [
  "Qual é o seu maior medo?",
  "Qual é o seu segredo mais embaraçoso?",
  "Você já mentiu para seus amigos?",
  "Qual pessoa você mais admira?",
  "O que você faria com 1 milhão de reais?",
  "Qual é a sua comida favorita?",
  "Você já se apaixonou por alguém?",
  "Qual é o seu hobby secreto?",
  "Você já chorou assistindo um filme?",
  "Qual é o seu maior arrependimento?",
  "Você acredita em fantasmas?",
  "Qual é o seu superpoder ideal?",
  "Você prefere viajar ou ficar em casa?",
  "Qual é a sua série favorita?",
  "Você já fez algo ilegal?",
  "Qual pessoa te inspira?",
  "Você gosta de estar sozinho?",
  "Qual é seu maior sonho?",
  "Você já traiu alguém?",
  "O que você mudaria em si mesmo?",
];

const DESAFIOS = [
  "Faça uma dança engraçada por 10 segundos",
  "Cante uma música em voz alta",
  "Fale com sotaque diferente por 1 minuto",
  "Faça 10 flexões",
  "Imite um animal",
  "Conte uma piada",
  "Faça uma careta engraçada",
  "Pule em um pé por 30 segundos",
  "Fale de trás para frente",
  "Faça um som engraçado",
  "Dança como um robô",
  "Cante como um ópera",
  "Faça uma acrobacia segura",
  "Imite um personagem famoso",
  "Fale como um pirata",
  "Faça um desenho rápido",
  "Cante uma música infantil",
  "Faça um discurso motivacional",
  "Imite seu melhor amigo",
  "Faça uma pose de yoga",
];

export default function GameScreen() {
  const { roomName } = useLocalSearchParams<{ roomName: string }>();
  const router = useRouter();
  const colors = useColors();

  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [gameMode, setGameMode] = useState<"truth" | "dare" | null>(null);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const [isSpeaking, setIsSpeaking] = useState(false);

  const getRandomQuestion = (mode: "truth" | "dare") => {
    const questions = mode === "truth" ? PERGUNTAS_VERDADE : DESAFIOS;
    let randomIndex;
    let attempts = 0;

    do {
      randomIndex = Math.floor(Math.random() * questions.length);
      attempts++;
    } while (usedIndices.has(randomIndex) && attempts < 10);

    if (attempts >= 10) {
      // Reset if all questions have been used
      setUsedIndices(new Set());
      randomIndex = Math.floor(Math.random() * questions.length);
    }

    const newUsed = new Set(usedIndices);
    newUsed.add(randomIndex);
    setUsedIndices(newUsed);

    return questions[randomIndex];
  };

  const handleTruth = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const question = getRandomQuestion("truth");
    setCurrentQuestion(question);
    setGameMode("truth");
  };

  const handleDare = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const question = getRandomQuestion("dare");
    setCurrentQuestion(question);
    setGameMode("dare");
  };

  const handleSortear = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const mode = Math.random() > 0.5 ? "truth" : "dare";
    const question = getRandomQuestion(mode);
    setCurrentQuestion(question);
    setGameMode(mode);
  };

  const handleNovaRodada = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCurrentQuestion(null);
    setGameMode(null);
  };

  const handleCopiar = async () => {
    if (!currentQuestion) return;
    await Clipboard.setStringAsync(currentQuestion);
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert("Sucesso", "Pergunta copiada para a área de transferência!");
  };

  const handleLerEmVozAlta = async () => {
    if (!currentQuestion) return;
    
    if (isSpeaking) {
      await Speech.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      await Speech.speak(currentQuestion, {
        language: "pt-BR",
        pitch: 1,
        rate: 0.9,
        onDone: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    }
  };

  const handleVoltar = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6">
          {/* Header */}
          <View className="items-center gap-2 pt-4">
            <Text className="text-3xl font-bold text-primary">TruthCall</Text>
            <Text className="text-sm text-muted">Sala: {roomName}</Text>
          </View>

          {/* Current Question Display */}
          {currentQuestion ? (
            <View className="bg-surface rounded-2xl p-6 border-2 border-primary gap-4">
              <View className="items-center gap-2">
                <Text className="text-sm font-semibold text-muted uppercase">
                  {gameMode === "truth" ? "Verdade" : "Desafio"}
                </Text>
                <Text
                  className="text-2xl font-bold text-foreground text-center leading-relaxed"
                  style={{ color: gameMode === "truth" ? colors.primary : colors.secondary }}
                >
                  {currentQuestion}
                </Text>
              </View>

              {/* Action Buttons for Current Question */}
              <View className="gap-3 mt-4">
                <Pressable
                  onPress={handleCopiar}
                  style={({ pressed }) => [
                    {
                      backgroundColor: colors.border,
                      opacity: pressed ? 0.8 : 1,
                      transform: [{ scale: pressed ? 0.97 : 1 }],
                    },
                  ]}
                  className="rounded-lg py-3 items-center"
                >
                  <Text className="text-foreground font-semibold">📋 Copiar</Text>
                </Pressable>

                <Pressable
                  onPress={handleLerEmVozAlta}
                  style={({ pressed }) => [
                    {
                      backgroundColor: isSpeaking ? colors.error : colors.success,
                      opacity: pressed ? 0.8 : 1,
                      transform: [{ scale: pressed ? 0.97 : 1 }],
                    },
                  ]}
                  className="rounded-lg py-3 items-center"
                >
                  <Text className="text-white font-semibold">
                    {isSpeaking ? "⏹️ Parar" : "🔊 Ler em Voz Alta"}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <View className="bg-surface rounded-2xl p-6 items-center justify-center gap-4 flex-1">
              <Text className="text-lg font-semibold text-foreground">
                Escolha uma opção para começar
              </Text>
              <Text className="text-sm text-muted text-center">
                Clique em "Verdade" ou "Desafio" para sortear uma pergunta
              </Text>
            </View>
          )}

          {/* Game Buttons */}
          <View className="gap-3">
            <View className="flex-row gap-3">
              <Pressable
                onPress={handleTruth}
                style={({ pressed }) => [
                  {
                    backgroundColor: colors.primary,
                    flex: 1,
                    opacity: pressed ? 0.9 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                  },
                ]}
                className="rounded-lg py-4 items-center justify-center"
              >
                <Text className="text-white font-bold text-base">Verdade</Text>
              </Pressable>

              <Pressable
                onPress={handleDare}
                style={({ pressed }) => [
                  {
                    backgroundColor: colors.secondary,
                    flex: 1,
                    opacity: pressed ? 0.9 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                  },
                ]}
                className="rounded-lg py-4 items-center justify-center"
              >
                <Text className="text-white font-bold text-base">Desafio</Text>
              </Pressable>
            </View>

            <Pressable
              onPress={handleSortear}
              style={({ pressed }) => [
                {
                  backgroundColor: colors.success,
                  opacity: pressed ? 0.9 : 1,
                  transform: [{ scale: pressed ? 0.97 : 1 }],
                },
              ]}
              className="rounded-lg py-4 items-center justify-center"
            >
              <Text className="text-white font-bold text-base">🎲 Sortear Pergunta</Text>
            </Pressable>

            {currentQuestion && (
              <Pressable
                onPress={handleNovaRodada}
                style={({ pressed }) => [
                  {
                    backgroundColor: colors.muted,
                    opacity: pressed ? 0.8 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                  },
                ]}
                className="rounded-lg py-4 items-center justify-center"
              >
                <Text className="text-white font-bold text-base">Nova Rodada</Text>
              </Pressable>
            )}
          </View>

          {/* Back Button */}
          <Pressable
            onPress={handleVoltar}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.7 : 1,
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}
            className="rounded-lg py-3 items-center border border-border"
          >
            <Text className="text-foreground font-semibold">← Voltar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

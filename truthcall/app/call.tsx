import { View, Text, Pressable, Alert, Platform } from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

// Nota: react-native-jitsi-meet é principalmente para Android/iOS nativo
// Para Expo, usamos uma abordagem alternativa com WebView ou redirecionamento

export default function CallScreen() {
  const { roomName } = useLocalSearchParams<{ roomName: string }>();
  const router = useRouter();
  const colors = useColors();
  const [isCallActive, setIsCallActive] = useState(false);

  const handleStartCall = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsCallActive(true);

    // Nota: Em um app real, você integraria o Jitsi Meet aqui
    // Por enquanto, simulamos a chamada
    Alert.alert(
      "Videochamada",
      `Iniciando chamada na sala: ${roomName}\n\nNota: Em produção, o Jitsi Meet seria integrado aqui.`
    );
  };

  const handleOpenGame = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push({
      pathname: "/game",
      params: { roomName },
    });
  };

  const handleEndCall = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsCallActive(false);
    router.back();
  };

  return (
    <ScreenContainer className="p-6">
      <View className="flex-1 justify-between">
        {/* Header */}
        <View className="items-center gap-2 pt-4">
          <Text className="text-3xl font-bold text-primary">TruthCall</Text>
          <Text className="text-sm text-muted">Sala: {roomName}</Text>
        </View>

        {/* Call Status */}
        <View className="bg-surface rounded-2xl p-8 items-center justify-center gap-6 flex-1">
          {isCallActive ? (
            <>
              <View className="w-20 h-20 rounded-full bg-success items-center justify-center">
                <Text className="text-4xl">📞</Text>
              </View>
              <Text className="text-2xl font-bold text-foreground">Chamada Ativa</Text>
              <Text className="text-sm text-muted text-center">
                Você está conectado na sala de videochamada
              </Text>
            </>
          ) : (
            <>
              <View className="w-20 h-20 rounded-full bg-primary items-center justify-center">
                <Text className="text-4xl">📱</Text>
              </View>
              <Text className="text-2xl font-bold text-foreground">Pronto para Jogar</Text>
              <Text className="text-sm text-muted text-center">
                Inicie a videochamada para começar a jogar com seus amigos
              </Text>
            </>
          )}
        </View>

        {/* Action Buttons */}
        <View className="gap-3">
          {!isCallActive ? (
            <Pressable
              onPress={handleStartCall}
              style={({ pressed }) => [
                {
                  backgroundColor: colors.primary,
                  opacity: pressed ? 0.9 : 1,
                  transform: [{ scale: pressed ? 0.97 : 1 }],
                },
              ]}
              className="rounded-lg py-4 items-center justify-center"
            >
              <Text className="text-white font-bold text-lg">📞 Iniciar Chamada</Text>
            </Pressable>
          ) : (
            <>
              <Pressable
                onPress={handleOpenGame}
                style={({ pressed }) => [
                  {
                    backgroundColor: colors.secondary,
                    opacity: pressed ? 0.9 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                  },
                ]}
                className="rounded-lg py-4 items-center justify-center"
              >
                <Text className="text-white font-bold text-lg">🎮 Abrir Jogo</Text>
              </Pressable>

              <Pressable
                onPress={handleEndCall}
                style={({ pressed }) => [
                  {
                    backgroundColor: colors.error,
                    opacity: pressed ? 0.9 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                  },
                ]}
                className="rounded-lg py-4 items-center justify-center"
              >
                <Text className="text-white font-bold text-lg">❌ Encerrar Chamada</Text>
              </Pressable>
            </>
          )}

          <Pressable
            onPress={() => router.back()}
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
      </View>
    </ScreenContainer>
  );
}

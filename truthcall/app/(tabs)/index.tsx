import { ScrollView, Text, View, TextInput, Pressable, Alert } from "react-native";
import { useState } from "react";
import { useRouter, Stack } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HomeScreenContent />
    </>
  );
}

function HomeScreenContent() {
  const [roomName, setRoomName] = useState("");
  const router = useRouter();
  const colors = useColors();

  const handleJoinCall = async () => {
    if (!roomName.trim()) {
      Alert.alert("Erro", "Por favor, insira um nome para a sala");
      return;
    }

    // Haptic feedback
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Navigate to call screen with room name
    router.push({
      pathname: "/call",
      params: { roomName: roomName.trim() },
    });
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 justify-between">
          {/* Hero Section */}
          <View className="items-center gap-6 mt-12">
            {/* Logo Text */}
            <View className="items-center gap-2">
              <Text className="text-5xl font-bold text-primary">TruthCall</Text>
              <Text className="text-lg text-secondary font-semibold">Verdade ou Desafio</Text>
            </View>

            {/* Tagline */}
            <Text className="text-base text-muted text-center leading-relaxed max-w-xs">
              Jogue "Verdade ou Desafio" com seus amigos durante videochamadas
            </Text>
          </View>

          {/* Input Section */}
          <View className="gap-6 my-12">
            {/* Room Name Input */}
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Nome da Sala</Text>
              <TextInput
                placeholder="Digite um nome para a sala"
                placeholderTextColor={colors.muted}
                value={roomName}
                onChangeText={setRoomName}
                maxLength={50}
                className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
                style={{
                  color: colors.foreground,
                  borderColor: colors.border,
                  backgroundColor: colors.surface,
                }}
              />
              <Text className="text-xs text-muted">
                {roomName.length}/50 caracteres
              </Text>
            </View>

            {/* Join Button */}
            <Pressable
              onPress={handleJoinCall}
              style={({ pressed }) => [
                {
                  backgroundColor: colors.primary,
                  opacity: pressed ? 0.9 : 1,
                  transform: [{ scale: pressed ? 0.97 : 1 }],
                },
              ]}
              className="rounded-lg py-4 items-center justify-center"
            >
              <Text className="text-white font-bold text-lg">Criar ou Entrar na Chamada</Text>
            </Pressable>
          </View>

          {/* Features Section */}
          <View className="gap-4 mb-8">
            <Text className="text-sm font-semibold text-foreground">Como funciona:</Text>
            
            <View className="flex-row gap-3">
              <Text className="text-primary font-bold text-lg">1.</Text>
              <Text className="flex-1 text-sm text-foreground leading-relaxed">
                Insira um nome para a sala de videochamada
              </Text>
            </View>

            <View className="flex-row gap-3">
              <Text className="text-secondary font-bold text-lg">2.</Text>
              <Text className="flex-1 text-sm text-foreground leading-relaxed">
                Inicie a chamada via Jitsi Meet
              </Text>
            </View>

            <View className="flex-row gap-3">
              <Text className="text-success font-bold text-lg">3.</Text>
              <Text className="flex-1 text-sm text-foreground leading-relaxed">
                Jogue "Verdade ou Desafio" com seus amigos
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

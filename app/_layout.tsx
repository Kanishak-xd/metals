import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#000" : "#fff",
        },
        headerTintColor: isDark ? "#fff" : "#000",
        headerTitleStyle: {
          fontWeight: "bold",
          color: isDark ? "#fff" : "#000",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Metals",
        }}
      />
      <Stack.Screen
        name="details/[metal]"
        options={({ route }: any) => {
          const metal = route.params?.metal || "";
          const title = metal
            ? String(metal).charAt(0).toUpperCase() + String(metal).slice(1)
            : "Details";
          return {
            title,
          };
        }}
      />
    </Stack>
  );
}

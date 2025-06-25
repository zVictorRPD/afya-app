import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ title: "Home" }}
            />
            <Stack.Screen
                name="financial"
                options={{ title: "Financeiro" }}
            />
            <Stack.Screen
                name="loading"
                options={{ title: "Carregando" }}
            />
        </Stack>
    );
}

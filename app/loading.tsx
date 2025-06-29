import { useNavigation } from "expo-router";
import { ActivityIndicator, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Loading() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator
            >
                <View
                    style={styles.loadingContainer}
                >
                    <ActivityIndicator size="large" color="#cf0058" />
                    <Text style={styles.loadingText}>
                        Carregando...
                    </Text>
                    <Pressable style={styles.returnButton} onPress={() => {
                        navigation.goBack();
                    }}>
                        <Text style={styles.textButton}>Tentar novamente mais tarde</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
    },
    loadingText: {
        color: "#cf0058",
        fontWeight: "600",
        fontSize: 18,
    },
    returnButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#cf0058",
        borderRadius: 8,
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    }
});
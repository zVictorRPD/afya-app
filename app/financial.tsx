import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Financial() {
    const router = useRouter();
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator
        >
            <View style={styles.container}>
                <View
                    style={styles.grayHeader}
                >
                    <Text
                        style={styles.grayHeaderText}
                    >
                        MATRÍCULA
                    </Text>
                    <View
                        style={styles.subCard}
                    >
                        <Text
                            style={styles.subCardText}
                        >
                            2025/2 | MEDICINA | Integral
                        </Text>
                        <Text
                            style={styles.subCardText}
                        >
                            Situação: MATRICULADO
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fafafa",
    },
    grayHeader: {
        backgroundColor: "#e0e0e0",
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        position: "relative",
    },
    grayHeaderText: {
        color: "#5d5d5d",
        fontSize: 14,
        marginBottom: 12,
        fontWeight: 600,
    },
    subCard: {
        backgroundColor: "#FFF",
        padding: 12,
        borderRadius: 12,
    },
    subCardText: {
        color: "#cf0058",
        fontSize: 16,
    },
})
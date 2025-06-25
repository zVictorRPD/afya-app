import { PagesCards } from "@/components/PageCard";
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
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
                        Contexto Educacional
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
                        <FontAwesome6 name="right-left" size={24} iconStyle='solid' color="#cf0058" style={styles.rightIcon} />
                    </View>
                </View>
                <PagesCards />
            </View>
        </ScrollView>
    );
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
        fontSize: 18,
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
    rightIcon: {
        position: "absolute",
        top: '50%',
        right: 14,
        transform: [{ rotate: '90deg' }],
    }
});
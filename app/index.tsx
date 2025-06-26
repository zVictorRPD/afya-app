import { PagesCards } from "@/components/PageCard";
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator
        >
            <View
                style={styles.pageHeaderContainer}
            >
                <FontAwesome6
                    name="t"
                    size={24}
                    iconStyle='solid'
                    color="#d5d5d5"
                    style={styles.headerIcon}
                />
                <Text style={styles.headerText}>
                    Olá, PAULA BAILUNE ANTUNES.
                </Text>
            </View>
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
    pageHeaderContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
        backgroundColor: "#fafafa",
        paddingTop: 10,
        paddingBottom: 2,
        marginTop: StatusBar?.currentHeight ? StatusBar?.currentHeight + 60 : 100
    },
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: "#fafafa",
    },
    headerIcon: {
        transform: [{ rotate: "90deg" }],
    },
    headerText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#cf0058",
    },
    grayHeader: {
        backgroundColor: "#e0e0e0",
        padding: 10,
        borderRadius: 12,
        marginBottom: 10,
        position: "relative",
    },
    grayHeaderText: {
        color: "#5d5d5d",
        fontSize: 16,
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
        fontSize: 14,
        fontWeight: "500",
    },
    rightIcon: {
        position: "absolute",
        top: '50%',
        right: 14,
        transform: [{ rotate: '90deg' }],
    }
});
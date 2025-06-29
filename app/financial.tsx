import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Financial() {
    const mockupData = [
        {
            title: "MATRÍCULA",
            date: "10/01/25",
            value: "12.250,46",
            status: "BAIXADO",
        },
        {
            title: "MENSALIDADE",
            date: "10/02/25",
            value: "12.250,46",
            status: "BAIXADO",
        },
        {
            title: "MENSALIDADE",
            date: "10/03/25",
            value: "12.985,48",
            status: "PENDENTE",
        },
        {
            title: "MENSALIDADE",
            date: "10/04/25",
            value: "12.862,98",
            status: "PENDENTE",
        },
        {
            title: "MENSALIDADE",
            date: "10/05/25",
            value: "12.740,47",
            status: "PENDENTE",
        },
        {
            title: "MENSALIDADE",
            date: "10/06/25",
            value: "12.617,97",
            status: "PENDENTE",
        },
        {
            title: "MATRÍCULA",
            date: "10/07/25",
            value: "12.500,57",
            status: "PENDENTE",
        }
    ]
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator
        >
            <View style={styles.container}>
                <View style={styles.secondContainer}>
                    <View style={styles.secondHeader}>
                        <FontAwesome6
                            name="t"
                            size={24}
                            iconStyle='solid'
                            color="#d5d5d5"
                            style={styles.secondHeaderIcon}
                        />
                        <Text style={styles.secondHeaderText}>
                            Outros Serviços
                        </Text>
                    </View>
                    <FlatList
                        data={mockupData}
                        keyExtractor={(item) => item.title + item.date}
                        renderItem={({ item }) => (
                            <View style={styles.rowContainer}>
                                <View
                                    style={{
                                        ...styles.grayHeader,
                                        flex: 1,
                                    }}
                                >
                                    <Text
                                        style={styles.grayHeaderText}
                                    >
                                        {item.title}
                                    </Text>
                                    <View style={styles.subCardContainer}>
                                        <View
                                            style={styles.subCard}
                                        >
                                            <Text
                                                style={{ ...styles.subCardText, color: "#191919" }}
                                            >
                                                Venc.
                                            </Text>
                                            <View style={styles.subCardDivider} />
                                            <Text
                                                style={styles.subCardText}
                                            >
                                                {item.date}
                                            </Text>
                                        </View>
                                        <View
                                            style={styles.subCard}
                                        >
                                            <Text
                                                style={{ ...styles.subCardText, color: "#191919" }}
                                            >
                                                Valor
                                            </Text>
                                            <View style={styles.subCardDivider} />
                                            <Text
                                                style={styles.subCardText}
                                            >
                                                {item.value}
                                            </Text>
                                        </View>
                                        <View
                                            style={styles.subCard}
                                        >
                                            <Text
                                                style={{ ...styles.subCardText, color: "#191919" }}
                                            >
                                                Status
                                            </Text>
                                            <View style={styles.subCardDivider} />
                                            <Text
                                                style={{ ...styles.subCardText, color: item.status === "PENDENTE" ? "#fb2c36" : "#498e4d" }}
                                            >
                                                {item.status}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    ...styles.grayHeader,
                                    ...styles.grayHeaderIcon
                                }}>
                                    {item.status === "PENDENTE" ? (
                                        <FontAwesome6 name='triangle-exclamation' size={32} iconStyle='solid' color="#fb2c36" />
                                    ) : (
                                        <FontAwesome6 name='circle-check' size={32} iconStyle='solid' color="#498e4d" />
                                    )}
                                </View>
                            </View>
                        )}
                        scrollEnabled={false}
                        contentContainerStyle={{ gap: 8 }}

                    />
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: "#fafafa",
        marginTop: StatusBar?.currentHeight ? StatusBar?.currentHeight + 60 : 100
    },
    secondContainer: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: "#eeeeee"
    },
    secondHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 12,
    },
    secondHeaderIcon: {
        transform: [{ rotate: "90deg" }],
    },
    secondHeaderText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#cf0058",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
    },
    grayHeader: {
        backgroundColor: "#e0e0e0",
        padding: 8,
        borderRadius: 12,
        minHeight: 90,
        position: "relative",
    },
    grayHeaderIcon: {
        width: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    grayHeaderText: {
        color: "#5d5d5d",
        fontSize: 12,
        marginBottom: 6,
        fontWeight: 600,
    },
    subCardContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        gap: 8
    },
    subCard: {
        flex: 1,
        backgroundColor: "#FFF",
        padding: 6,
        borderRadius: 12,
    },
    subCardDivider: {
        height: 2,
        backgroundColor: "#bebebe",
        marginVertical: 6,
    },
    subCardText: {
        textAlign: "center",
        fontWeight: "600",
        color: "#cf0058",
        fontSize: 11,
    },
})
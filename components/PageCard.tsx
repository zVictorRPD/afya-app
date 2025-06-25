import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
interface IPageProps {
    title: string;
    link: "/loading" | "/financial";
    icon: React.ReactNode;
    bookmark: boolean;
    invisible?: boolean;
}
export function PagesCards() {

    const pages = [
        {
            title: "Carteirinha Digital",
            link: "/loading",
            icon: <FontAwesome6 name="address-card" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Check-In na Aula",
            link: "/loading",
            icon: <FontAwesome6 name="location-dot" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: true
        },
        {
            title: "Horário",
            link: "/loading",
            icon: <FontAwesome6 name="clock" size={32} iconStyle='regular' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Notas e Faltas",
            link: "/loading",
            icon: <FontAwesome6 name="pen" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Documentos Digitais",
            link: "/loading",
            icon: <FontAwesome6 name="print" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Calendário",
            link: "/loading",
            icon: <FontAwesome6 name="calendar-days" size={32} iconStyle='regular' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Financeiro",
            link: "/financial",
            icon: <FontAwesome6 name="dollar-sign" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: true
        },
        {
            title: "Negociação",
            link: "/loading",
            icon: <FontAwesome6 name="handshake" size={32} iconStyle='regular' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Rematricula",
            link: "/loading",
            icon: <FontAwesome6 name="rotate-right" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: true
        },
        {
            title: "Plano de Aula",
            link: "/loading",
            icon: <FontAwesome6 name="rectangle-list" size={32} iconStyle='regular' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Solicitações",
            link: "/loading",
            icon: <FontAwesome6 name="right-left" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: true
        },
        {
            title: "Atividades Complementares",
            link: "/loading",
            icon: <FontAwesome6 name="file-signature" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Análise Curricular",
            link: "/loading",
            icon: <FontAwesome6 name="user-graduate" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Canvas",
            link: "/loading",
            icon: <FontAwesome6 name="chalkboard-user" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Documentos Instituicionais",
            link: "/loading",
            icon: <FontAwesome6 name="folder" size={32} iconStyle='regular' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Portal de Carreiras",
            link: "/loading",
            icon: <FontAwesome6 name="briefcase" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Biblioteca",
            link: "/loading",
            icon: <FontAwesome6 name="book" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Biblioteca Digital",
            link: "/loading",
            icon: <FontAwesome6 name="book-open-reader" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "Links Úteis",
            link: "/loading",
            icon: <FontAwesome6 name="link" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false
        },
        {
            title: "",
            link: "/",
            icon: <FontAwesome6 name="ellipsis" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false,
            invisible: true
        },
        {
            title: "",
            link: "/",
            icon: <FontAwesome6 name="ellipsis" size={32} iconStyle='solid' color="#cf0058" />,
            bookmark: false,
            invisible: true
        }

    ] as IPageProps[];

    return (
        <FlatList
            data={pages}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
                if (item?.invisible) return <View style={styles.invisibleCard}></View>;
                return (
                    <Link href={item.link} asChild>
                        <Pressable style={styles.card}>
                            {item.icon}
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            {item.bookmark && <FontAwesome6 name="bookmark" size={22} iconStyle='solid' color="#cf0058" style={styles.cardBookmark} />}
                        </Pressable>
                    </Link>
                );
            }}
            numColumns={3}
            columnWrapperStyle={styles.flatListRow}
            scrollEnabled={false}
            contentContainerStyle={{ gap: 12 }}
        />
    )
}

const styles = StyleSheet.create({
    flatListRow: {
        justifyContent: "space-around",
        gap: 12,
    },
    card: {
        flex: 1,
        height: 120,
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e4e4e4",
        position: "relative"
    },
    cardTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        color: "#767676",
    },
    cardBookmark: {
        position: "absolute",
        top: -1,
        right: 18,
    },
    invisibleCard: {
        flex: 1,
        height: 120,
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: "#e4e4e4",
        opacity: 0,
    }
});

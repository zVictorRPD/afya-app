import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import Logo from './Logo';
export function Header(props: NativeStackHeaderProps) {
    const canGoBack = props?.navigation?.canGoBack();
    const isHome = props?.options?.title === "Home";

    return (
        <LinearGradient
            colors={["#cf0058", "#0955b5"]}
            style={styles.linearGradient}
            start={{ x: 0.88, y: 0 }}
            end={{ x: 0.97, y: 1 }}
        >
            <View style={styles.headerStrip} />
            <View style={styles.container}>
                {canGoBack && (
                    <Pressable>
                        <FontAwesome6
                            name="arrow-left"
                            size={24}
                            iconStyle='solid'
                            color="#fff"
                            onPress={() => props.navigation.goBack()}
                        />
                    </Pressable>
                )}
                {!isHome ? (
                    <Text style={styles.headerTitle}>
                        {props.options.title}
                    </Text>
                ) : (
                    <React.Fragment>
                        <FontAwesome6
                            name="bars"
                            size={20}
                            iconStyle='solid'
                            color="#fff"
                        />
                        <Logo />
                        <FontAwesome6
                            name="headset"
                            size={20}
                            iconStyle='solid'
                            color="#fff"
                            style={{ marginLeft: "auto" }}
                        />
                        <FontAwesome6
                            name="bell"
                            size={20}
                            iconStyle='solid'
                            color="#fff"
                        />
                    </React.Fragment>
                )}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    headerStrip: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: StatusBar.currentHeight,
        backgroundColor: '#cf0058',
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingHorizontal: 24,
        paddingTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 32,
        paddingVertical: 16,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    }
});


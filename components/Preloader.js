import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';

const Preloader = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/image/logo.png')} style={styles.logo} />
            <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#410040',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
});

export default Preloader;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextTicker from 'react-native-text-ticker';

const RadioHighlight = () => {
    return (
        <LinearGradient
            colors={['#a84de8', '#a13ae0']}
            style={styles.container}
        >
            <View style={styles.leftSection}>
                <View style={styles.radioBox}>
                    <Text style={styles.radioText}>RADIO</Text>
                </View>
                <Image
                    source={require('../assets/image/waveform.png')}
                    style={styles.waveform}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.middleSection}>
                <View style={styles.liveInfo}>
                    <Text style={styles.timeText}>17:00 pm</Text>
                    <Image
                        source={require('../assets/image/live-icon.png')}
                        style={styles.liveIcon}
                        resizeMode="contain"
                    />
                </View>

                <TextTicker
                    style={styles.title}
                    duration={8000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                >
                    A Touch More LIVE WITH SUE & MEGAN
                </TextTicker>

                <TouchableOpacity style={styles.listenNow}>
                    <Text style={styles.listenText}>LISTEN NOW ▶</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default RadioHighlight;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
    },
    leftSection: {
        alignItems: 'center',
        marginRight: 10,
    },
    radioBox: {
        backgroundColor: '#2e0854',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    radioText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    waveform: {
        width: 80,
        height: 30,
        marginTop: 5,
    },
    middleSection: {
        flex: 1,
        justifyContent: 'center',
    },
    liveInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    timeText: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 8,
    },
    liveIcon: {
        width: 80,
        height: 30,
    },
    title: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
    },
    listenNow: {
        width: '30%',
        backgroundColor: '#fff',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
    },
    listenText: {
        color: '#a13ae0',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },
});
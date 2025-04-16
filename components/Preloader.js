import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const Preloader = ({ onFinish }) => {
    return (
        <View style={styles.container}>
            <Video
                source={require('../assets/video/intro.mp4')}
                style={styles.backgroundVideo}
                resizeMode="cover"
                onEnd={onFinish}
                muted={false}
                repeat={false}
                controls={false}
            />
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
        backgroundColor: 'black',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
    },
});

export default Preloader;
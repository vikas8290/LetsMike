import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { PlayerContext } from '../components/PlayerContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const FooterPlayer = () => {
    const {
        currentEpisode,
        isPlaying,
        togglePlayPause,
        position,
        duration,
        seekTo,
    } = useContext(PlayerContext);

    const [sliderValue, setSliderValue] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        if (!isSliding && position && duration) {
            setSliderValue(position / duration);
        }
    }, [position, duration, isSliding]);

    if (!currentEpisode) return null;

    const formatTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: currentEpisode.thumbnail }} style={styles.thumbnail} />

            <View style={styles.infoSection}>
                <Text numberOfLines={1} style={styles.title}>{currentEpisode.episodeTitle}</Text>

                <Slider
                    style={styles.slider}
                    value={sliderValue}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#ddd"
                    thumbTintColor="#fff"
                    onSlidingStart={() => setIsSliding(true)}
                    onSlidingComplete={(val) => {
                        seekTo(val * duration);
                        setSliderValue(val);
                        setIsSliding(false);
                    }}
                />

                <View style={styles.timeRow}>
                    <Text style={styles.time}>{formatTime(position)}</Text>
                    <Text style={styles.time}>{formatTime(duration)}</Text>
                </View>
            </View>

            <View style={styles.controls}>
                <TouchableOpacity>
                    <Ionicons name="play-skip-back" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayPause}>
                    <Ionicons name={isPlaying ? 'pause' : 'play'} size={28} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play-skip-forward" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 78,
        width: '100%',
        backgroundColor: '#9f2ce3',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 6,
        marginRight: 10,
    },
    infoSection: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
    },
    slider: {
        width: '100%',
        height: 20,
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -6,
    },
    time: {
        color: '#fff',
        fontSize: 10,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginLeft: 10,
    },
});

export default FooterPlayer;
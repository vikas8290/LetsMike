import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { PlayerContext } from '../components/PlayerContext';
import YoutubePlayer from "react-native-youtube-iframe";

const EpisodeDetails = () => {
  const navigation = useNavigation();
  const { playAudio } = useContext(PlayerContext);
  const route = useRoute();
  const { episodeTitle, episodeDescription, episodeImage, episodeAudioUrl, youtubeId } = route.params;

  const isVideoAvailable = !!youtubeId;

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
      {isVideoAvailable ? (
        <YoutubePlayer
          height={220}
          play={true}
          videoId={youtubeId}
        />
      ) : (
        <Image source={{ uri: episodeImage }} style={styles.episodeImage} />
      )}

      <Text style={styles.episodeTitle}>{episodeTitle}</Text>
      <Text style={styles.episodeDescription}>{episodeDescription}</Text>

      {!isVideoAvailable && (
        <TouchableOpacity onPress={() => playAudio({
          episodeTitle,
          episodeAudioUrl,
          thumbnail: episodeImage,
        })} style={styles.playButton}>
          <Text style={styles.playButtonText}>Play Audio</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back to Episodes</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  episodeImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  episodeTitle: { fontSize: 24, fontWeight: 'bold', color: '#3B006B' },
  episodeDescription: { fontSize: 16, color: '#333', marginBottom: 20, lineHeight: 22 },
  playButton: {
    backgroundColor: '#3B006B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  playButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  backButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: { color: '#000', fontSize: 14 },
});

export default EpisodeDetails;
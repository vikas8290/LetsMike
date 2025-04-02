import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const EpisodeDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { episodeId, episodeTitle, episodeDescription, episodeImage, episodeAudioUrl } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={episodeImage} style={styles.episodeImage} />
        <Text style={styles.episodeTitle}>{episodeTitle}</Text>
        <Text style={styles.episodeDescription}>{episodeDescription}</Text>

        <TouchableOpacity onPress={() => console.log(`Playing audio for ${episodeTitle}`)} style={styles.playButton}>
          <Text style={styles.playButtonText}>Play Episode</Text>
        </TouchableOpacity>

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
});

export default EpisodeDetails;
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PlayerContext } from '../components/PlayerContext';
import YoutubePlayer from "react-native-youtube-iframe";

const EpisodeDetails = () => {
  const navigation = useNavigation();
  const { playAudio } = useContext(PlayerContext);
  const route = useRoute();
  const {
    episodeTitle,
    episodeDescription,
    episodeImage,
    episodeAudioUrl,
    youtubeId,
    allEpisodes = [],
  } = route.params;

  const [expanded, setExpanded] = useState(false);
  const isVideoAvailable = !!youtubeId;

  const renderEpisodeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.episodeCard}
      onPress={() =>
        navigation.push('EpisodeDetails', {
          episodeTitle: item.episodeTitle,
          episodeDescription: item.episodeDescription,
          episodeImage: item.episodeImage,
          episodeAudioUrl: item.episodeAudioUrl,
          youtubeId: item.youtubeId,
          allEpisodes: allEpisodes,
        })
      }
    >
      <Image source={{ uri: item.episodeImage }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>WONDERY+</Text>
        <Text style={styles.cardSubtitle}>{item.episodeTitle}</Text>
        <Text numberOfLines={2} style={styles.cardDesc}>
          {item.episodeDescription}
        </Text>
        <Text style={styles.cardDate}>Mar 22</Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={18} color="#999" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Episode Image or Video */}
        {isVideoAvailable ? (
          <YoutubePlayer height={260} play={true} videoId={youtubeId} />
        ) : (
          <Image source={{ uri: episodeImage }} style={styles.episodeImage} />
        )}

        {/* Title */}
        <Text style={styles.brand}>WONDERY+</Text>
        <Text style={styles.episodeTitle}>{episodeTitle}</Text>

        {/* Play & Share Buttons */}
        {!isVideoAvailable && (
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() =>
                playAudio({ episodeTitle, episodeAudioUrl, thumbnail: episodeImage })
              }
              style={styles.playButton}
            >
              <Ionicons name="play" size={18} color="#fff" />
              <Text style={styles.playText}>Play</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-social" size={18} color="#9f2ce3" />
              <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Description */}
        <Text numberOfLines={expanded ? undefined : 3} style={styles.description}>
          {episodeDescription}
        </Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.moreLink}>{expanded ? 'Less' : 'More'}</Text>
        </TouchableOpacity>

        {/* All Episodes */}
        <Text style={styles.allEpisodesTitle}>All episodes</Text>
        <FlatList
          data={allEpisodes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderEpisodeItem}
          scrollEnabled={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    backgroundColor: '#9f2ce3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 28,
    resizeMode: 'contain',
  },
  content: { padding: 20 },
  episodeImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  brand: {
    fontSize: 16,
    color: '#9f2ce3',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  episodeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3B006B',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  playButton: {
    flex: 1,
    backgroundColor: '#9f2ce3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 25,
  },
  playText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  shareButton: {
    flex: 1,
    borderColor: '#9f2ce3',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 25,
  },
  shareText: {
    color: '#9f2ce3',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  moreLink: {
    marginTop: 5,
    color: '#9f2ce3',
    fontWeight: 'bold',
    fontSize: 14,
  },
  allEpisodesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#3B006B',
  },
  episodeCard: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 6,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    color: '#9f2ce3',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardSubtitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  cardDesc: {
    fontSize: 12,
    color: '#666',
  },
  cardDate: {
    fontSize: 11,
    color: '#888',
    marginTop: 3,
  },
});

export default EpisodeDetails;
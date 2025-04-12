import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image as RNImage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const Episodes = () => {
  const navigation = useNavigation();
  const podcastImage = require('../assets/image/podcast.jpg');
  const resolvedImage = RNImage.resolveAssetSource(podcastImage).uri;

  const episodeData = [...Array(6)].map((_, index) => ({
    id: index.toString(),
    episodeTitle: `Episode ${index + 1} - A Touch More`,
    episodeDescription: 'An insightful discussion about sports and culture.',
    episodeImage: resolvedImage,
    episodeAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    youtubeId: index % 2 === 0 ? 'dQw4w9WgXcQ' : '',
  }));

  const renderEpisodeCard = ({ item }) => (
    <TouchableOpacity
      style={styles.episodeCard}
      onPress={() =>
        navigation.navigate('EpisodeDetails', {
          ...item,
          allEpisodes: episodeData,
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.episodeImage }} style={styles.episodeImage} />

        <View style={styles.centerIcon}>
          <MaterialIcons name="play-arrow" size={28} color="#fff" />
        </View>

        <View style={styles.bottomLeftIcon}>
          <MaterialIcons
            name={item.youtubeId ? 'videocam' : 'headset'}
            size={20}
            color="#000"
          />
        </View>

        <View style={styles.bottomRightIcon}>
          <Feather name="share-2" size={18} color="#000" />
        </View>
      </View>

      <Text style={styles.episodeTitle}>{item.episodeTitle}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={episodeData}
        renderItem={renderEpisodeCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.episodesContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  episodesContainer: { padding: 10 },
  episodeCard: {
    width: width * 0.45,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: width * 0.02,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  episodeImage: {
    width: '100%',
    height: height * 0.2,
    borderRadius: 10,
  },
  centerIcon: {
    position: 'absolute',
    top: '35%',
    left: '35%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 25,
    padding: 10,
  },
  bottomLeftIcon: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  bottomRightIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  episodeTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 8 },
});

export default Episodes;
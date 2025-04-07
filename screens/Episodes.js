import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Episodes = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top Video Section */}
        <View style={styles.episodeHeader}>
          <Text style={styles.sectionTitle}>Top Video</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Episodes')}>
            <Text style={styles.viewAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.episodes}>
          {[...Array(2)].map((_, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.episodeCard} 
              onPress={() => navigation.navigate('Episodes', {
                screen: 'EpisodeDetails',
                params: {
                  episodeId: index,
                  episodeTitle: 'A Touch More with Sue Bird & Megan Rapinoe',
                  episodeDescription: 'An insightful discussion about sports and culture.',
                  episodeImage: require('../assets/image/podcast.jpg'),
                  episodeAudioUrl: '#',
                },
              })}
            >
              <Image source={require('../assets/image/podcast.jpg')} style={styles.episodeImage} />
              <Text style={styles.episodeTitle}>A Touch More with Sue Bird & Megan Rapinoe</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Top Audio Section */}
        <View style={styles.episodeHeader}>
          <Text style={styles.sectionTitle}>Top Audio</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Episodes')}>
            <Text style={styles.viewAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.episodes}>
          {[...Array(2)].map((_, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.episodeCard} 
              onPress={() => navigation.navigate('Episodes', {
                screen: 'EpisodeDetails',
                params: {
                  episodeId: index,
                  episodeTitle: 'A Touch More with Sue Bird & Megan Rapinoe',
                  episodeDescription: 'An insightful discussion about sports and culture.',
                  episodeImage: require('../assets/image/podcast.jpg'),
                  episodeAudioUrl: '#',
                },
              })}
            >
              <Image source={require('../assets/image/podcast.jpg')} style={styles.episodeImage} />
              <Text style={styles.episodeTitle}>Podcast Episode</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  episodeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  episodes: {
    paddingHorizontal: 10,
  },
  episodeCard: {
    width: '25%',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  episodeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  episodeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B006B',
  },
  viewAll: {
    fontSize: 14,
    color: '#9f2ce3',
    fontWeight: 'bold',
  },
});

export default Episodes;
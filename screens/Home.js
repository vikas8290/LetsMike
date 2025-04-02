import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchPress = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const handleSearchChange = (text) => setSearchText(text);

  const handleJoinNowPress = () => navigation.navigate('Episodes');
  const handleBannerClick = () => navigation.navigate('AdDetails');
  const handleEpisodePress = () => navigation.navigate('EpisodeDetails');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
          <Image source={require('../assets/image/logo.png')} style={styles.logo} />
          <TouchableOpacity onPress={handleSearchPress}>
            <Ionicons name="search-outline" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Live Streaming Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.liveSection}>
          {[...Array(2)].map((_, index) => (
            <View key={index} style={styles.liveCard}>
              <Image source={require('../assets/image/live-thumbnail.jpg')} style={styles.liveImage} />
              <Text style={styles.liveText}>YOUR HEADLINE</Text>
              <Text style={styles.liveTime}>10:12:20</Text>
              <TouchableOpacity style={styles.joinButton} onPress={handleJoinNowPress}>
                <Text style={styles.joinButtonText}>JOIN NOW</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Categories Section */}
        <View style={styles.categories}>
          {[{ icon: 'tv', text: 'Webcast' }, { icon: 'medkit', text: 'Meditation' }, { icon: 'video-camera', text: 'Wisdom' }, { icon: 'microphone', text: 'Talks' }, { icon: 'music', text: 'Music' }].map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => console.log(`${item.text} Pressed`)}>
              <FontAwesome name={item.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Banner Ad */}
        <TouchableOpacity onPress={handleBannerClick} style={styles.bannerAd}>
          <Image source={require('../assets/image/banner-ad.jpg')} style={styles.bannerAdImage} />
        </TouchableOpacity>

        <View style={styles.episodeHeader}>
          <Text style={styles.sectionTitle}>Episodes</Text>
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
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        {['facebook', 'instagram', 'play-circle', 'youtube', 'twitter'].map((icon, index) => (
          <FontAwesome key={index} name={icon} size={24} color={icon === 'play-circle' ? 'yellow' : 'white'} />
        ))}
      </View>

      {/* Search Modal */}
      <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={handleCloseModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Ionicons name="close-circle-outline" size={30} color="#9f2ce3" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearchChange}
              autoFocus
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f2ce3',
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  logo: {
    width: width * 0.4,
    height: 50,
    resizeMode: 'contain',
  },
  liveSection: {
    paddingHorizontal: 10,
    backgroundColor: '#9f2ce3',
  },
  liveCard: {
    width: width * 0.5,
    margin: 5,
    alignItems: 'center',
    padding: 5,
  },
  liveImage: {
    width: '100%',
    height: height * 0.10,
    borderRadius: 10,
  },
  liveText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  liveTime: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 6,
  },
  joinButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  joinButtonText: {
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  categoryItem: {
    alignItems: 'center',
    margin: 10,
    width: width / 7,
  },
  categoryIcon: {
    height: 50,
    width: 50,
    fontSize: 26,
    backgroundColor: '#9f2ce3',
    color: 'white',
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
  },
  categoryText: {
    color: '#3B006B',
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 5,
  },
  bannerAd: {
    width: '100%',
    height: height * 0.2,
  },
  bannerAdImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  episodeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  episodes: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  episodeCard: {
    width: width * 0.4,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  episodeImage: {
    width: '100%',
    height: height * 0.3,
    borderRadius: 10,
  },
  episodeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3B006B',
    paddingVertical: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#9f2ce3',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  closeButton: {
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

export default Home;
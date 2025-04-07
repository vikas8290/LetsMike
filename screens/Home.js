import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Modal, TextInput, KeyboardAvoidingView, Platform, StatusBar, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const theme = useColorScheme();
  const statusBarHeight = getStatusBarHeight();

  const handleSearchPress = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const handleSearchChange = (text) => setSearchText(text);

  const handleJoinNowPress = () => navigation.navigate('Episodes');
  const handleBannerClick = () => navigation.navigate('AdDetails');
  const handleEpisodePress = () => navigation.navigate('EpisodeDetails');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? 'black' : 'white'}
      />
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: theme === 'dark' ? '#000' : '#fff',
            paddingTop: statusBarHeight,
          }
        ]}
      >
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

          <View style={styles.videoContainer}>
            <Video
              source={require('../assets/image/video-2.mp4')}
              style={styles.video}
              resizeMode="cover"
              paused={false}
              repeat
              controls={false}
            />
          </View>


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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9f2ce3',
    padding: 15,
  },
  logo: {
    width: width * 0.4,
    height: 50,
    resizeMode: 'contain',
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
    position: 'relative',
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
  videoContainer: {
    width: '100%',
    height: height * 0.50,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
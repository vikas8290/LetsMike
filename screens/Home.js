import React, { useState, useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Modal, TextInput, KeyboardAvoidingView, Platform, StatusBar, useColorScheme, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import RadioHighlight from './RadioHighlight';
import FastImage from 'react-native-fast-image';

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

  const banners = [
    require('../assets/image/banner-1.jpg'),
    require('../assets/image/banner-2.jpg'),
    require('../assets/image/banner-3.jpg'),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();

  const onScroll = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (slide !== activeIndex) setActiveIndex(slide);
  };

  const episodes = [
    { id: '1', title: 'Motivational Talk', podcast: 'Radio', image: require('../assets/image/podcast.jpg') },
    { id: '2', title: 'Mindfulness Hour', podcast: 'Radio', image: require('../assets/image/podcast.jpg') },
    { id: '3', title: 'The Daily Wrap', podcast: 'Radio', image: require('../assets/image/podcast.jpg') },
  ];

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

          <View style={styles.sliderContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              ref={scrollRef}
              scrollEventThrottle={16}
            >
              {banners.map((banner, index) => (
                <Image key={index} source={banner} style={styles.bannerSlide} />
              ))}
            </ScrollView>
            <View style={styles.dotsContainer}>
              {banners.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    { backgroundColor: index === activeIndex ? '#9f2ce3' : '#ccc' },
                  ]}
                />
              ))}
            </View>
          </View>

          {/* Radio Highlight Section */}
          <RadioHighlight />


          {/* Categories Section */}
          <View style={styles.categories}>
            {[
              { icon: require('../assets/image/radio.gif'), text: 'Live Radio', bgColor: '#007bff' },
              { icon: require('../assets/image/news.gif'), text: 'News', bgColor: '#dc3545' },
              { icon: require('../assets/image/podcast.gif'), text: 'Podcast', bgColor: '#28a745' }
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryItem}
                onPress={() => navigation.navigate('Episodes', { category: item.text })}
              >
                <FastImage
                  source={item.icon}
                  style={[styles.categoryIcon, { backgroundColor: item.bgColor }]}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.categoryText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Banner Ad */}
          <TouchableOpacity onPress={handleBannerClick} style={styles.bannerAd}>
            <Image source={require('../assets/image/banner-ad.jpg')} style={styles.bannerAdImage} />
          </TouchableOpacity>

        </ScrollView>

        {/* Search Modal */}
        <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={handleCloseModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                <Ionicons name="close-circle-outline" size={30} color="#40003d" />
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
    backgroundColor: '#40003d',
    padding: 10,
  },
  logo: {
    width: width * 0.5,
    height: 65,
    resizeMode: 'contain',
  },
  sliderContainer: {
    width: '100%',
    height: height * 0.3,
  },
  bannerSlide: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
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
    width: width / 4,
  },
  categoryIcon: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  categoryText: {
    color: '#3B006B',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
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
  searchInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#40003d',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 16,
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
  closeButton: {
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

export default Home;
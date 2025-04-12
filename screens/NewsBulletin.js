import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'GT vs RR',
    subtitle: 'Rajasthan skipper Samson defends',
    image: require('../assets/image/01.jpg'),
  },
  {
    id: '2',
    title: 'GT vs RR',
    subtitle: 'Rajasthan skipper Samson defends',
    image: require('../assets/image/02.jpg'),
  },
  {
    id: '3',
    title: 'GT vs RR',
    subtitle: 'Rajasthan skipper Samson defends',
    image: require('../assets/image/03.jpg'),
  },
  {
    id: '4',
    title: 'Freedom March 2025',
    subtitle: 'Special Coverage',
    image: require('../assets/image/04.jpg'),
  },
  {
    id: '5',
    title: 'GT vs RR',
    subtitle: 'Rajasthan skipper Samson defends',
    image: require('../assets/image/05.jpg'),
  },
  {
    id: '6',
    title: 'GT vs RR',
    subtitle: 'Rajasthan skipper Samson defends',
    image: require('../assets/image/06.jpg'),
  },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 32) / 2;

export default function Programs() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B006B',
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    width: ITEM_WIDTH,
    margin: 8,
  },
  image: {
    width: '100%',
    height: ITEM_WIDTH,
    borderRadius: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 16,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 12,
  },
});

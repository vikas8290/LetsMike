import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';

const programs = [
  {
    id: '1',
    title: 'Best music',
    rj: 'RJ nivan',
    image: require('../assets/image/01.jpg'),
  },
  {
    id: '2',
    title: 'Jazzy Night',
    rj: 'RJ karan',
    image: require('../assets/image/02.jpg'),
  },
  {
    id: '3',
    title: 'Morning Vibes',
    rj: 'RJ neha',
    image: require('../assets/image/03.jpg'),
  },
  {
    id: '4',
    title: 'Evening Chill',
    rj: 'RJ rohit',
    image: require('../assets/image/04.jpg'),
  },
  {
    id: '5',
    title: 'Weekend Special',
    rj: 'RJ priyanka',
    image: require('../assets/image/05.jpg'),
  },
  {
    id: '6',
    title: 'Retro Hits',
    rj: 'RJ ankit',
    image: require('../assets/image/06.jpg'),
  },
];

const ProgramCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.rj}</Text>
  </View>
);

export default function Programs() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Program</Text>
      <FlatList
        data={programs}
        renderItem={ProgramCard}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 16,
  },
  header: {
    color: '#40003d',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    resizeMode: 'cover',
    backgroundColor: '#222',
  },
  title: {
    color: '#9f2ce3',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  subtitle: {
    color: '#000',
    fontSize: 14,
    marginTop: 4,
  },
});

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        Welcome to our station! We provide the latest news, podcasts, and music shows curated with love...
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
  },
});
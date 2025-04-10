import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

export default function Collebrations() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Collebrations</Text>
      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Message" multiline numberOfLines={4} style={styles.input} />
      <Button title="Send" onPress={() => alert('Thank you for sharing!')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        Welcome to our station! We provide the latest news, podcasts, and music shows curated with love...
        {'\n\n'}
        Our mission is to keep you informed and entertained with the best content available. Our team of dedicated professionals works tirelessly to bring you the latest updates, interviews, and discussions on a variety of topics.
        {'\n\n'}
        We believe in the power of stories and the importance of sharing knowledge. Our platform is designed to foster a community of listeners who are passionate about learning and engaging with the world around them.
        {'\n\n'}
        Thank you for being a part of our journey. We hope you enjoy our content as much as we enjoy creating it for you!
        {'\n\n'}
        If you have any questions or feedback, feel free to reach out to us through our contact page.
        {'\n\n'}
        Stay tuned for more exciting updates and shows coming your way!
        {'\n\n'}
        Best Regards,
        {'\n'}
        The Team
        {'\n\n'}
      </Text>

      <Text style={[styles.content, { fontSize: 12, color: '#888' }]}>
        Note: This is demo content for the About Us page.
        {'\n'}
        The actual content may vary based on the station's profile and offerings.
        {'\n\n'}
        © 2023 Our Station. All rights reserved.
        {'\n\n'}
        For more information, visit our website or follow us on social media.
        {'\n\n'}
        Follow us on:
        {'\n'}
        Facebook | Twitter | Instagram
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
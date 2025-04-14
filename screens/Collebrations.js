import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Collebrations() {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    // You can add API call here
    alert('Message sent!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Collebrations</Text>

      <Text style={styles.label}>Contact Person Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        placeholderTextColor="#666"
        value={form.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <Text style={styles.label}>Brand Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter brand name"
        placeholderTextColor="#666"
        value={form.brand}
        onChangeText={(text) => handleChange('brand', text)}
      />

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        placeholderTextColor="#666"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => handleChange('phone', text)}
      />

      <Text style={styles.label}>Email Id</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#666"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => handleChange('email', text)}
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Enter your message"
        placeholderTextColor="#666"
        multiline
        numberOfLines={5}
        value={form.message}
        onChangeText={(text) => handleChange('message', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flexGrow: 1,
  },
  header: {
    color: '#40003d',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
    borderWidth: 1,
    borderColor: '#A020F0',
  },
  messageInput: {
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#A020F0',
    paddingVertical: 14,
    borderRadius: 16,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
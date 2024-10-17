import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Mobile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // This allows the container to take up the full screen
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
    backgroundColor: '#f0f0f0', // A light gray background color
  },
  title: {
    fontSize: 24, // Increase the font size
    fontWeight: 'bold', // Make the text bold
    color: '#333', // Dark gray text color
  },
});

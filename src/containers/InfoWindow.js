import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const InfoWindow = ({ oeuvre }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={('../assets/images/MAP.png')} />
      <Text style={styles.name}>{oeuvre.name}</Text>
      <Text style={styles.description}>{oeuvre.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default InfoWindow;
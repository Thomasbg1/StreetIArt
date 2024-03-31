    import React from 'react';
import { View, Image, Text } from 'react-native';

const InfoWindow = ({ imageSource, title, description }) => {
  return (
    <View style={styles.infoWindow}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoWindow: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'gray',
  },
});

export default InfoWindow;
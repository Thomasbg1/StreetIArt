import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button,  TouchableOpacity, StyleSheet  } from 'react-native';

function ItineraireScreen({ navigation }) {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleStartLocationChange = (text) => {
    setStartLocation(text);
  };

  const handleEndLocationChange = (text) => {
    setEndLocation(text);
  };

  const handleSubmit = () => {
    navigation.navigate('MapScreen', {
      startLocation,
      endLocation,
    });
  };

  return (/* <View style={styles.container}>
      <Text style={styles.label}>Artiste:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de l'artiste"
        value={artist}
        onChangeText={setArtist}
      />
      <Text style={styles.label}>Titre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Titre de l'œuvre"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Année:</Text>
      <TextInput
        style={styles.input}
        placeholder="Année de création"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Rechercher</Text>
      </TouchableOpacity>
    </View>
  );
}; */

    <View style={styles.container }>

    <TextInput styles={styles.input}
          placeholder="Start Loation"
          value={startLocation}
          onChangeText={handleStartLocationChange}/> 
    
         <View styles={styles.input}>
        <TextInput
          placeholder="End Location"
          value={endLocation}
          onChangeText={handleEndLocationChange}
        />
         </View>
          <View style={styles.label}>
        <Button  title="Submit" onPress={handleSubmit} color="pink"  /></View>
     </View>
  );
 }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 80,
    justifyContent: 'up',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 1,


  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default ItineraireScreen;

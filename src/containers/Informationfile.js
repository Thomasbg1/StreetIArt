import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
import db from '../service/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';


function InformationScreen({ navigation }) {
  const [oeuvres, setOeuvres] = useState([]);

useEffect(() => {
  const getOeuvres = async () => {
    const oeuvresCollection = collection(db, 'oeuvres');
    const oeuvresSnapshot = await getDocs(oeuvresCollection);
    const oeuvresList = oeuvresSnapshot.docs.map(doc => doc.data());
    setOeuvres(oeuvresList);
  };
  getOeuvres();
}, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {oeuvres.map((oeuvre, index) => (
        <Text key={index}>{oeuvre.name}</Text>
      ))}
      <Text>Toutes les informations relatives à l'application pourront être retrouvées ici</Text>
    </View>
  );
}

export default InformationScreen;
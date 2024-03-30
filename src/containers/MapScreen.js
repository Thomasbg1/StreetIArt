import React, { useEffect , useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import db from '../service/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function MapScreen() {  
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
   <View //style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
   >
      <MapView style={styles.map}
      initialRegion={{
        //Bordeaux
        latitude: 44.837789,
        longitude: -0.57918,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
     }} >
      {oeuvres.map((oeuvre, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: oeuvre.latitude, longitude: oeuvre.longitude }}
          pinColor={"purple"}
          title={oeuvre.name}
          description={oeuvre.description}
        />
      ))}
      
             <Marker coordinate = {{latitude: 50.837789,longitude: -1.57918}}
         pinColor = {"purple"}  
         title={"Oeuvre cool"}
         description={"C'est vraiment cool"}/>
      </MapView>
    </View>
  );
}

export default MapScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


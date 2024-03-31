import React, { useEffect, useState } from 'react';
import { StyleSheet, View , Text , Image , ScrollView , Animated , TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE , Callout } from "react-native-maps";
import db from '../service/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import * as Location from 'expo-location';
import { Dimensions } from 'react-native';



function MapScreen() {
  const [oeuvres, setOeuvres] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getOeuvres = async () => {
      const oeuvresCollection = collection(db, 'oeuvres');
      const oeuvresSnapshot = await getDocs(oeuvresCollection);
      const oeuvresList = oeuvresSnapshot.docs.map(doc => doc.data());
      setOeuvres(oeuvresList);
    };
    getOeuvres();

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
      }
    })();
  }, []);




  const initialRegion = {
    latitude: 44.837789,
    longitude: -0.57918,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View>
      
      <MapView style={styles.map}
        initialRegion={currentLocation || initialRegion}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
      >
        {oeuvres.map((oeuvre, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: oeuvre.latitude, longitude: oeuvre.longitude }}
            pinColor={"purple"}
          >
          <Callout>
 <View>
          <View style={styles.container}>
           <Text><Image style={styles.image} resizeMode="cover"  source={require('../assets/images/Itineraire.png')} /></Text>
               <View style={{ paddingHorizontal: 16, paddingVertical: 8, flex: 1 }}>
             <Text
               style={{
                 fontWeight: "bold",
                 fontSize: 18,
               }}
             >
               {oeuvre.name}
             </Text>
            <Text>{oeuvre.description}</Text>
            </View>
        </View>
        </View>
      </Callout>           
          </Marker>
        ))}
      </MapView>
    </View>
  );
}




const screenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: 100, 
    height: 100,
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
   container: {
     backgroundColor: "white",
     width: screenWidth * 0.8,
     flexDirection: "row",
     borderWidth: 2,
     borderRadius: 12,
     overflow: "hidden",
   },
});

export default MapScreen;
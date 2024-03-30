import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import ItineraireScreen from './itinerairefile';
import InformationScreen from './Informationfile';
import { Image } from 'react-native';
import 'react-native-url-polyfill/auto';



const Tab = createBottomTabNavigator();

function Navigation() {
  return (
  <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
    headerShown: false,
    tabBarStyle: { position: 'absolute' },
    tabBarActiveTintColor: '#e91e63',
    tabBarInactiveTintColor: 'purple',
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      bottom: 18,
    },

    tabBarStyle: {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 0,
      backgroundColor: '#dde3e6',
      borderRadius: 40,
      height: 90,
      
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
        },
        android: {
          elevation: 15,
        },
      }),
    },
    
    
  }}
       >
        <Tab.Screen name="MapScreen" component={MapScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/MAP.png')}
              style={{
                width: 32,
                height: 32,
                bottom: 7,
                left: 3,
              }}
            />
          ),
        }}
        
        ></Tab.Screen>
        <Tab.Screen name="Itineraires" component={ItineraireScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/Itineraire.png')}
              style={{
                width: 30,
                height: 30,
                bottom: 7,
              }}
            />
          ),
        }}
        />
        <Tab.Screen name="informations" component={InformationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/informations.png')}
              style={{
                width: 30,
                height: 30,
                bottom: 7,
              }}
            />
          ),
        }}
        
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;


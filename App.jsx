import {StyleSheet, Text, View } from "react-native";
import Navigation from "./src/containers/Navigation";
//import 'react-native-gesture-handler';
import React from 'react';
 
function App() {
  return  (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;

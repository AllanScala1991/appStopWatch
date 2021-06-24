import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import Timer from './components/timer'

export default function App() {
  return (
  
      <View style={styles.container}>
        <StatusBar 
        backgroundColor = "#222831"
        barStyle='light-content'
        />

        <Timer/>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#222831',
    paddingTop: 25
  },
  bar:{
    backgroundColor: 'white'
  }
});

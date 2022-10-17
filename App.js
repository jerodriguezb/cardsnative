import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Title } from './src/components/Title';

const  App = () => {
    return (
    <View style={styles.container}>
      <Title title="React Native!!!!"/>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert('Pressed!')}
        >
      <Text> Touch here... </Text>
      </TouchableHighlight>
      <StatusBar style='auto' />
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.image}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
     width: 300, 
     height: 300 
  }
});

export default App;

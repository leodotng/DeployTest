/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyling}>DEPLOYED!!</Text>
        <Image source={{uri: 'https://memegenerator.net/img/instances/500x/75325214/successful-deploy-yes-we-ken.jpg'}}
       style={{width: 400, height: 250}} />
        <Text style={styles.textStyling}>-Josh Leong</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyling: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
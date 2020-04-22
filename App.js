import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from './navigator/navigator';

const App = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;

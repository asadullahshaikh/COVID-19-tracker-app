import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Spinner from 'react-native-spinkit';
import * as Animatable from 'react-native-animatable';

const Spinners = Props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animatable.Text
        style={{
          fontSize: 35,
          color: Props.prop ? 'black' : 'red',
          fontWeight: 'bold',
        }}
        animation="slideInDown"
        iterationCount="infinite"
        direction="reverse">
        {Props.prop ? Props.prop : 'COVID 19'}
      </Animatable.Text>
      <Spinner color="black" size={100} type="ThreeBounce" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Spinners;

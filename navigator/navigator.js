import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Countries from '../screens/Countries';
import countryInfo from '../screens/CountryInfo';
import Symptoms from '../screens/Symtoms';
import Things from '../screens/Things';

const StackNAv = () => {
  let Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="All Countries"
          options={({}) => ({
            headerTransparent: true,
            title: '',
          })}
          component={Countries}
        />
        <Stack.Screen
          options={({route}) => ({
            title: route.params.country,
            headerTitleAlign: 'center',
          })}
          name="countryInfo"
          component={countryInfo}
        />
        <Stack.Screen
          options={({route}) => ({
            headerTitleAlign: 'center',
          })}
          name="Symptoms"
          component={Symptoms}
        />
        <Stack.Screen
          options={({route}) => ({
            headerTitleAlign: 'center',
            title: 'Important Precautions',
          })}
          name="things"
          component={Things}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNAv;

import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Spinners from '../components/Spinners';
import Splash from 'react-native-splash-screen';

const Countries = props => {
  const [code, setCode] = useState();
  const [dub, setDup] = useState();
  const [spin, setSpin] = useState(false);

  const fetchHandler = useCallback(async () => {
    setSpin(true);
    try {
      let res = await fetch('https://api.printful.com/countries');
      let data = await res.json();

      setCode(data.result);
      setDup(data.result);

      setSpin(false);
    } catch (err) {
      console.log(err);
      setSpin(false);
    }
  }, [spin]);

  useEffect(() => {
    fetchHandler();
    Splash.hide();
  }, []);

  const searchHandler = e => {
    let type = e.charAt(0).toUpperCase() + e.slice(1);
    let Filtered = dub.filter(data => {
      return data.name.indexOf(type) !== -1;
    });
    setCode(Filtered);
  };
  if (spin) {
    return <Spinners />;
  }
  const rederGridItem = itemData => {
    return (
      <View style={styles.gridItem}>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate('countryInfo', {
              country: itemData.item.name,
            });
          }}>
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={{
                uri: `https://www.countryflags.io/${
                  itemData.item.code
                }/shiny/64.png`,
              }}
            />
            <View style={styles.centerText}>
              <Text numberOfLines={2} style={styles.title}>
                {itemData.item.name}
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <View>
      <Image
        source={require('../assets/images/search.png')}
        style={{
          width: 30,
          height: 30,
          ...StyleSheet.absoluteFill,
          top: 15,
          left: '90%',
        }}
      />
      <TextInput
        style={{
          paddingLeft: 15,
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          borderRadius: 10,
        }}
        placeholder="Search"
        onChangeText={searchHandler}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Symptoms');
          }}
          style={styles.syptoms}>
          <Text style={{fontSize: 18}}>SYMPTOMS OF VIRUS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('things');
          }}
          style={styles.syptoms}>
          <Text style={{fontSize: 18}}>HOW TO STAY SAFE</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={code}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={rederGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default Countries;

const styles = StyleSheet.create({
  syptoms: {
    height: 100,
    elevation: 5,
    backgroundColor: 'white',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '40%',
    paddingLeft: 15,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 2,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    flex: 1,
  },
  centerText: {
    alignItems: 'center',
  },
});

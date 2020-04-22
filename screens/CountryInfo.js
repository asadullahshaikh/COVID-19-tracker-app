import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import Spinners from '../components/Spinners';
import moment from 'moment';
import * as Animate from 'react-native-animatable';
const countryInfo = props => {
  const [code, setCode] = useState();
  const [spin, setSpin] = useState(false);

  //   props.navigation.setOptions({
  //     headerRight: () => <Button title="click" />,
  //   });
  useEffect(() => {
    setSpin(true);
    fetch(
      `https://covid-193.p.rapidapi.com/statistics?country=${
        props.route.params.country
      }`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key':
            '31ceb0bd4amsh97a381aaab271edp19d2e4jsnfb0888acf5e0',
        },
      },
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        let data = res.response;
        if (data.length == 0) {
          Alert.alert('Outdated', 'Try again later', [
            {
              text: 'Okay',
              onPress: () => props.navigation.goBack(),
            },
          ]);
        } else {
          setCode(data);

          setSpin(false);
        }
      })
      .catch(err => {
        Alert.alert('Error', 'Try again later', [
          {
            text: 'Okay',
          },
        ]);
        setSpin(false);
        console.log(err.message);
      });
  }, []);

  if (spin) {
    return <Spinners prop="Loading" />;
  }
  return (
    <View style={styles.Container}>
      {code && (
        <>
          <View style={styles.date}>
            <Image
              source={require('../assets/images/mask.png')}
              style={{
                width: 100,
                height: 150,
                ...StyleSheet.absoluteFill,
              }}
            />
            <Text style={styles.TText}>Last Update</Text>
            <Text style={styles.TTime}>{moment(code[0].time).calendar()}</Text>
          </View>
          <View style={styles.ItemGrid}>
            <View style={styles.item}>
              <Image
                source={require('../assets/images/man.png')}
                style={styles.img}
              />
              <Text style={styles.title}>Confirmed </Text>

              <Text style={{...styles.TText, color: 'orange'}}>
                {code[0].cases.total}
              </Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../assets/images/d2.png')}
                style={styles.img}
              />
              <Text style={styles.title}>Deaths </Text>
              <Text style={{...styles.TText, color: 'red'}}>
                {code[0].deaths.total}
              </Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../assets/images/rec.png')}
                style={styles.img}
              />
              <Text style={styles.title}>Recovered </Text>
              <Text style={{...styles.TText, color: 'green'}}>
                {code[0].cases.recovered}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '100%',
  },
  date: {
    alignItems: 'center',
    elevation: 3,
    margin: 15,
    backgroundColor: 'white',
    height: '22%',
    borderRadius: 15,
  },
  TText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  TTime: {
    paddingTop: 50,
    fontSize: 20,
    color: 'red',
  },
  ItemGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 15,
    height: '40%',
    paddingVertical: 25,
  },
  item: {
    width: Dimensions.get('window').width / 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  img: {
    width: '90%',
    height: 150,
    ...StyleSheet.absoluteFill,
    top: 80,
  },
});

export default countryInfo;

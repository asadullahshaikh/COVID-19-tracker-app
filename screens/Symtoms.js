import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Symptoms = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.View}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          Corona Virus{' '}
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'red'}}>
            SYMPTOMS
          </Text>
        </Text>
        <Text style={{fontWeight: '200', fontSize: 16}}>
          {'\n'}
          It can take up to 14 days for symptoms of coronavirus to appear. The
          main symptoms to look out for are:
        </Text>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          <Text style={{fontWeight: 'bold'}}>Coughing</Text>
          <Image
            style={styles.img}
            source={{uri: 'http://covid.gov.pk/theme_img/icons/w1.png'}}
          />
        </View>
        <View style={styles.grid}>
          <Text style={{fontWeight: 'bold'}}>Hot Fever</Text>
          <Image
            style={styles.img}
            source={{uri: 'http://covid.gov.pk/theme_img/icons/w4.png'}}
          />
        </View>
        <View style={styles.grid}>
          <Text style={{fontWeight: 'bold'}}>Shortness Of Breath</Text>
          <Image
            style={styles.img}
            source={{uri: 'http://covid.gov.pk/theme_img/icons/w3.png'}}
          />
        </View>
        <View style={styles.grid}>
          <Text style={{fontWeight: 'bold'}}>Sore Throat</Text>
          <Image
            style={styles.img}
            source={{uri: 'http://covid.gov.pk/theme_img/icons/w5.png'}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  Container: {
    width: '100%',
  },
  View: {
    alignItems: 'center',
    margin: 15,
  },
  grid: {
    elevation: 5,
    margin: 15,

    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '35%',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    top: 10,
  },
});
export default Symptoms;

import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
const Things = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Dont}>
          <Text style={styles.txt}>THINGS NOT TO DO</Text>
          <View style={styles.grid}>
            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/n1.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Do Not Share Eating {'\n'}
                </Text>
                <Text>Do Not Share Eating</Text>
              </View>
            </View>

            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/n4.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Avoid Crowded Places (Social Distancing) {'\n'}
                </Text>
                <Text>
                  As an individual, you can lower your risk of infection by
                  reducing your rate of contact with other people.{' '}
                </Text>
              </View>
            </View>

            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/n3.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Avoid Contact with Sick People {'\n'}
                </Text>
                <Text>
                  Avoid close contact with anyone showing symptoms of
                  respiratory illness.
                </Text>
              </View>
            </View>

            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/n2.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Don’t Touch Your Face or Nose {'\n'}
                </Text>
                <Text>
                  Avoid animals (alive or dead), animal markets, and products
                  that come from animals (such as uncooked meat).
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Dont}>
          <Text style={{...styles.txt, color: 'green'}}>
            THINGS YOU SHOULD DO
          </Text>
          <View style={styles.grid}>
            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/t1.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Wash Your Hands For 20sec {'\n'}
                </Text>
                <Text>
                  Wash hands often with soap and water for at least 20 seconds.
                </Text>
              </View>
            </View>

            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/t3.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Cover Nose When Sneezing {'\n'}
                </Text>
                <Text>
                  Cover your mouth and nose with a tissue or your sleeve (not
                  your hands) when coughing or sneezing.{' '}
                </Text>
              </View>
            </View>

            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/t4.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Seek Medical Care Regularly {'\n'}
                </Text>
                <Text>
                  Regular health checks can identify any early signs of health
                  issues.
                </Text>
              </View>
            </View>

            <View style={styles.gridItems}>
              <Image
                style={styles.img}
                source={{uri: 'http://covid.gov.pk/theme_img/icons/t2.png'}}
              />
              <View>
                <Text style={styles.gridItmTxt}>
                  Wear a Mask if Available{'\n'}
                </Text>
                <Text>
                  You should continue to use the surgical mask in all public
                  places until you are advised.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Container: {},
  Dont: {
    margin: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 5,
  },
  txt: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    width: 100,
    height: 100,
    right: 15,
  },
  gridItems: {
    margin: 5,
    flexDirection: 'row',
    paddingVertical: 15,
    width: '60%',
  },
  gridItmTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Things;

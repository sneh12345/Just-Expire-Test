import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Divider, List } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Recipes </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.youtube.com/watch?v=SDpCzJw2xm4')
          }>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: -10,
              marginTop: 30,
            }}>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  source={{
                    uri:
                      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
                  }}
                  style={{
                    height: 135,
                    width: 155,
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 155 }}>
                <Text>Pizza</Text>
                <Text style={{ color: '#777', paddingTop: 5 }}>
                  Pizza, an italian dish containing flat bread with tomato
                  sauce, and cheese.
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.foodnetwork.com/recipes/food-network-kitchen/spaghetti-with-oil-and-garlic-aglio-et-olio-recipe-1944538'
            )
          }>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: -10,
              marginTop: 30,
            }}>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  source={{
                    uri:
                      'https://v1.nitrocdn.com/vMCLEGbZccgRIgpGXvgkDDYcPokgENUq/assets/static/optimized/rev-dffa450/wp-content/uploads/2020/03/easy-dinner-recipes-spaghetti-with-garlic-olive-oil.jpg',
                  }}
                  style={{
                    height: 135,
                    width: 155,
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 155 }}>
                <Text>Spaghetti with garlic and olive oil</Text>
                <Text style={{ color: '#777', paddingTop: 5 }}>
                  Sphagetti, with garlic, and olive oil. Perfect dish for
                  dinner.
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://tastesbetterfromscratch.com/cottage-pie/'
            )
          }>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: -10,
              marginTop: 30,
            }}>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  source={{
                    uri:
                      'https://tastesbetterfromscratch.com/wp-content/uploads/2019/10/Cottage-Pie-1.jpg',
                  }}
                  style={{
                    height: 135,
                    width: 155,
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 155 }}>
                <Text>Cottage Pie</Text>
                <Text style={{ color: '#777', paddingTop: 5 }}>
                 Cottage pie or shepherd's pie is a type of savory pie. It is made with minced meat, with mashed potato on top.
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

               <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.foodnetwork.com/recipes/food-network-kitchen/pesto-lasagna-rolls-3696449'
            )
          }>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: -10,
              marginTop: 30,
            }}>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  source={{
                    uri:
                      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/11/0/FNK_Pesto-Lasagna-Rolls-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494520429705.jpeg',
                  }}
                  style={{
                    height: 135,
                    width: 155,
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 155 }}>
                <Text>Pesto Lasagna Rolls</Text>
                <Text style={{ color: '#777', paddingTop: 5 }}>
                 Lasgana rolls with pesto, cheese and other ingredients. 
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 30,
    padding: 50,
    color: 'black', //#e1e0e4
    marginLeft: -40,
    backgroundColor: '#e1e0e4',
    marginBottom: -14,
    flex: 1,
    fontFamily: 'AppleSDGothicNeo-Light'
  },
  youritems: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  normaltext: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 12,
    color: 'black',
    fontSize: 19,
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
    height: 45,
    width: 200,

    marginLeft: 10,
  },
  panel: {
    flex: 1,
    backgroundColor: '#FFFFF0',
    borderRadius: 9,
    height: 100,
  },
});

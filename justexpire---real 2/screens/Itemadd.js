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
  TextInput,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Divider, List } from 'react-native-elements';

export default class Itemadd extends React.Component {
  createTwoButtonAlert = () =>
    Alert.alert(
      'Your item has been added',
      'You will get a notification in 3 days before the expiry date',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Add an item </Text>
        <Text style={styles.normaltext}>Enter item name: </Text>
        <TextInput
          placeholder=""
          underlineColoriOS="transparent"
          style={styles.TextInputStyle}
        />
        <Text style={styles.normaltext}>Set expiry date: </Text>
        <DatePicker
          style={styles.datePickerStyle}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-20900"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
        />
        <Text style={styles.normaltext}>Enter quantity: </Text>

        <TextInput
          placeholder=""
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
          keyboardType={'numeric'}
        />

        <Text style={{ textAlign: 'center', marginTop: 50 }}>__________________________</Text>
        <TouchableOpacity>
          <Text onPress={this.createTwoButtonAlert} style={styles.button}>
            Add item.
          </Text>
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
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginLeft: 30,
    marginRight: 30
  },
  title: {
    fontSize: 30,
    fontFamily: 'AppleSDGothicNeo-Light',
    padding: 50,
    color: 'black', //#e1e0e4
    marginLeft: -40,
    backgroundColor: '#e1e0e4',
    marginBottom: -14,
    flex: 1,
  },
  youritems: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  normaltext: {
    marginBottom: 0,
    padding: 10,
    marginTop: 20,
    fontSize: 20,
  },
  // button: {
  //   backgroundColor: 'blue',
  //   borderColor: 'blue',
  //   borderWidth: 1,
  //   borderRadius: 12,
  //   color: 'black',
  //   fontSize: 19,
  //   overflow: 'hidden',
  //   padding: 10,
  //   textAlign: 'center',
  //   height: 45,
  //   width: 200,

  //   marginLeft: 10,
  // },
  panel: {
    flex: 1,
    backgroundColor: '#FFFFF0',
    borderRadius: 9,
    height: 100,
  },
  datePickerStyle: {
    width: 300,
    marginTop: 20,
    marginLeft: 30,
    color: 'white',
    backgroundColor: 'white',
    marginBottom: 10,
  },
    button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 50,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30
  },
});

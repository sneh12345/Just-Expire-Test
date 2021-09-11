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
  FlatList,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Divider, List } from 'react-native-elements';

const items = [
  {
    key: '5a31077f7a32fb6cad442782',
    name: 'Apples',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Aug 12, 2021',
  },
  {
    key: '5a31077f523fa49141e3bb9f',
    name: 'Maggi',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Aug 18, 2021',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Frozen Pizza',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Aug 14, 2021',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Frozen Samosa',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Dec 25, 2021',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Pasta',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Dec 2, 2021',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Banana',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Dec 29, 2021',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Milk Bags',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Dec 23, 2021',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Frozen Paratha',
    Expiry: 'Expiry date:',
    ExpiryDate: 'Nov 20, 2021',
  },
];

export default class ImageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: items,
    };
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Item list</Text>
        <FlatList
        style = {{marginTop: -35}}
          data={this.state.data}
          contentContainerStyle={{ paddingTop: 50 }}
          renderItem={({ item, index }) => (
            <View
              style={{
                borderBottomWidth: 0.8,
                borderBottomColor: 'grey',
                padding: 10,
              }}>
              <View>
                <Text
                  onPress={() => {
                    let tempData = this.state.data;
                    alert("You have removed" )
                    console.warn('index>>>>', { index });
                    tempData.splice(index, 1),
                      this.setState({ data: tempData });
                  }}
                  style={{ fontSize: 18 }}>
                  {item.name}
                </Text>
                <Text>
                  {item.Expiry} - {item.ExpiryDate}
                </Text>
              </View>
            </View>
          )}
        />
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
    marginLeft: 80,
    marginRight: 80,
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
    fontWeight: 'bold',
    marginBottom: 0,
    padding: 10,
    marginTop: 19,
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
    marginLeft: 10,
    color: 'white',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});

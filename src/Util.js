import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  BackHandler,
  Platform,
} from 'react-native';

const height = Dimensions.get('window').height;
const API_URL_DEVELOPMENT = 'http://64.225.48.150/api';

export default class Util {
    
  static getApiStartPoint = () => {
    return API_URL_DEVELOPMENT;
  };

  // static checkSECondittion() {
  //     return height <= 568 && Platform.OS == "ios"
  // }

  // static async getAsynchstate(key) {
  //     return AsyncStorage.getItem(key).then(data => {
  //         return data;
  //     });
  // }

  // static getApiStartPoint = () => {
  //     return (
  //         BASE_URL
  //     );
  // }
  // static getApiImageURL = () => {
  //     return (
  //         Img_URL
  //     );
  // }

  // static getRegularFonts = () => {
  //     return Platform.OS == "ios" ? "ProximaNovaA-Regular" : "Proxima_Nova_Alt_Regular"
  // }

  // static getBoldFonts = () => {
  //     return Platform.OS == "ios" ? "ProximaNovaA-Bold" : "Proxima_Nova_Alt_Bold"
  // }

  // static getBlackFonts = () => {
  //     return Platform.OS == "ios" ? "ProximaNovaA-Black" : "Proxima_Nova_Alt_Black"
  // }

  // static showMessage(message) {
  //     return Toast.show(message)
  // }

  // static async setTeanantManSwitch(key, value){
  //     return AsyncStorage.setItem(key, value);
  // }

  // static getTeanantManSwitch() {
  //     return AsyncStorage.getItem('tenantSwitch').then(val => {
  //         let item = JSON.parse(val);
  //         return item;
  //     });
  // }

  // static async setAsynchValue(key, value) {
  //     return AsyncStorage.setItem(key, value);
  // }

  // static getUserAuthResponse() {
  //     return AsyncStorage.getItem('objLogin').then(val => {
  //         let item = JSON.parse(val);
  //         return item;
  //     });
  // }

  // static getobjUserAuthResponse() {
  //     return AsyncStorage.getItem('objuserLogin').then(val => {
  //         let item = JSON.parse(val);
  //         return item;
  //     });
  // }
}

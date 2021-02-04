import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {getItems} from '../../components/AsyncStorage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(async () => {
   setTimeout(async () => {
    const userId = await getItems('userId');
     if(userId == null) {
      navigation.navigate('Auth');
     }  
     else{
      const userType = await getItems('userType');
       if(userType == 'Chef')
       {
        navigation.navigate('ChefMain');
       }
       else if(userType == 'User'){
        navigation.navigate('UserMain');
       }
       else{
        navigation.navigate('Auth');
       }
     }
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/Splash-Screen.png')}
      style={{width: '100%', height: '100%'}}></ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

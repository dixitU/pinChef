import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GreenPowerBtn from '../../assets/svg/GreenPowerBtn';
import Logo from '../../assets/svg/Logo';

const UserSelect = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //     AsyncStorage.getItem('user_id').then((value) =>
    //       navigation.replace(value === null ? 'Auth' : 'Main'),
    //     );
    //   }, 2000);
    navigation.navigate('UserMain');
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/Background-icons.png')}
      style={{
        flex: 1,
        backgroundColor: '#a9a7a7',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Logo />
      </View>

      <View
        style={{
          width: '85%',
          alignItems: 'center',
          marginVertical: RFPercentage(10),
        }}>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('SigninScreen', {user: 'User'})}>
            <Text style={styles.buttonText}>FIND A CHEF</Text>
            <GreenPowerBtn />
          </Pressable>
        </View>
        <View style={[{marginTop: 40, alignItems: 'flex-end'}]}>
          <Pressable
            style={[styles.button]}
            onPress={() => navigation.navigate('SigninScreen', {user: 'Chef'})}>
            <Text style={styles.buttonText}>I AM A CHEF</Text>
            <GreenPowerBtn />
          </Pressable>
        </View>
      </View>

    </ImageBackground>
  );
};

export default UserSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  button: {
    borderColor: '#464040',
    borderRadius: RFPercentage(10),
    borderWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: RFPercentage(2),
  },
  buttonText: {
    color: '#fff',
    marginHorizontal: RFPercentage(3),
    fontSize: RFValue(20),
  },
});

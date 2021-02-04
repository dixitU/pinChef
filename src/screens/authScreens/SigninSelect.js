import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../../assets/svg/Logo';
import SignInEmail from '../../assets/svg/SingInEmail';
import SignInApple from '../../assets/svg/SignInApple';
import SignInFB from '../../assets/svg/SignInFB';
import SignInGoogle from '../../assets/svg/SignInGoogle';

const SigninSelect = ({route, navigation}) => {
  const { user } = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#a9a7a7'}}>
      <ImageBackground
        source={require('../../assets/images/backgroundSignUp.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={{padding: RFPercentage(3)}}>
          <Icon
            name="arrowleft"
            size={RFPercentage(7)}
            color="#5B5353"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Logo />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: wp('100%'),
            paddingVertical: RFValue(25),
            paddingHorizontal: RFValue(25),
          }}>
          <Text style={{fontSize: RFValue(25), fontFamily: 'Montserrat-Bold'}}>
            SIGN IN/UP
          </Text>

          {Platform.OS == 'ios' ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: RFValue(20),
              }}>
              <Pressable
                onPress={() => navigation.navigate('LoginScreen', {user: user})}>
                <SignInEmail />
              </Pressable>
              <SignInApple />
              <SignInFB />
              <SignInGoogle />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: RFValue(20),
              }}>
              <Pressable
                onPress={() => navigation.navigate('LoginScreen', {user: user})}>
                <SignInEmail />
              </Pressable>
              <SignInFB />
              <SignInGoogle />
            </View>
          )}

          <Text style={{marginVertical: RFValue(15)}}>
            <Text
              style={{
                color: '#5b5353',
                alignSelf: 'center',
                fontSize: RFValue(15),
              }}>
              Signing in or Signing Up means you accept our{' '}
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Terms/Conditions {''} {'&'} Privacy Policy
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SigninSelect;

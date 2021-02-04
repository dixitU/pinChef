import React, {useState, useEffect} from 'react';
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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import Util from '../../Util';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import EmailIcon from '../../assets/svg/Arroba';
import EyeSee from '../../assets/svg/EyeSee';
import EyeHide from '../../assets/svg/EyeHide';
import Lock from '../../assets/svg/Lock';
import RedButton from '../../components/redButton';
import {getItems, setItems} from '../../components/AsyncStorage';
// import {AsyncStorage} from '@react-native-async-storage/async-storage';

export default function Login({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [user, setUser] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const {user} = route.params;
      setUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, [navigation]);

  function validate() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == '') {
      setErrorMessageEmail('Email is required');
    } else if (reg.test(email) == 0) {
      setErrorMessageEmail('Invalid email address');
    } else if (password == '') {
      setErrorMessagePassword('Password is required');
    } else if (password.length < 8) {
      setErrorMessagePassword('Password length should be 8 character');
    } else {
      sendDataToServer();
      //navigation.navigate('ChefMain');
    }
  }

  sendDataToServer = async () => {
    try {
      const request = await axios.get(
        `${Util.getApiStartPoint()}/Auth/Login/${email}`,
      );
      console.log('Login Request ******', request.data);

      if (request.status == 200) {
        if (request.data.password == password) {
          setItems('userId', `${request.data.id}`);
          setItems('userType', `${request.data.role}`);
          //const userType = await getItems('userType');
          //console.log(userId);
          console.log(`Login successfull`, request.data);
          if (request.data.role == 'Chef') {
            if (request.data.profile == null) {
              navigation.navigate('Profile', {
                user: request.data.role,
                userId: request.data.id,
              });
            } else if (request.data.chef == null) {
              navigation.navigate('Onboarding', {
                user: request.data.role,
                userData: request.data.profile,
              });
            } else {
              navigation.navigate('ChefMain');
            }
          } else {
            if (request.data.profile == null) {
              navigation.navigate('Profile', {
                user: request.data.role,
                userId: request.data.id,
              });
            } else {
              navigation.navigate('UserMain');
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#a9a7a7'}}>
      <ImageBackground
        source={require('../../assets/images/backgroundSignUp.png')}
        style={{width: wp('100%'), height: hp('100%')}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
              <View>
                <View style={{padding: RFPercentage(3)}}>
                  <Icon
                    name="arrowleft"
                    size={RFPercentage(5)}
                    color="#5B5353"
                    onPress={() => navigation.goBack()}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: RFValue(30),
                    alignSelf: 'center',
                  }}>
                  SIGN IN
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: RFValue(20),
                    alignSelf: 'center',
                    color: 'white',
                    marginVertical: RFValue(20),
                  }}>
                  WELCOME BACK
                </Text>

                <View
                  style={{
                    width: wp('90%'),
                    alignSelf: 'flex-end',
                    marginTop: RFValue(40),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontSize: RFValue(18),
                      color: 'black',
                      marginVertical: RFValue(5),
                      right: RFValue(-40),
                    }}>
                    Email
                  </Text>
                  <View style={[styles.textInputView, {right: RFValue(-35)}]}>
                    {errorMessageEmail == '' ? (
                      <></>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '15%',
                          }}></View>
                        <View
                          style={{
                            width: '75%',
                          }}>
                          <Text style={{color: 'red'}}>
                            {errorMessageEmail}
                          </Text>
                        </View>
                      </View>
                    )}

                    <View
                      style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        borderRadius: RFValue(100),
                      }}>
                      <View
                        style={{
                          width: '10%',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <EmailIcon />
                      </View>
                      <View
                        style={{
                          width: '70%',
                          justifyContent: 'center',
                        }}>
                        <TextInput
                          value={email}
                          onChangeText={(text) => {
                            setEmail(text);
                          }}
                          placeholder="Enter registered email"
                          autoCapitalize="none"
                          textContentType="emailAddress"
                          keyboardType="email-address"
                          style={{marginLeft: RFValue(15)}}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: wp('90%'),
                    alignSelf: 'flex-start',
                    marginTop: RFValue(40),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontSize: RFValue(18),
                      color: 'black',
                      marginVertical: RFValue(5),
                      right: RFValue(-40),
                    }}>
                    Password
                  </Text>
                  <View style={[styles.textInputView, {left: RFValue(-35)}]}>
                    {errorMessagePassword == '' ? (
                      <></>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '27%',
                          }}></View>
                        <View
                          style={{
                            width: '73%',
                          }}>
                          <Text style={{color: 'red'}}>
                            {errorMessagePassword}
                          </Text>
                        </View>
                      </View>
                    )}

                    <View
                      style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        borderRadius: RFValue(100),
                      }}>
                      <View style={{width: '12%'}}></View>
                      <View
                        style={{
                          width: '10%',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Lock />
                      </View>
                      <View
                        style={{
                          width: '68%',
                          justifyContent: 'center',
                        }}>
                        <TextInput
                          value={password}
                          onChangeText={(text) => {
                            setPassword(text);
                          }}
                          placeholder="Enter password"
                          autoCapitalize="none"
                          textContentType="password"
                          secureTextEntry={secureTextEntry}
                          keyboardType="email-address"
                          style={{marginLeft: RFValue(15)}}
                        />
                      </View>
                      <View
                        style={{
                          width: '10%',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Pressable
                          onPress={() => setSecureTextEntry(!secureTextEntry)}>
                          {secureTextEntry ? <EyeHide /> : <EyeSee />}
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>

                <Pressable
                  onPress={() => navigation.navigate('ForgotPassword1')}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontSize: RFValue(15),
                      alignSelf: 'center',
                      color: '#ffd54f',
                      marginVertical: RFValue(20),
                      fontWeight: 'bold',
                    }}>
                    FORGOT PASSWORD
                  </Text>
                </Pressable>

                <Text
                  style={{marginVertical: RFValue(15), alignSelf: 'center'}}>
                  <Text
                    style={{
                      color: '#5b5353',
                      alignSelf: 'center',
                      fontSize: RFValue(15),
                    }}>
                    Don't have an account ?{' '}
                  </Text>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('RegisterScreen', {user: user})
                    }>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Sign Up
                    </Text>
                  </Pressable>
                </Text>

                <View style={{marginBottom: RFValue(10)}}>
                  <RedButton
                    buttonText={'Continue'}
                    buttonClick={() => {
                      validate();
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  textInputView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    height: Platform.OS == 'android' ? hp('12%') : hp('10%'),
    borderRadius: RFValue(100),
    paddingHorizontal: RFValue(10),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

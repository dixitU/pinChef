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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import EmailIcon from '../../assets/svg/Arroba';
import EyeSee from '../../assets/svg/EyeSee';
import EyeHide from '../../assets/svg/EyeHide';
import Lock from '../../assets/svg/Lock';
import RedButton from '../../components/redButton';
import AuthModal from '../../components/AuthModal';
import axios from 'axios';
import Util from '../../Util';

export default function ForgotPassword2({navigation, route}) {

  const [password1, setPassword1] = useState('');
  const [errorMassagePassword1, setErrorMassagePassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMassagePassword2, setErrorMassagePassword2] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

  const onPressDone = async () => {
    if (password1 == '') {
      setErrorMassagePassword1('Password is required');
    } else if (password1.length < 8) {
      setErrorMassagePassword1('Password length should be 8 character');
    } else if (password2 == '') {
      setErrorMassagePassword2('Password is required');
      setErrorMassagePassword1('');
    } else if (password2.length < 8) {
      setErrorMassagePassword2('Password length should be 8 character');
      setErrorMassagePassword1('');
    } else if (password1 == password2) {
      const { email } = route.params;
      // console.log(email);
      try {
        const data = {
            "Email": email,
            "Password": password1
        }
        // make the request
        const request = await axios.post(`${Util.getApiStartPoint()}/Auth/PasswordReset`, data)
        console.log("request")
        console.log(request)
        if(request.status == 200) {
            // setShowEmailError(false)
            // setModalView(true)
            // setSuccesChange(true)
            navigation.navigate('LoginScreen');
        }

    } catch (error) {
        console.log(error)
        // setModalView(true)
    }
    } else {
      setErrorMassagePassword1('');
      setErrorMassagePassword2('');
      setPasswordMatch(true);
    }
  }

  function passwordMatchclose() {
    setPasswordMatch(false);
  }

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
                    fontSize: RFValue(20),
                    alignSelf: 'center',
                  }}>
                  RESET PASSWORD
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
                    New Password
                  </Text>
                  <View
                    style={[
                      styles.textInputView,
                      {right: RFValue(-35), justifyContent: 'center'},
                    ]}>
                    {errorMassagePassword1 == '' ? (
                      <></>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: -20,
                          marginBottom: 5,
                        }}>
                        <View
                          style={{
                            width: '16%',
                          }}></View>
                        <View
                          style={{
                            width: '75%',
                          }}>
                          <Text style={{color: 'red'}}>
                            {errorMassagePassword1}
                          </Text>
                        </View>
                      </View>
                    )}
                    <View style={{flexDirection: 'row'}}>
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
                          value={password1}
                          onChangeText={(text) => {
                            // this.setState({password1: text});
                            setPassword1(text);
                          }}
                          placeholder="Enter password"
                          autoCapitalize="none"
                          textContentType="password"
                          secureTextEntry={true}
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
                        <EyeSee />
                      </View>
                    </View>
                    <View style={{width: '12%'}}></View>
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
                    Confirm Password
                  </Text>
                  <View
                    style={[
                      styles.textInputView,
                      {left: RFValue(-35), justifyContent: 'center'},
                    ]}>
                    {errorMassagePassword2 == '' ? (
                      <></>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: -20,
                          marginBottom: 5,
                        }}>
                        <View
                          style={{
                            width: '27%',
                          }}></View>
                        <View
                          style={{
                            width: '75%',
                          }}>
                          <Text style={{color: 'red'}}>
                            {errorMassagePassword2}
                          </Text>
                        </View>
                      </View>
                    )}
                    <View style={{flexDirection: 'row'}}>
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
                          value={password2}
                          onChangeText={(text) => {
                            // this.setState({password2: text});
                            setPassword2(text);
                          }}
                          placeholder="Enter password"
                          autoCapitalize="none"
                          textContentType="password"
                          secureTextEntry={true}
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
                        <EyeSee />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {passwordMatch && (
                <AuthModal
                  passwordMatchModal={passwordMatch}
                  authModalVisible={true}
                  passwordMatchclose={passwordMatchclose.bind()}
                  modalText={'Password does not match with Confim Password'}
                />
              )}
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 0.2,
            alignSelf: 'center',
          }}>
          <RedButton buttonText={'Done'} buttonClick={onPressDone} />
        </View>
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
    // flexDirection: 'row',
    borderRadius: RFValue(40),
    height: hp('10%'),
    borderRadius: RFValue(100),
    paddingHorizontal: RFValue(10),
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

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
import axios from 'axios';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import RedButton from '../../components/redButton';
import AuthModal from '../../components/AuthModal';
import GlobalStyles from '../../Style/GlobalStyles';

import CheckCorrect from '../../assets/svg/CheckCorrect';
import IncorrectPin from '../../assets/svg/IncorrectPin';
import OtpMessage from '../../assets/svg/OtpMessage';
import WrongPwd from '../../assets/svg/WrongPwd';
import Util from '../../Util';

const incorrectOtpText =
  'The Pin you entered is incorrect. Please make sure to enter the correct Pin, try again!';
const emptyOtp = 'The pin you entered is empty. Plase enter OTP.';

const Verify = ({navigation, route, props}) => {
  const [email, setEmail] = useState('');
  const [otpMessage, setOtpMessage] = useState(0);
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState(0);
  const [codeOTP, setCodeOTP] = useState(0);
  const [codeOTPText, setCodeOTPText] = useState('ok');

  const [isModalVisible, setIsModalVisible] = useState(true);
  const [emptyModal, setEmptyModal] = useState(false);
  const [woModal, setWoModal] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const {user, email, otpMessage, userId} = route.params;
      setEmail(email);
      setOtpMessage(otpMessage);
      setUser(user);
      setUserId(userId);
      console.log(user);
    });
    return unsubscribe;
  }, [navigation]);

  const submit = () => {
    if (codeOTP == 0) {
      setEmptyModal(true);
    } else if (codeOTP != otpMessage) {
      setWoModal(true);
    } else {
      verifyOTP();
      //navigation.navigate('Profile');
    }
  };

  function emptyModalclose() {
    setEmptyModal(false);
  }

  function woModalclose() {
    setWoModal(false);
  }

  async function verifyOTP() {
    await axios
      .get(`${Util.getApiStartPoint()}/Auth/RequestCode/${email}`)
      .then(function (response) {
        // this.setState({codeOTP: response.data})
        if (codeOTP == otpMessage) {
          if(user == "null") {
            navigation.navigate('ForgotPassword2', { email: email });
          }else {
            navigation.navigate('Profile');
          }
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log('Hubo un problema');
        console.log(error);
      });
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
                    fontSize: RFValue(30),
                    alignSelf: 'center',
                  }}>
                  Verify {otpMessage}
                </Text>

                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: RFValue(18),
                    alignSelf: 'center',
                    color: 'white',
                    marginVertical: RFValue(30),
                    marginHorizontal: RFValue(10),
                  }}>
                  {email}
                </Text>

                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: RFValue(18),
                    alignSelf: 'center',
                    color: 'black',
                    marginTop: RFValue(40),
                    marginBottom: RFValue(15),
                    marginHorizontal: RFValue(10),
                  }}>
                  Enter 6 digit OTP
                </Text>

                <View style={{alignItems: 'center', padding: RFValue(10)}}>
                  <View style={styles.inputStyle}>
                    <View style={styles.otpView}>
                      <TextInput
                        style={styles.numInput}
                        onChangeText={(otp) => {
                          setCodeOTP(otp);
                        }}
                        placeholder={'______'}
                        placeholderTextColor="#707070"
                        value={codeOTP}
                        maxLength={6}
                        keyboardType={'numeric'}></TextInput>
                    </View>
                    <View>
                      <View
                        style={[
                          styles.otpView,
                          {
                            width: wp('22%'),
                            paddingLeft: RFValue(0),
                            backgroundColor:
                              codeOTP.length == 0
                                ? GlobalStyles.color.green
                                : codeOTP != otpMessage
                                ? '#bf2612'
                                : GlobalStyles.color.green,
                          },
                        ]}>
                        {codeOTP.length == 0 ? (
                          <Text
                            style={{
                              color: 'white',
                              fontSize: RFValue(20),
                              fontWeight:
                                Platform.OS === 'android' ? 'bold' : 'bold',
                              fontFamily: GlobalStyles.font.fontFamilyBold,
                            }}>
                            ok
                          </Text>
                        ) : codeOTP == otpMessage ? (
                          <Text
                            style={{
                              color: 'white',
                              fontSize: RFValue(20),
                              fontWeight:
                                Platform.OS === 'android' ? 'bold' : 'bold',
                              fontFamily: GlobalStyles.font.fontFamilyBold,
                            }}>
                            ✓
                          </Text>
                        ) : codeOTP != otpMessage ? (
                          <Text
                            style={{
                              color: 'white',
                              fontSize: RFValue(20),
                              fontWeight:
                                Platform.OS === 'android' ? 'bold' : 'bold',
                              fontFamily: GlobalStyles.font.fontFamilyBold,
                            }}>
                            !
                          </Text>
                        ) : (
                          <Text
                            style={{
                              color: 'white',
                              fontSize: RFValue(20),
                              fontWeight:
                                Platform.OS === 'android' ? 'bold' : 'bold',
                              fontFamily: GlobalStyles.font.fontFamilyBold,
                            }}>
                            ok
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {emptyModal && (
                <AuthModal
                  verificationModal={emptyModal}
                  authModalVisible={true}
                  emptyModalclose={emptyModalclose.bind()}
                  modalText={emptyOtp}
                  name={'emptyModal'}
                />
              )}

              {woModal && (
                <AuthModal
                  verificationModal={woModal}
                  authModalVisible={true}
                  woModalclose={woModalclose.bind()}
                  modalText={incorrectOtpText}
                  name={'woModal'}
                />
              )}
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <View
          style={{
            position: 'absolute',
            bottom: Platform.OS === 'android' ? 20 : 40,
            alignSelf: 'center',
          }}>
          <RedButton
            buttonText={'Resend Email'}
            buttonClick={submit.bind(this)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Verify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  textInputView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: RFValue(40),
    marginVertical: RFValue(5),
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(20),
    alignContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  inputStyle: {
    height: hp('10%'),
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.color.lightGrey,
    borderRadius: 100,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  numInput: {
    fontSize: RFValue(20),
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: RFValue(20),
    color: GlobalStyles.color.black,
  },
  otpView: {
    height: hp('10%'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: RFValue(40),
  },
});

// const user = JSON.stringify(navigation.getParam('user'));
// const userId = JSON.stringify(navigation.getParam('userId'));
// const email = JSON.stringify(navigation.getParam('email'));
// const otpMessage = JSON.stringify(
//   navigation.getParam('otpMessage'),
// );
// this.setState({
//   codeOTP: otpMessage,
//   email: email,
//   userId: userId,
//   user: user,
// });

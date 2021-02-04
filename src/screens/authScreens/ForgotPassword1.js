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

export default class ForgotPassword1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessageEmail: '',
      pwIncorrectModalVisible: false,
    };
  }

  onPressContinue =  async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email.trim() == '') {
      // setErrorMessageEmail('Email is required');
      this.setState({errorMessageEmail: 'Email is required'});
    } else if (reg.test(this.state.email) == 0) {
      this.setState({errorMessageEmail: 'Invalid email address'});
      // setErrorMessageEmail('Invalid email address');
    } else {
      // this.props.navigation.navigate('ForgotPassword2');
      const request = await axios.post(`${Util.getApiStartPoint()}/Auth/RequestPasswordReset/${this.state.email}`);
      this.props.navigation.navigate('VerifyScreen', { user: "null", email: this.state.email, userId: "null", otpMessage: request.data, screen: "reset" });
      // sendDataToServer();
      //navigation.navigate('ChefMain');
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#a9a7a7'}}>
        <ImageBackground
          source={require('../../assets/images/backgroundSignUp.png')}
          style={{width: wp('100%'), height: hp('100%')}}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 0.8}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ScrollView>
                <View>
                  <View style={{padding: RFPercentage(3)}}>
                    <Icon
                      name="arrowleft"
                      size={RFPercentage(5)}
                      color="#5B5353"
                      onPress={() => this.props.navigation.goBack()}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontSize: RFValue(20),
                      alignSelf: 'center',
                    }}>
                    FORGOT PASSWORD
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
                    <View
                      style={[
                        styles.textInputView,
                        {right: RFValue(-35), justifyContent: 'center'},
                      ]}>
                      {this.state.email.trim() != '' ? (
                        <></>
                      ) : (
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: -10,
                            marginBottom: 5,
                          }}>
                          <View
                            style={{
                              width: '25%',
                            }}></View>
                          <View
                            style={{
                              width: '75%',
                            }}>
                            <Text style={{color: 'red'}}>
                              {this.state.errorMessageEmail}
                            </Text>
                          </View>
                        </View>
                      )}
                      <View style={{ flexDirection: 'row' }}>
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
                            value={this.state.email}
                            onChangeText={(text) => {
                              this.setState({email: text});
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
                </View>
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <View
            style={{
              flex: 0.2,
              alignSelf: 'center',
            }}>
            <RedButton
              buttonText={'Continue'}
              buttonClick={this.onPressContinue}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
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

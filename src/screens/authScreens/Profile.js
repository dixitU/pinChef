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
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import Util from '../../Util';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import CountryPicker, {
  getAllCountries,
} from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import RBSheet from 'react-native-raw-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import EmptyProfilePic from '../../assets/svg/EmptyProfilePic';
import RedButton from '../../components/redButton';
import AuthModal from '../../components/AuthModal';
import GlobalStyles from '../../Style/GlobalStyles';

import GallaryIcon from '../../assets/svg/CameraIcon';
import CameraIcon from '../../assets/svg/CameraIcon';

export default function Profile({navigation, route}) {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [errorMessageFirstname, seterrorMessageFirstname] = useState('');
  const [errorMessageLastname, seterrorMessageLastname] = useState('');
  const [errorMessagetxtphone, seterrorMessagetxtphone] = useState('');
  const [photoVerification, setphotoVerification] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Spain');
  const [country, setCountry] = useState('Spain');
  const [cca2, setCca2] = useState('ES');
  const [callingCode, setCallingCode] = useState('34');
  const [country_flag, setCountry_flag] = useState('flag-es');
  const [txtphone, setTxtphone] = useState('');
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');
  const [filepath, setFilepath] = useState({data: '', uri: ''});


  useEffect(() => {
    if (this.phone) {
      this.phone.selectCountry(cca2.toLowerCase());
    }
  }, []);

  async function requestCameraPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'PinChef Camera Permission',
            message:
              'PinChef needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          launchCamera();
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      launchCamera();
    }
  }

  async function requestStoragePermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'PinChef Storage Permission',
            message:
              'PinChef needs access to your storage ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          chooseImage();
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      chooseImage();
    }
  }

  function chooseImage() {
    let options = {
      title: 'Select Image',
      maxWidth: 256,
      maxHeight: 256,
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setFilepath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  }

  function launchCamera() {
    let options = {
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setFilepath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  }

  function onSelect(country) {
    // alert(country.cca2)
    console.log(country);

    this.phone.selectCountry(country.cca2.toLowerCase());
    setCca2(country.cca2);
    setSelectedCountry(country.name);
    setCountry_flag(country.flag);
    setCallingCode(country.callingCode[0]);
  }

  function submit() {
    //navigation.navigate('Onboarding');
    // console.log(route.params.user);
    if (Fname.trim() == '') {
      seterrorMessageFirstname('First Name is required');
    } else if (Lname.trim() == '') {
      seterrorMessageFirstname('');
      seterrorMessageLastname('Last Name is required');
    } else if (txtphone.trim() == '' && route.params.user == 'Chef') {
      seterrorMessageLastname('');
      seterrorMessagetxtphone('Mobile Number is required');
    } else if (fileUri.trim() == '') {
      seterrorMessageLastname('');
      seterrorMessagetxtphone('');
      setphotoVerification(true);
    } else {
    }
  }

  function photomodalclose() {
    setphotoVerification(false);
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
              <View style={{paddingBottom: RFPercentage(5)}}>
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
                    fontSize: RFValue(25),
                    alignSelf: 'center',
                  }}>
                  CREATE PROFILE
                </Text>

                <View
                  style={{
                    alignItems: 'center',
                    padding: RFValue(20),
                  }}>
                  <Pressable onPress={() => this.RBSheet.open()}>
                    {fileUri == '' ? (
                      <EmptyProfilePic />
                    ) : (
                      <Pressable
                        onPress={() => this.RBSheet.open()}
                        style={{
                          backgroundColor: 'red',
                          borderRadius:
                            Math.round(
                              Dimensions.get('window').width +
                                Dimensions.get('window').height,
                            ) / 2,
                          width: Dimensions.get('window').width * 0.4,
                          height: Dimensions.get('window').width * 0.4,
                        }}>
                        <Image
                          resizeMode={'cover'}
                          source={{uri: fileUri}}
                          style={{
                            borderRadius:
                              Math.round(
                                Dimensions.get('window').width +
                                  Dimensions.get('window').height,
                              ) / 2,
                            width: Dimensions.get('window').width * 0.4,
                            height: Dimensions.get('window').width * 0.4,
                          }}></Image>
                      </Pressable>
                    )}
                  </Pressable>
                </View>

                <View
                  style={{
                    width: wp('90%'),
                    alignSelf: 'flex-end',
                    marginTop: RFValue(40),
                  }}>
                  <Text
                    style={{
                      marginVertical: RFValue(5),
                      right: RFValue(-50),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: RFValue(18),
                        color: 'black',
                      }}>
                      First Name
                    </Text>
                    <Text style={{color: 'red'}}> *</Text>
                  </Text>
                  <View
                    style={[
                      styles.textInputView,
                      {right: RFValue(-35), justifyContent: 'center'},
                    ]}>
                    {errorMessageFirstname == '' ? (
                      <></>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '5%',
                          }}></View>
                        <View
                          style={{
                            width: '75%',
                          }}>
                          <Text style={{color: 'red'}}>
                            {errorMessageFirstname}
                          </Text>
                        </View>
                      </View>
                    )}
                    <View
                      style={{
                        width: '90%',
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        value={Fname}
                        onChangeText={(text) => {
                          setFname(text);
                        }}
                        placeholder="Enter first name"
                        autoCapitalize="none"
                        textContentType="name"
                        keyboardType="name-phone-pad"
                        style={{marginLeft: RFValue(30)}}
                      />
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
                      marginVertical: RFValue(5),
                      right: RFValue(-40),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: RFValue(18),
                        color: 'black',
                      }}>
                      Last Name
                    </Text>
                    <Text style={{color: 'red'}}> *</Text>
                  </Text>
                  <View
                    style={[
                      styles.textInputView,
                      {left: RFValue(-35), justifyContent: 'center'},
                    ]}>
                    {errorMessageLastname == '' ? (
                      <></>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '20%',
                          }}></View>
                        <View
                          style={{
                            width: '75%',
                          }}>
                          <Text style={{color: 'red'}}>
                            {errorMessageLastname}
                          </Text>
                        </View>
                      </View>
                    )}
                    <View
                      style={{
                        width: '90%',
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        value={Lname}
                        onChangeText={(text) => {
                          setLname(text);
                        }}
                        placeholder="Enter last name"
                        autoCapitalize="none"
                        textContentType="name"
                        keyboardType="name-phone-pad"
                        style={{marginLeft: RFValue(50)}}
                      />
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    width: wp('90%'),
                    alignSelf: 'flex-end',
                    marginTop: RFValue(40),
                  }}>
                  <Text
                    style={{
                      marginVertical: RFValue(5),
                      right: RFValue(-40),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: RFValue(18),
                        color: 'black',
                        marginVertical: RFValue(5),
                        right: RFValue(-50),
                      }}>
                      Mobile number
                      {route.params.user === 'User' ? '(Optional)' : null}
                    </Text>
                    {route.params.user === 'User' ? null : (
                      <Text style={{color: 'red'}}> *</Text>
                    )}
                  </Text>
                  <View
                    style={[
                      styles.textInputView,
                      {right: RFValue(-35), justifyContent: 'center'},
                    ]}>
                    {errorMessagetxtphone == '' ? (
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
                            width: '15%',
                          }}></View>
                        <View
                          style={{
                            width: '75%',
                          }}>
                          <Text style={{color: 'red'}}>
                            {errorMessagetxtphone}
                          </Text>
                        </View>
                      </View>
                    )}
                    <View style={{flexDirection: 'row', right: RFValue(-35)}}>
                      <View style={{width: wp('10%')}}>
                        <CountryPicker
                          // onClose={() => {
                          //   this.setState({
                          //     showCountryPicker: false,
                          //   });
                          // }}
                          withModal={true}
                          withCallingCode={false}
                          withCallingCodeButton={false}
                          withFlag={true}
                          countryCode={cca2}
                          withFilter={true}
                          withCountryNameButton={false}
                          withFlagButton={true}
                          visible={false}
                          onSelect={(value) => onSelect(value)}
                          placeholder={'Select Nationality'}
                        />
                      </View>

                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text>{'+' + callingCode + ' '}</Text>
                      </View>

                      <View style={{width: wp('75%')}}>
                        <PhoneInput
                          ref={(ref) => {
                            this.phone = ref;
                          }}
                          flagStyle={{
                            height: 0,
                            width: 0,
                          }}
                          style={[
                            {
                              flex: 1,
                            },
                          ]}
                          onChangePhoneNumber={(value) => setTxtphone(value)}
                          value={txtphone}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{marginVertical: RFValue(20)}}>
                  <RedButton buttonText={'Done'} buttonClick={() => submit()} />
                </View>

                <RBSheet
                  ref={(ref) => {
                    this.RBSheet = ref;
                  }}
                  height={180}
                  openDuration={250}
                  customStyles={{
                    container: {
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  }}>
                  <View
                    style={{
                      width: wp('100%'),
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View style={{alignItems: 'center'}}>
                      <Pressable onPress={() => requestCameraPermission()}>
                        <Image
                          resizeMode={'contain'}
                          source={require('../../assets/images/Take_Photo.png')}
                          style={{
                            width: wp('10%'),
                            height: hp('10%'),
                          }}></Image>
                      </Pressable>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                        }}>
                        Take
                      </Text>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                        }}>
                        Photo
                      </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Pressable onPress={() => requestStoragePermission()}>
                        <Image
                          resizeMode={'contain'}
                          source={require('../../assets/images/select_photo.png')}
                          style={{
                            width: wp('10%'),
                            height: hp('10%'),
                          }}></Image>
                      </Pressable>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                        }}>
                        Take
                      </Text>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                        }}>
                        Photo
                      </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Pressable
                        onPress={() => {
                          fileUri('');
                        }}>
                        <Image
                          resizeMode={'contain'}
                          source={require('../../assets/images/remove_photo.png')}
                          style={{
                            width: wp('10%'),
                            height: hp('10%'),
                          }}></Image>
                      </Pressable>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                        }}>
                        Remove
                      </Text>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                        }}>
                        Photo
                      </Text>
                    </View>
                  </View>
                </RBSheet>
              </View>

              {photoVerification && (
                <AuthModal
                  photoVerificationModal={photoVerification}
                  authModalVisible={true}
                  photomodalclose={photomodalclose.bind()}
                  modalText={'Please upload profile image'}
                />
              )}  
              
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
    height: Platform.OS == 'android' ? hp('12%') : hp('10%'),
    borderRadius: RFValue(100),
    paddingHorizontal: RFValue(10),
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

{
  /* <View style = {{
                     backgroundColor:'green',
                     marginTop:RFValue(20)
                  }}>
                     <View style={{ padding: 10, backgroundColor:'red' }}>
                            <CountryPicker
                                onClose={() => {
                                    this.setState({
                                        showCountryPicker: false
                                    })
                                }}
                                withModal={true}
                                withCallingCode={false}
                                withCallingCodeButton={false}
                                withFlag={true}
                                countryCode={cca2}
                                withFilter={true}
                                withCountryNameButton={false}
                                withFlagButton={true}
                                visible={false}
                                onSelect={(value) => this.onSelect(value)}
                                placeholder={"Select Nationality"}
                            />
                        </View>
                        <Text>+{callingCode}</Text>
                  </View>


                        <PhoneInput
                            ref={(ref) => {
                                this.phone = ref;
                            }}
                            flagStyle={{
                                height: 0,
                                width: 0
                            }}
                            style={[
                                {
                                    flex: 1,
                                    height: 40,
                                    backgroundColor:'green'
                                }]}
                            onChangePhoneNumber={value => this.setState({ txtphone: value })}
                            value={txtphone}

                        /> */
}

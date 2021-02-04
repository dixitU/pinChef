import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header} from '@react-navigation/stack';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from '../../Style/GlobalStyles';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import KeyboardIcon from '../../assets/svg/KeyboardIcon';

export default function chefsUserChat({navigation, route}) {
  const [message, setMessage] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    // alert("Keyboard Shown");
  };

  const _keyboardDidHide = () => {
    // alert("Keyboard Hidden");
  };

  const ChefChatHeader = () => {
    return (
      // <View style={{ flexDirection: 'row', marginTop: RFValue(20) }}>
      <View
        style={
          Platform.OS == 'android'
            ? {
                paddingTop: RFValue(50),
                paddingBottom: RFValue(10),
                marginHorizontal: RFValue(1),
                flexDirection: 'row',
              }
            : {
                paddingBottom: RFValue(10),
                marginHorizontal: RFValue(1),
                flexDirection: 'row',
              }
        }>
        <TouchableOpacity
          style={{justifyContent: 'center', flex: 1}}
          onPress={() => navigation.navigate('Chef_Chat')}>
          {/* <MaterialIcons
            name={'arrow-back-ios'}
            size={25}
            style={{marginLeft: RFValue(10), color: '#469a21'}}
          /> */}
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode={'cover'}
            source={{
              uri:
                'https://images.unsplash.com/photo-1611817757318-778c55d529c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
            style={{
              height: hp(5),
              width: hp(5),
              borderRadius: hp(5),
              marginHorizontal: RFValue(5),
            }}
          />
          <View
            style={{marginHorizontal: RFValue(10), justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                fontSize: RFValue(15),
                color: '#469a21',
              }}>
              Dixit Ukani
            </Text>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                fontSize: RFValue(9),
                color: '#858585',
              }}>
              2 hours ago
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ChefChatHeader />
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? null : 20}
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View style={{flex: 1, padding: 10}}>
              {/* <Text>Chat with User</Text> */}
            </View>
            <View>
              <View
                style={{
                  marginHorizontal: RFValue(10),
                  marginVertical: RFValue(6),
                }}>
                <View style={styles.userChat}>
                  <Text style={{fontSize: RFValue(13)}}>Chat with User</Text>
                </View>
                <Text style={styles.messageDateTime}>Today/01:30 PM</Text>
              </View>
              <View
                style={{
                  marginHorizontal: RFValue(10),
                  marginVertical: RFValue(6),
                }}>
                <View style={styles.userChat}>
                  <Text style={{fontSize: RFValue(13)}}>Chat with User</Text>
                </View>
                <Text style={styles.messageDateTime}>Today/01:30 PM</Text>
              </View>
              <View
                style={{
                  marginHorizontal: RFValue(10),
                  marginVertical: RFValue(6),
                  alignSelf: 'flex-end',
                }}>
                <View style={[styles.userChat, {backgroundColor: '#D9D9D9'}]}>
                  <Text style={{fontSize: RFValue(13)}}>Chat with User</Text>
                </View>
                <Text
                  style={[
                    styles.messageDateTime,
                    {marginRight: RFValue(10), alignSelf: 'flex-start'},
                  ]}>
                  Today/01:30 PM
                </Text>
              </View>
            </View>
            <View style={[styles.footer, isKeyboardVisible && Platform.OS == 'android' ? {bottom: RFValue(-20)} : {bottom: RFValue(0)}]}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Say something..."
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={(message) => setMessage(message)}
                />
                <TouchableOpacity style={{padding: RFValue(10), flex: 1}}>
                  <KeyboardIcon />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
                <Image
                  resizeMode={'cover'}
                  source={require('../../assets/images/sendmessageicon.png')}
                  style={{
                    height: hp(3),
                    width: hp(3),
                    marginHorizontal: RFValue(5),
                    tintColor: '#469a21',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: RFValue(30),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderColor: '#D9D9D9',
    borderWidth: RFValue(2),
  },
  inputs: {
    flex: 1,
    padding: RFValue(10),
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(10),
    padding: RFValue(6),
  },
  userChat: {
    padding: RFValue(10),
    borderWidth: RFValue(1),
    borderColor: '#D9D9D9',
    alignSelf: 'flex-start',
    borderRadius: RFValue(20),
  },
  messageDateTime: {
    fontSize: RFValue(8),
    fontFamily: GlobalStyles.font.fontFamilyRegular,
    marginLeft: RFValue(10),
  },
});

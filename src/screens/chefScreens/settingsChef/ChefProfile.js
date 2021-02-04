import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Modal,
  Switch,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import CustomBorderLineDashed from '../../../components/CustomBorderLineDashed';
//import CustomIcon from '../../../components/CustomIcons';
import CoverEditBtn from '../../../assets/svg/CoverEditBtn';
import ProfileEditPhoto from '../../../assets/svg/ProfileEditPhoto';
import GlobalStyles from '../../../Style/GlobalStyles';
import UserChefHeader from '../../../components/userChefHeader';

import Name from '../../../assets/svg/Name';
import LastName from '../../../assets/svg/LastName';
import Email from '../../../assets/svg/Email';
import PhoneNumber from '../../../assets/svg/PhoneNumber';
import SearchLocation from '../../../assets/svg/SearchLocation';
import Detail_Info from '../../../assets/svg/Detail_Info';
import DeleteUser from '../../../assets/svg/DeleteUser';
import Logout from '../../../assets/svg/Logout';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const ProfileScreen = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [PhoneNum, setPhoneNum] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [Address, setAddress] = React.useState('');

  const handleSave = () => {
    console.log('Save changes');
  };

  return (
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader
        backHeader={true}
        backHeaderText={'PROFILE'}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fFF'}}>
          <View style={styles.containerUser}>
            <ImageBackground
              source={require('../../../assets/images/Cover_image.png')}
              style={{width: '100%', height: '100%'}}>
              <View style={{position: 'absolute', bottom: 15, left: 15}}>
                <View style={styles.containerInicials}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('Change Profile image');
                    }}>
                    <View style={[styles.containerInicials, {}]}>
                      <Text style={styles.lblInicials}>JD</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{position: 'absolute', right: -2, bottom: 2}}>
                    <ProfileEditPhoto />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{position: 'absolute', top: 15, right: 10}}
                onPress={() => {
                  console.log('Change banner');
                }}>
                <CoverEditBtn />
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={styles.containerInputs}>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <View style={styles.leftIconContainer}>
                <Name />
                {/* <CustomIcon name="namelast-name-icon" style={styles.icon} color="#469A09"/> */}
              </View>
              <View style={styles.containerText}>
                <TextInput
                  placeholder={'Name'}
                  placeholderTextColor={'#000000'}
                  onChangeText={setName}
                  onBlur={handleSave}
                  value={name}
                  style={styles.title}></TextInput>
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <View style={styles.leftIconContainer}>
                <LastName />
                {/* <CustomIcon name="namelast-name-icon" style={styles.icon} color="#469A09"/> */}
              </View>
              <View style={styles.containerText}>
                <TextInput
                  placeholder={'Last Name'}
                  placeholderTextColor={'#000000'}
                  onChangeText={setLastName}
                  onBlur={handleSave}
                  value={lastName}
                  style={styles.title}></TextInput>
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <View style={styles.leftIconContainer}>
                <Email />
                {/* <CustomIcon name="Mobile-number-icon" style={styles.icon} color="#469A09"/> */}
              </View>
              <View style={styles.containerText}>
                <TextInput
                  placeholder={'Phone Number'}
                  placeholderTextColor={'#000000'}
                  onChangeText={setPhoneNum}
                  onBlur={handleSave}
                  value={PhoneNum}
                  keyboardType={'numeric'}
                  style={styles.title}></TextInput>
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <View style={styles.leftIconContainer}>
                <PhoneNumber />
                {/* <CustomIcon name="email-icon" style={styles.icon} color="#469A09"/> */}
              </View>
              <View style={styles.containerText}>
                <TextInput
                  placeholder={'Email'}
                  placeholderTextColor={'#000000'}
                  onChangeText={setEmail}
                  onBlur={handleSave}
                  value={email}
                  style={styles.title}></TextInput>
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <View style={styles.leftIconContainer}>
                <SearchLocation />
                {/* <CustomIcon name="Timeline-Location" style={styles.icon} color="#469A09"/> */}
              </View>
              <View style={[styles.containerText]}>
                <TextInput
                  placeholder={'Address'}
                  placeholderTextColor={'#000000'}
                  onChangeText={setAddress}
                  onBlur={handleSave}
                  value={Address}
                  style={[
                    styles.title,
                    {
                      height: '100%',
                    },
                  ]}></TextInput>
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                }}
                onPress={() => console.log('Chef detail')}>
                <View style={styles.leftIconContainer}>
                  <Detail_Info />
                  {/* <CustomIcon name="chef" style={styles.icon} color="#469A09"/> */}
                </View>
                <View style={styles.containerText}>
                  <Text style={[styles.title]}>Detail Info</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                }}
                onPress={() => console.log('Delete Account')}>
                <View style={styles.leftIconContainer}>
                  <DeleteUser />
                  {/* <CustomIcon name="Delete-group-in-contacts" style={styles.icon} color="#BF2604"/> */}
                </View>
                <View style={styles.containerText}>
                  <Text style={[styles.title, {color: '#BF2604'}]}>
                    Delete Account
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={styles.containerItem}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                }}
                onPress={() => console.log('Log Out')}>
                <View style={styles.leftIconContainer}>
                  <Logout />
                  {/* <CustomIcon name="Logout" style={styles.icon} color="#BF2604"/> */}
                </View>
                <View style={styles.containerText}>
                  <Text style={[styles.title, {color: '#BF2604'}]}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
            </View>
            <View style={[styles.containerItem, {height: 40}]}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  borderLine: {
    paddingHorizontal: 15,
  },
  containerUser: {
    height: 200,
    marginBottom: '1%',
  },
  containerInicials: {
    width: RFValue(70),
    height: RFValue(70),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: '#FFD54F',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  lblInicials: {
    fontSize: RFValue(30),
    fontFamily: GlobalStyles.font.fontFamilyBold,
  },
  containerInputs: {
    flex: 1,
  },
  containerItem: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  leftIconContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: RFValue(19),
  },
  containerText: {
    justifyContent: 'center',
    height: '100%',
    flex: 4,
    paddingLeft: '4%',
  },
  title: {
    fontFamily: GlobalStyles.font.fontFamilyBold,
    fontSize: RFValue(15),
  },
});

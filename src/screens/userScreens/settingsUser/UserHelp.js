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
  StatusBar,
} from 'react-native';
import CustomBorderLineDashed from '../../../components/CustomBorderLineDashed';
//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from '../../../Style/GlobalStyles';
import UserChefHeader from '../../../components/userChefHeader';

import Faq from '../../../assets/svg/Faq';
import TermsAndPolicy from '../../../assets/svg/TermsAndPolicy';
import Contact from '../../../assets/svg/Contact';
import About from '../../../assets/svg/About';
import GreenArrow from '../../../assets/svg/GreenArrow';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const HelpScreen = ({navigation}) => {
  return (
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader
        backHeader={true}
        backHeaderText={'HELP'}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fFF', paddingTop: 15}}>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={{width: '100%', height: '100%'}}
              onPress={() => navigation.navigate('User_Settings_Faqs')}>
              <View style={styles.item}>
                <View style={styles.LeftIconContainer}>
                  <Faq />
                  {/* <CustomIcon name="Faq-icon" size={RFValue(20)} color="#469A09" /> */}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>FAQ</Text>
                </View>
                <View style={styles.rightIconContainer}>
                  <GreenArrow />
                  {/* <CustomIcon name="Down-arrow-dark-green" size={RFValue(19)} color="#469A09" /> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
            <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={{width: '100%', height: '100%'}}
              onPress={() => navigation.navigate('User_Settings_TermsPolicy')}>
              <View style={styles.item}>
                <View style={styles.LeftIconContainer}>
                  <TermsAndPolicy />
                  {/* <CustomIcon name="terms-icon" size={RFValue(20)} color="#469A09" /> */}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>Terms & Privacy Policy</Text>
                </View>
                <View style={styles.rightIconContainer}>
                  <GreenArrow />
                  {/* <CustomIcon name="Down-arrow-dark-green" size={RFValue(19)} color="#469A09" /> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
            <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={{width: '100%', height: '100%'}}
              onPress={() => navigation.navigate('User_Settings_ContactUs')}>
              <View style={styles.item}>
                <View style={[styles.LeftIconContainer, {marginLeft: 5}]}>
                  <Contact />
                  {/* <CustomIcon name="contact-us" size={RFValue(20)} color="#469A09" /> */}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>Contact Us</Text>
                </View>
                <View style={styles.rightIconContainer}>
                  <GreenArrow />
                  {/* <CustomIcon name="Down-arrow-dark-green" size={RFValue(19)} color="#469A09" /> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
            <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={{width: '100%', height: '100%'}}
              onPress={() => navigation.navigate('User_Settings_About')}>
              <View style={styles.item}>
                <View style={[styles.LeftIconContainer, {marginLeft: 5}]}>
                  <About />
                  {/* <CustomIcon name="My-screenings-info" size={RFValue(20)} color="#469A09" /> */}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>About</Text>
                </View>
                <View style={styles.rightIconContainer}>
                  <GreenArrow />
                  {/* <CustomIcon name="Down-arrow-dark-green" size={RFValue(19)} color="#469A09" /> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
            <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  itemContainer: {
    height: hp('8%'),
    paddingLeft: '2%',
    paddingRight: '4%',
  },
  item: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  LeftIconContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 4,
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontFamily: GlobalStyles.font.fontFamilyBold,
    fontSize: RFValue(15),
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  borderLine: {
    paddingHorizontal: 15,
  },
});

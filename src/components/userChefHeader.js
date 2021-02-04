import React from 'react';
import {View, Pressable, Text, Image, Platform, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GlobalStyles from '../Style/GlobalStyles';
import AddToCart from '../assets/svg/AddToCart';
import Faq from '../assets/svg/Faq';
import TermsAndPolicy from '../assets/svg/TermsAndPolicy';
import Contact from '../assets/svg/Contact';

const userChefHeader = (props) => {
  return (
    <>
      {props.locationHeader && (
        <View style={styles.container}>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              paddingLeft: RFValue(10),
            }}>
            <View style={{justifyContent: 'center'}}>
              <Image
                resizeMode={'cover'}
                source={require('../../src/assets/images/pin.png')}
                style={{
                  height: hp(3),
                  width: wp(5),
                }}></Image>
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginLeft: RFValue(5),
              }}>
              <Text
                style={{
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                  fontSize: RFValue(15),
                  fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
                }}>
                All
              </Text>
            </View>
          </View>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                paddingRight: RFValue(10),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode={'cover'}
                source={require('../../src/assets/images/filter2.png')}
                style={{
                  height: hp(3),
                  width: wp(5),
                }}></Image>
              {props.cartButton && (
                <Pressable
                  onPress={props.cartonCLick}
                  style={{marginHorizontal: RFValue(10)}}>
                  <AddToCart />
                </Pressable>
              )}
            </View>
          </View>
        </View>
      )}
      {props.backHeader && (
        <View style={[styles.container, {justifyContent: 'space-between'}]}>
          <View
            style={{
              width: '10%',
              paddingLeft: RFValue(10),
            }}>
            <Pressable
              onPress={props.backButton}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode={'cover'}
                source={require('../../src/assets/images/back.png')}
                style={{
                  height: hp(3),
                  width: wp(5),
                  tintColor: GlobalStyles.color.green,
                }}></Image>
            </Pressable>
          </View>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text>
                {props.settingHeaderIcons && (
                  <>
                    {props.faqIcon && <Faq />}
                    {props.termIcon && <TermsAndPolicy />}
                    {props.contactIcon && <Contact />}
                  </>
                )}
                <Text
                  style={{
                    fontFamily: GlobalStyles.font.fontFamilyBold,
                    color: props.settingTextColor
                      ? GlobalStyles.color.green
                      : GlobalStyles.color.darkGrey,
                    fontSize: RFValue(18),
                    fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
                  }}>
                  {props.backHeaderText}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      )}

      {props.settingMain && (
        <View
          style={[
            styles.container,
            {flexDirection: 'column', alignItems: 'center'},
          ]}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyBold,
                color: GlobalStyles.color.green,
                fontSize: RFValue(18),
                fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
              }}>
              {props.settingMainText}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default userChefHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: RFValue(60),
    paddingBottom: RFValue(5),
    marginHorizontal: RFValue(1),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

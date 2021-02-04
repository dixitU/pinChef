import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
} from 'react-native';
import {
  MenuOptions,
  MenuOption,
  MenuTrigger,
  Menu,
  MenuProvider,
} from 'react-native-popup-menu';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import UserChefHeader from '../../../components/userChefHeader';
import HalfStar from '../../../assets/svg/HalfStar';
import FullStar from '../../../assets/svg/FullStar';
import EmptyStar from '../../../assets/svg/EmptyStar';
import {RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from '../../../Style/GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';

const rating = 5;

export default singleReceipes = ({navigation}) => {
  function backPress() {
    navigation.goBack();
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader
        backHeader={true}
        backButton={backPress.bind()}
        backHeaderText={'Beef Taco'}
      />
      <MenuProvider>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flexDirection: 'column',
            //backgroundColor: 'red',
            paddingHorizontal: RFValue(10),
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: -3,
            },
            shadowColor: '#000000',
            elevation: 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: RFValue(10),
            }}>
            <Image
              resizeMode={'cover'}
              source={require('../../../assets/images/photo1.png')}
              style={{
                height: RFValue(40),
                width: RFValue(40),
                borderRadius: 100,
              }}></Image>

            <View
              style={{
                justifyContent: 'center',
                paddingLeft: RFValue(10),
                flex: 1,
              }}>
              <Text
                style={{
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                }}>
                Matt Wilsom
              </Text>
              <Text
                style={{
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                  fontSize: RFValue(10),
                  color: GlobalStyles.color.darkGrey,
                  fontWeight: 'bold',
                }}>
                Executive Chef
              </Text>
            </View>

            <View
              style={{
                width: '40%',
                flexDirection: 'column',
                alignItems: 'flex-end',
                flex: 1,
              }}>
              <Menu>
                <MenuTrigger>
                  <Image
                    resizeMode={'cover'}
                    source={require('../../../assets/images/more.png')}
                    style={{
                      height: hp(3),
                      width: hp(3),
                    }}
                  />
                </MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={{
                    borderRadius: 20,
                    shadowOffset: {width: 0, height: 2},
                    elevation: 3,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 3.84,
                    flex: 1,
                    alignSelf: 'flex-start',
                    paddingVertical: RFValue(30),
                  }}>
                  <MenuOption onSelect={() => alert(`Save`)}>
                    <View
                      style={{
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          marginHorizontal: RFValue(10),
                        }}>
                        Follow Chef
                      </Text>
                    </View>
                  </MenuOption>
                  <MenuOption onSelect={() => alert(`Save`)}>
                    <View
                      style={{
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          marginHorizontal: RFValue(10),
                        }}>
                        Add to favourites
                      </Text>
                    </View>
                  </MenuOption>
                </MenuOptions>
              </Menu>

              <View style={{flexDirection: 'row'}}>
                {rating == 1 ? (
                  <>
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                  </>
                ) : rating == 1.5 ? (
                  <>
                    <FullStar />
                    <HalfStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                  </>
                ) : rating == 2 ? (
                  <>
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                  </>
                ) : rating == 2.5 ? (
                  <>
                    <FullStar />
                    <HalfStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                  </>
                ) : rating == 3 ? (
                  <>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                    <EmptyStar />
                  </>
                ) : rating == 3.5 ? (
                  <>
                    <FullStar />
                    <FullStar />
                    <HalfStar />
                    <EmptyStar />
                    <EmptyStar />
                  </>
                ) : rating == 4 ? (
                  <>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <EmptyStar />
                  </>
                ) : rating == 4.5 ? (
                  <>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <HalfStar />
                    <EmptyStar />
                  </>
                ) : rating == 5 ? (
                  <>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <FullStar />
                  </>
                ) : (
                  <>
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                  </>
                )}
              </View>
            </View>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              source={require('../../../assets/images/bannerFeed1.png')}
              style={{
                height: RFValue(200),
                width: '100%',
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: RFValue(10),
            }}>
            <View style={{width: '60%', justifyContent: 'center'}}>
              <Text>
                <Text
                  style={[
                    styles.textStyle,
                    {fontSize: RFValue(15), alignSelf: 'flex-start'},
                  ]}>
                  Jenah Stephanson{' '}
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    {fontSize: RFValue(13), alignSelf: 'flex-start'},
                  ]}>
                  {'(' + 'Mexican' + ')'}
                </Text>
              </Text>
            </View>
            <View
              style={{
                width: '40%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode={'cover'}
                  source={require('../../../assets/images/heart.png')}
                  style={{
                    height: RFValue(20),
                    width: RFValue(20),
                  }}></Image>
                <Text>236</Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate('Feed_Comment');
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode={'cover'}
                  source={require('../../../assets/images/comment.png')}
                  style={{
                    height: RFValue(20),
                    width: RFValue(20),
                  }}></Image>
                <Text>110</Text>
              </Pressable>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode={'cover'}
                  source={require('../../../assets/images/share-option.png')}
                  style={{
                    height: RFValue(20),
                    width: RFValue(20),
                    tintColor: GlobalStyles.color.yellow,
                  }}></Image>
                <Text>50</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: RFValue(5),
            }}>
            <Image
              resizeMode={'cover'}
              source={require('../../../assets/images/clock.png')}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}></Image>
            <Text
              style={{
                color: GlobalStyles.color.darkGrey,
                marginLeft: RFValue(5),
              }}>
              Total: 1 hour
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: RFValue(5),
            }}>
            <Image
              resizeMode={'cover'}
              source={require('../../../assets/images/clock.png')}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}></Image>
            <Text
              style={{
                color: GlobalStyles.color.darkGrey,
                marginLeft: RFValue(5),
              }}>
              Prep: 20 mins Cook: 40 mins
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: RFValue(5),
            }}>
            <Image
              resizeMode={'cover'}
              source={require('../../../assets/images/clock.png')}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}></Image>
            <Text
              style={{
                color: GlobalStyles.color.darkGrey,
                marginLeft: RFValue(5),
              }}>
              Serving # - 2
            </Text>
          </View>

          <View
            style={{
              marginVertical: RFValue(10),
            }}>
            <Text
              style={[
                styles.textStyle,
                {
                  alignSelf: 'flex-start',
                  color: GlobalStyles.color.green,
                  fontSize: RFValue(13),
                },
              ]}>
              Ingredients
            </Text>
            <Text
              style={[
                styles.textStyle,
                {
                  fontWeight: '100',
                  alignSelf: 'flex-start',
                  color: GlobalStyles.color.black,
                  fontSize: RFValue(13),
                },
              ]}>
              Ground Beef 1 500, Tortillas 1 pack, Celery, 1 onion, Taco
              seasoning,
            </Text>
          </View>

          <View
            style={{
              marginVertical: RFValue(10),
            }}>
            <Text
              style={[
                styles.textStyle,
                {
                  alignSelf: 'flex-start',
                  color: GlobalStyles.color.green,
                  fontSize: RFValue(13),
                },
              ]}>
              Instructions
            </Text>
            <Text
              style={[
                styles.textStyle,
                {
                  fontWeight: '100',
                  alignSelf: 'flex-start',
                  color: GlobalStyles.color.black,
                  fontSize: RFValue(13),
                },
              ]}>
              I wanted to share how I like eating my burgers. I am sure you have
              not tried anything like this before. Lkjsdfglkjshfglkj
              slkfjlksjghf laskjflakjsdhfla asdkjf
            </Text>
          </View>

          <View
            style={{
              marginVertical: RFValue(10),
            }}>
            <Text
              style={[
                styles.textStyle,
                {
                  alignSelf: 'flex-start',
                  color: GlobalStyles.color.green,
                  fontSize: RFValue(13),
                },
              ]}>
              Required Tools
            </Text>
            <Text
              style={[
                styles.textStyle,
                {
                  fontWeight: '100',
                  alignSelf: 'flex-start',
                  color: GlobalStyles.color.black,
                  fontSize: RFValue(13),
                },
              ]}>
              I wanted to share how I like eating my burgers. I am sure you have
              not tried anything like this before. Lkjsdfglkjshfglkj
              slkfjlksjghf laskjflakjsdhfla asdkjf
            </Text>
          </View>

        </ScrollView>
      </MenuProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: GlobalStyles.font.fontFamilyBold,
    fontSize: RFValue(18),
    color: GlobalStyles.color.black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  borderLine: {
    borderWidth: 1,
    borderColor: GlobalStyles.color.green,
    width: '50%',
    alignSelf: 'center',
  },
  dashedBorder: {
    width: '60%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: GlobalStyles.color.darkGrey,
    borderStyle: 'dashed',
  },
});

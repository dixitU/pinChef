import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Pressable,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Modal,
} from 'react-native';
import UserChefHeader from '../../components/userChefHeader';
import GlobalStyles from '../../Style/GlobalStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import GreenArrow from '../../assets/svg/GreenArrow';
import HalfStar from '../../assets/svg/HalfStar';
import FullStar from '../../assets/svg/FullStar';
import EmptyStar from '../../assets/svg/EmptyStar';

const Feeds = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
  },
];

const rating = 1;

const userHomeScreen = ({navigation}) => {
  const [allChefs, setAllChefs] = useState(true);
  const [followingChefs, setFollowingChefs] = useState(false);

  const slide = (activeTab) => {
    if (activeTab == 'All_Chefs') {
      setAllChefs(true);
      setFollowingChefs(false);
    }
    if (activeTab == 'Following_Chefs') {
      setAllChefs(false);
      setFollowingChefs(true);
    }
  };

  const AllChefs = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => slide('Following_Chefs')}
        config={config}
        style={{
          flex: 1,
          marginHorizontal: RFValue(10),
          //backgroundColor: 'red'
        }}>
        <View style={{flex: 1}}>
          <FlatList
            data={Feeds}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      resizeMode={'cover'}
                      source={require('../../assets/images/photo1.png')}
                      style={{
                        height: hp(15),
                        width: hp(15),
                        borderRadius: hp(7.5),
                      }}></Image>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginVertical: RFValue(5),
                      }}>
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
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginVertical: RFValue(5),
                        fontSize: RFValue(12),
                        fontFamily: GlobalStyles.font.fontFamilyBold,
                        marginHorizontal: RFValue(10),
                      }}>
                      56/{rating}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      flex: 1,
                      padding: RFValue(10),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          flex: 1,
                          justifyContent: 'flex-start',
                          fontSize: RFValue(18),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                        }}>
                        Matt Wilsom
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginHorizontal: RFValue(5)}}>
                          <Image
                            resizeMode={'cover'}
                            source={require('../../assets/png_icons/Chef_Screens/chef.png')}
                            style={{
                              height: hp(2),
                              width: hp(2),
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            fontFamily: GlobalStyles.font.fontFamilyBold,
                            color: GlobalStyles.color.black,
                          }}>
                          25 Followers
                        </Text>
                      </View>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{
                          alignSelf: 'flex-end',
                          fontSize: RFValue(13),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          color: GlobalStyles.color.green,
                        }}>
                        Follow
                      </Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          color: GlobalStyles.color.darkGrey,
                          marginVertical: RFValue(5),
                        }}>
                        Executive Chef
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          color: GlobalStyles.color.darkGrey,
                          marginVertical: RFValue(5),
                        }}>
                        French, Italian, Spanish, Caucasian
                      </Text>
                      <Text>
                        <Text
                          style={{
                            fontSize: RFValue(15),
                            fontFamily: GlobalStyles.font.fontFamilyBold,
                            color: GlobalStyles.color.darkGrey,
                            marginVertical: RFValue(5),
                          }}>
                          Come to address, cook live, cook and…
                        </Text>
                        <GreenArrow />
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: RFValue(10),
                      }}>
                      <View
                        style={{
                          marginHorizontal: RFValue(10),
                        }}>
                        <Image
                          resizeMode={'cover'}
                          source={require('../../assets/images/pin.png')}
                          style={{
                            height: hp(3),
                            width: hp(3),
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          color: GlobalStyles.color.green,
                        }}>
                        Miami, FI
                      </Text>
                    </View>
                  </View>
                </View>
                {/* border */}
                <View
                  style={{
                    width: '95%',
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderColor: GlobalStyles.color.grey,
                    borderStyle: 'dashed',
                  }}></View>
              </View>
            )}
          />
        </View>
      </GestureRecognizer>
    );
  };

  const FollowingChefs = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeRight={(state) => slide('All_Chefs')}
        config={config}
        style={{
          flex: 1,
          backgroundColor: 'green',
          //paddingHorizontal: RFValue(10),
        }}></GestureRecognizer>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader locationHeader={true} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: RFValue(10),
        }}>
        <Pressable
          onPress={() => slide('All_Chefs')}
          style={
            allChefs
              ? {
                  borderBottomWidth: RFValue(2),
                  borderBottomColor: GlobalStyles.color.green,
                  paddingBottom: RFValue(5),
                }
              : {
                  borderBottomWidth: RFValue(0),
                  borderBottomColor: GlobalStyles.color.white,
                }
          }>
          <Text>All Chefs</Text>
        </Pressable>
        <Pressable
          onPress={() => slide('Following_Chefs')}
          style={
            followingChefs
              ? {
                  borderBottomWidth: RFValue(2),
                  borderBottomColor: GlobalStyles.color.green,
                  paddingBottom: RFValue(5),
                }
              : {
                  borderBottomWidth: RFValue(0),
                  borderBottomColor: GlobalStyles.color.white,
                }
          }>
          <Text>Following Chefs</Text>
        </Pressable>
      </View>

      {allChefs && <AllChefs />}
      {followingChefs && <FollowingChefs />}
    </View>
  );
};

export default userHomeScreen;

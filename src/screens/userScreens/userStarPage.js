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
import AsyncStorage from '@react-native-community/async-storage';
import UserChefHeader from '../../components/userChefHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import GlobalStyles from '../../Style/GlobalStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  MenuOptions,
  MenuOption,
  MenuTrigger,
  Menu,
  MenuProvider,
} from 'react-native-popup-menu';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import NoFeedPost from '../../assets/svg/NoFeedPost';
import HandStar from '../../assets/svg/HandStar';
import SyncIcon from '../../assets/svg/SyncIcon';
import GreenArrow from '../../assets/svg/GreenArrow';
import NoReceipesPost from '../../assets/svg/NoRecipesPosts';
import AddToCart from '../../assets/svg/AddToCart';
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
];

const rating = 1;

const userStarScreen = ({navigation}) => {
  const [feeds, setFeeds] = useState(true);
  const [receipes, setReceipes] = useState(false);
  const [foodServices, setFoodServices] = useState(false);
  const [mypurchases, setMypurchases] = useState(false);

  const slide = (activeTab) => {
    if (activeTab == 'Feeds') {
      setFeeds(true);
      setReceipes(false);
      setFoodServices(false);
      setMypurchases(false);
    }
    if (activeTab == 'Receipes') {
      setFeeds(false);
      setReceipes(true);
      setFoodServices(false);
      setMypurchases(false);
    }
    if (activeTab == 'Food&Services') {
      setFeeds(false);
      setReceipes(false);
      setFoodServices(true);
      setMypurchases(false);
    }
    if (activeTab == 'My_Purchases') {
      setFeeds(false);
      setReceipes(false);
      setFoodServices(false);
      setMypurchases(true);
    }
  };

  const FeedList = [
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
  ];

  const rating = 1;

  const Feeds = () => {
    const [isReportModalVisible, setReportModalVisible] = useState(false);

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    const ReportModal = () => {
      const [radioSelectedItem, setRadioSelectedItem] = useState('');

      const onSelect = (index, value) => {
        setRadioSelectedItem(value);
      };

      return (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isReportModalVisible}>
            <View style={stylesModal.centeredView}>
              <View style={[stylesModal.modalView]}>
                <View style={stylesModal.modalButtonView}>
                  <Text style={stylesModal.textBtnContinue}>Report</Text>
                </View>
                <View
                  style={{
                    width: '90%',
                    alignSelf: 'flex-end',
                    marginVertical: RFValue(20),
                  }}>
                  <Text
                    style={[
                      stylesModal.textBtnContinue,
                      {fontWeight: '100', color: GlobalStyles.color.black},
                    ]}>
                    Choose report reason;
                  </Text>
                  <View style={{marginVertical: RFValue(10)}}>
                    <RadioGroup
                      color="#464040"
                      activeColor={GlobalStyles.color.green}
                      onSelect={(index, value) => onSelect(index, value)}>
                      <RadioButton value={'item1'}>
                        <Text>SPAM</Text>
                      </RadioButton>

                      <RadioButton value={'item2'}>
                        <Text>INAPROPRIATE</Text>
                      </RadioButton>
                    </RadioGroup>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    bottom: 0,
                  }}>
                  <Pressable
                    onPress={() => {
                      setReportModalVisible(!isReportModalVisible);
                    }}
                    style={[
                      stylesModal.modalButtonView,
                      {
                        width: '40%',
                        alignItems: 'center',
                        backgroundColor: GlobalStyles.color.lightGrey,
                        padding: RFValue(15),
                        borderTopLeftRadius: RFValue(0),
                      },
                    ]}>
                    <Text
                      style={[stylesModal.textBtnContinue, {color: '#464040'}]}>
                      Cancel
                    </Text>
                  </Pressable>
                  <View style={{width: '20%'}}></View>
                  <Pressable
                    onPress={() => {
                      setReportModalVisible(!isReportModalVisible);
                    }}
                    style={[
                      stylesModal.modalButtonView,
                      {
                        width: '40%',
                        alignItems: 'center',
                        backgroundColor: '#464040',
                        padding: RFValue(15),
                        borderTopRightRadius: RFValue(0),
                      },
                    ]}>
                    <Text
                      style={[
                        stylesModal.textBtnContinue,
                        {color: GlobalStyles.color.lightGrey},
                      ]}>
                      Ok
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      );
    };

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => slide('Receipes')}
        config={config}
        style={{
          flex: 1,
          paddingHorizontal: RFValue(10),
        }}>
        {isReportModalVisible ? <ReportModal /> : null}
        {FeedList == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NoFeedPost />
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                fontSize: RFValue(15),
                paddingVertical: RFValue(10),
                fontWeight: 'bold',
              }}>
              Oops, looks like there are no feeds yet.{' '}
            </Text>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <FlatList
              data={FeedList}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={{flexDirection: 'column', flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      marginVertical: RFValue(10),
                    }}>
                    <Image
                      resizeMode={'cover'}
                      source={require('../../assets/images/photo1.png')}
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
                            source={require('../../assets/images/more.png')}
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
                                Follow
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
                                Contact Chef
                              </Text>
                            </View>
                          </MenuOption>
                          <MenuOption
                            onSelect={() => {
                              setReportModalVisible(true);
                            }}>
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
                                Report
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
                      source={require('../../assets/images/bannerFeed1.png')}
                      style={{
                        height: RFValue(200),
                        width: '100%',
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: RFValue(10),
                      flex: 1,
                    }}>
                    <View
                      style={{
                        width: '65%',
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
                          source={require('../../assets/images/heart.png')}
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
                          source={require('../../assets/images/comment.png')}
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
                          source={require('../../assets/images/share-option.png')}
                          style={{
                            height: RFValue(20),
                            width: RFValue(20),
                            tintColor: GlobalStyles.color.yellow,
                          }}></Image>
                        <Text>50</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          resizeMode={'cover'}
                          source={require('../../assets/images/pinBorder.png')}
                          style={{
                            height: RFValue(20),
                            width: RFValue(20),
                          }}></Image>
                        <Text style={{color: GlobalStyles.color.darkGrey}}>
                          Miami, FI
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '35%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        resizeMode={'cover'}
                        source={require('../../assets/images/clock.png')}
                        style={{
                          height: RFValue(20),
                          width: RFValue(20),
                        }}></Image>
                      <Text
                        style={{
                          color: GlobalStyles.color.darkGrey,
                          marginLeft: RFValue(3),
                        }}>
                        45 min ago
                      </Text>
                    </View>
                  </View>

                  <View style={{marginHorizontal: RFValue(10), flex: 1}}>
                    <Text>
                      It was a great night as we were catering for a wedding.
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: RFValue(10),
                      borderWidth: 1,
                      borderColor: GlobalStyles.color.darkGrey,
                      borderStyle: 'dashed',
                      marginHorizontal: RFValue(40),
                      flex: 1,
                    }}></View>
                </View>
              )}
            />
          </View>
        )}
      </GestureRecognizer>
    );
  };

  const Receipes = () => {
    const [isReportModalVisible, setReportModalVisible] = useState(false);

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => slide('Food&Services')}
        onSwipeRight={(state) => slide('Feeds')}
        config={config}
        style={{
          flex: 1,
          //paddingHorizontal: RFValue(10),
        }}>
        {FeedList == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NoReceipesPost />
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                fontSize: RFValue(15),
                paddingVertical: RFValue(10),
                fontWeight: 'bold',
              }}>
              Oops, looks like there are no receipes yet.{' '}
            </Text>
          </View>
        ) : (
          <View
            style={{flex: 1, overflow: 'hidden', backgroundColor: '#E6E6E6'}}>
            <FlatList
              data={FeedList}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    paddingHorizontal: RFValue(10),
                    marginBottom: RFValue(10),
                    borderRadius: RFValue(20),
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
                      source={require('../../assets/images/photo1.png')}
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
                            source={require('../../assets/images/more.png')}
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
                      source={require('../../assets/images/bannerFeed1.png')}
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
                            styleMasterclass.textStyle,
                            {fontSize: RFValue(13), alignSelf: 'flex-start'},
                          ]}>
                          Jenah Stephanson{' '}
                        </Text>
                        <Text
                          style={[
                            styleMasterclass.textStyle,
                            {fontSize: RFValue(10), alignSelf: 'flex-start'},
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
                          source={require('../../assets/images/heart.png')}
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
                          source={require('../../assets/images/comment.png')}
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
                          source={require('../../assets/images/share-option.png')}
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
                      source={require('../../assets/images/clock.png')}
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
                      marginVertical: RFValue(10),
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '90%'}}>
                      <Text
                        style={[
                          styleMasterclass.textStyle,
                          {
                            alignSelf: 'flex-start',
                            color: GlobalStyles.color.green,
                            fontSize: RFValue(13),
                          },
                        ]}>
                        Ingredients:
                      </Text>
                      <Text
                        style={[
                          styleMasterclass.textStyle,
                          {
                            fontWeight: '100',
                            alignSelf: 'flex-start',
                            color: GlobalStyles.color.black,
                            fontSize: RFValue(13),
                          },
                        ]}>
                        Ground Beef 1 500, Tortillas 1 pack, Celery, 1 onion,
                        Taco seasoning,
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => navigation.navigate('Single_Receipes')}
                      style={{
                        width: '10%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        resizeMode={'cover'}
                        source={require('../../assets/png_icons/Chef_Screens/Green_down_arrow.png')}
                        style={{
                          height: RFValue(15),
                          width: RFValue(15),
                        }}></Image>
                    </Pressable>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </GestureRecognizer>
    );
  };

  const FoodServices = () => {
    const [isReportModalVisible, setReportModalVisible] = useState(false);

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    const ReportModal = () => {
      const [radioSelectedItem, setRadioSelectedItem] = useState('');

      const onSelect = (index, value) => {
        setRadioSelectedItem(value);
      };

      return (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isReportModalVisible}>
            <View style={stylesModal.centeredView}>
              <View style={[stylesModal.modalView]}>
                <View style={stylesModal.modalButtonView}>
                  <Text style={stylesModal.textBtnContinue}>Report</Text>
                </View>
                <View
                  style={{
                    width: '90%',
                    alignSelf: 'flex-end',
                    marginVertical: RFValue(20),
                  }}>
                  <Text
                    style={[
                      stylesModal.textBtnContinue,
                      {fontWeight: '100', color: GlobalStyles.color.black},
                    ]}>
                    Choose report reason;
                  </Text>
                  <View style={{marginVertical: RFValue(10)}}>
                    <RadioGroup
                      color="#464040"
                      activeColor={GlobalStyles.color.green}
                      onSelect={(index, value) => onSelect(index, value)}>
                      <RadioButton value={'item1'}>
                        <Text>SPAM</Text>
                      </RadioButton>

                      <RadioButton value={'item2'}>
                        <Text>INAPROPRIATE</Text>
                      </RadioButton>
                    </RadioGroup>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    bottom: 0,
                  }}>
                  <Pressable
                    onPress={() => {
                      setReportModalVisible(!isReportModalVisible);
                    }}
                    style={[
                      stylesModal.modalButtonView,
                      {
                        width: '40%',
                        alignItems: 'center',
                        backgroundColor: GlobalStyles.color.lightGrey,
                        padding: RFValue(15),
                        borderTopLeftRadius: RFValue(0),
                      },
                    ]}>
                    <Text
                      style={[stylesModal.textBtnContinue, {color: '#464040'}]}>
                      Cancel
                    </Text>
                  </Pressable>
                  <View style={{width: '20%'}}></View>
                  <Pressable
                    onPress={() => {
                      setReportModalVisible(!isReportModalVisible);
                    }}
                    style={[
                      stylesModal.modalButtonView,
                      {
                        width: '40%',
                        alignItems: 'center',
                        backgroundColor: '#464040',
                        padding: RFValue(15),
                        borderTopRightRadius: RFValue(0),
                      },
                    ]}>
                    <Text
                      style={[
                        stylesModal.textBtnContinue,
                        {color: GlobalStyles.color.lightGrey},
                      ]}>
                      Ok
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      );
    };

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => slide('My_Purchases')}
        onSwipeRight={(state) => slide('Food&Services')}
        config={config}
        style={{
          flex: 1,
        }}>
        {isReportModalVisible ? <ReportModal /> : null}
        {FeedList == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NoFeedPost />
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                fontSize: RFValue(15),
                paddingVertical: RFValue(10),
                fontWeight: 'bold',
              }}>
              Oops, looks like there are no feeds yet.{' '}
            </Text>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <FlatList
              data={FeedList}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={{flexDirection: 'column', flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      marginVertical: RFValue(10),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      resizeMode={'cover'}
                      source={require('../../assets/images/photo1.png')}
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
                            source={require('../../assets/images/more.png')}
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
                                Follow
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
                                Contact Chef
                              </Text>
                            </View>
                          </MenuOption>
                          <MenuOption
                            onSelect={() => {
                              setReportModalVisible(true);
                            }}>
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
                                Report
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
                    <ImageBackground
                      resizeMode={'cover'}
                      source={require('../../assets/images/bannerFeed1.png')}
                      style={{
                        height: RFValue(200),
                        width: '100%',
                      }}>
                      <View
                        style={{
                          borderTopRightRadius: RFValue(15),
                          padding: RFValue(5),
                          backgroundColor: 'white',
                          position: 'absolute',
                          bottom: 0,
                        }}>
                        <Text
                          style={{
                            fontFamily: GlobalStyles.font.fontFamilyBold,
                            fontSize: RFValue(13),
                            color: GlobalStyles.color.black,
                          }}>
                          Vegan Soft Tacos - $25
                        </Text>
                      </View>
                      <View
                        style={{
                          padding: RFValue(5),
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                        }}>
                        <AddToCart />
                      </View>
                    </ImageBackground>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: RFValue(10),
                      flex: 1,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          resizeMode={'cover'}
                          source={require('../../assets/images/pinBorder.png')}
                          style={{
                            height: RFValue(20),
                            width: RFValue(20),
                          }}></Image>
                        <Text style={{color: GlobalStyles.color.darkGrey}}>
                          Miami, FI
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: GlobalStyles.color.darkGrey,
                          marginLeft: RFValue(3),
                        }}>
                        2 Miles Away
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 0.5,
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
                          source={require('../../assets/images/heart.png')}
                          style={{
                            height: RFValue(20),
                            width: RFValue(20),
                          }}></Image>
                        <Text style={{fontSize: RFValue(13)}}>236</Text>
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
                          source={require('../../assets/images/comment.png')}
                          style={{
                            height: RFValue(20),
                            width: RFValue(20),
                          }}></Image>
                        <Text style={{fontSize: RFValue(13)}}>110</Text>
                      </Pressable>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          resizeMode={'cover'}
                          source={require('../../assets/images/share-option.png')}
                          style={{
                            height: RFValue(20),
                            width: RFValue(20),
                            tintColor: GlobalStyles.color.yellow,
                          }}></Image>
                        <Text style={{fontSize: RFValue(13)}}>50</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{marginHorizontal: RFValue(10), flex: 1}}>
                    <Text>
                      It was a great night as we were catering for a wedding.
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: RFValue(10),
                      borderWidth: 1,
                      borderColor: GlobalStyles.color.darkGrey,
                      borderStyle: 'dashed',
                      marginHorizontal: RFValue(40),
                      flex: 1,
                    }}></View>
                </View>
              )}
            />
          </View>
        )}
      </GestureRecognizer>
    );
  };

  const Purchases = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    // chef screen/No_materclass_created.png
    return (
      <GestureRecognizer
        onSwipeRight={(state) => slide('Food&Services')}
        config={config}
        style={{
          flex: 1,
        }}>
        {FeedList == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NoFeedPost />
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                fontSize: RFValue(15),
                paddingVertical: RFValue(10),
                fontWeight: 'bold',
              }}>
              Oops, looks like there are no feeds yet.{' '}
            </Text>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <FlatList
              data={FeedList}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    marginVertical: RFValue(10),
                    width: '93%',
                    alignSelf: 'center',
                    backgroundColor: '#F7F5F5',
                    borderRadius: RFValue(10),
                    padding: RFValue(5),
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 3,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      resizeMode={'cover'}
                      source={require('../../assets/images/photo1.png')}
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
                    <View style={{justifyContent: 'center'}}>
                      <HandStar />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(11),
                          color: GlobalStyles.color.green,
                          fontWeight: 'bold',
                        }}>
                        Food and Services
                      </Text>
                      <View style={{marginHorizontal: RFValue(10)}}>
                        <SyncIcon />
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginVertical: RFValue(10),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(13),
                          color: GlobalStyles.color.black,
                        }}>
                        Cook and Deliver
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(13),
                          color: GlobalStyles.color.black,
                        }}>
                        1
                      </Text>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(13),
                          color: GlobalStyles.color.black,
                        }}>
                        $25.80
                      </Text>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(13),
                          color: GlobalStyles.color.black,
                        }}>
                        $25.80
                      </Text>
                    </View>
                  </View>

                  <View style={{alignItems: 'flex-end'}}>
                    <Text>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(18),
                          color: GlobalStyles.color.darkGrey,
                        }}>
                        Total:{' '}
                      </Text>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(18),
                          color: GlobalStyles.color.black,
                        }}>
                        $ 29.84
                      </Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: RFValue(20),
                      marginHorizontal: RFValue(10)
                    }}>
                    <Text
                      style={{
                        fontFamily: GlobalStyles.font.fontFamilyBold,
                        fontSize: RFValue(13),
                        color: GlobalStyles.color.mediumGrey,
                      }}>
                      2 days ago
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(13),
                          color: GlobalStyles.color.mediumGrey,
                          marginRight: RFValue(5),
                        }}>
                        Details
                      </Text>
                      <Pressable onPress = {()=> navigation.navigate('Purchase_Details')}
                        style={{
                          transform: [{rotate: '90deg'}],
                        }}>
                        <GreenArrow />
                      </Pressable>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </GestureRecognizer>
    );
  };

  return (
    <MenuProvider style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader locationHeader={true} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: RFValue(10),
        }}>
        <Pressable
          onPress={() => slide('Feeds')}
          style={
            feeds
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
          <Text>Feeds</Text>
        </Pressable>
        <Pressable
          onPress={() => slide('Receipes')}
          style={
            receipes
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
          <Text>Receipes</Text>
        </Pressable>
        <Pressable
          onPress={() => slide('Food&Services')}
          style={
            foodServices
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
          <Text>Food{'&'}Services</Text>
        </Pressable>
        <Pressable
          onPress={() => slide('My_Purchases')}
          style={
            mypurchases
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
          <Text>My Purchases</Text>
        </Pressable>
      </View>

      {feeds && <Feeds />}
      {receipes && <Receipes />}
      {foodServices && <FoodServices />}
      {mypurchases && <Purchases />}
    </MenuProvider>
  );
};

export default userStarScreen;

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: 20,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: RFValue(30),
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textModal: {
    fontFamily: GlobalStyles.font.fontFamilyBold,
    fontSize: RFValue(14),
    textAlign: 'justify',
    fontWeight: Platform.OS === 'android' ? 'bold' : '100',
    textAlign: 'center',
    marginTop: 28,
  },
  textBtnContinue: {
    color: '#fff',
    fontSize: RFValue(18),
    fontWeight: 'bold',
    fontFamily: GlobalStyles.font.fontFamilyBold,
  },
  modalButtonView: {
    width: '100%',
    backgroundColor: '#464040',
    padding: RFValue(20),
    borderBottomLeftRadius: RFValue(30),
    borderBottomRightRadius: RFValue(30),
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
  },
});

const styleMasterclass = StyleSheet.create({
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

const styles = StyleSheet.create({
  textStyle: {

  }
})

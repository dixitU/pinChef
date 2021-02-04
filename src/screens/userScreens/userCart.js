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
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
  },
];

const rating = 1;

const userCartScreen = ({navigation}) => {
  const [foodTab, setFood] = useState(true);
  const [servicesTab, setServices] = useState(false);

  const slide = (activeTab) => {
    if (activeTab == 'Food') {
      setFood(true);
      setServices(false);
    }
    if (activeTab == 'Services') {
      setFood(false);
      setServices(true);
    }
  };

  const Food = () => {
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
        onSwipeLeft={(state) => slide('Services')}
        config={config}
        style={{
          flex: 1,
          marginHorizontal: RFValue(10),
          //backgroundColor: 'red'
        }}>
        {isReportModalVisible ? <ReportModal /> : null}
        {Feeds == 0 ? (
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
              data={Feeds}
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

                      <Text
                        style={{
                          marginVertical: RFValue(5),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          fontSize: RFValue(13),
                          color: GlobalStyles.color.darkGrey,
                        }}>
                        Delivery + Pick up/Takeaway
                      </Text>
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

  const Services = () => {
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
        onSwipeRight={(state) => slide('Food')}
        config={config}
        style={{
          flex: 1,
          marginHorizontal: RFValue(10),
          //paddingHorizontal: RFValue(10),
        }}>
        {isReportModalVisible ? <ReportModal /> : null}
        {Feeds == 0 ? (
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
              data={Feeds}
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


  function backPress() {
    navigation.goBack();
  }

  return (
    <MenuProvider style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader
        locationHeader={true}
        cartButton={true}
        cartonCLick={() => navigation.navigate('Checkout_Page')}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: RFValue(10),
        }}>
        <Pressable
          onPress={() => slide('Food')}
          style={
            foodTab
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
          <Text>Food</Text>
        </Pressable>
        <Pressable
          onPress={() => slide('Services')}
          style={
            servicesTab
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
          <Text>Services</Text>
        </Pressable>
      </View>

      {foodTab && <Food />}
      {servicesTab && <Services />}
    </MenuProvider>
  );
};

export default userCartScreen;

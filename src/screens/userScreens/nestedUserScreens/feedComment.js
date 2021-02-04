import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  Platform,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  TextInput,
  Modal,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {
  MenuOptions,
  MenuOption,
  MenuTrigger,
  Menu,
  MenuProvider,
} from 'react-native-popup-menu';
import GlobalStyles from '../../../Style/GlobalStyles';
import UserChefHeader from '../../../components/userChefHeader';

import HalfStar from '../../../assets/svg/HalfStar';
import FullStar from '../../../assets/svg/FullStar';
import EmptyStar from '../../../assets/svg/EmptyStar';
import {ScrollView} from 'react-native-gesture-handler';

const Feeds = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    reply: [
      {
        name: 'Darshan',
        comment: 'Yes that is pretty funny, it does look like it :)',
      },
      {
        name: 'Mohit',
        comment: 'Yes that is pretty funny, it does look like it :)',
      },
    ],
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

const rating = 5;

const feedComment = ({props, navigation}) => {
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState('');
  const [reply, setReply] = useState('');
  const [isCommentReply, setCommentReply] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [isReportModalVisible, setReportModalVisible] = useState(false);
  // const keyboardDidShowListener = useRef();
  // const keyboardDidHideListener = useRef();

  // const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      setKeyboardVisible(false),
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function backPress() {
    navigation.goBack();
  }

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
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader backHeader={true} backButton={backPress.bind()} backHeaderText = {'COMMENTS'} />

      <KeyboardAvoidingView
        // keyboardVerticalOffset={Platform.OS === 'ios' ? null : 0}
        style={{flex: 1, backgroundColor: 'white'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <MenuProvider style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{flex: 1}}
              contentContainerStyle={{
                flexGrow: 1,
                marginHorizontal: RFValue(10),
                marginBottom: RFValue(5),
                // flex: 1
              }}>
              <View
                style={{
                  marginVertical: RFValue(5),
                  flexDirection: 'row',
                  marginVertical: RFValue(10),
                  flex: 1,
                }}>
                <View style={{width: '60%'}}>
                  <View style={{flexDirection: 'row'}}>
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
                  </View>
                </View>
                <View
                  style={{
                    width: '40%',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
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
                  source={require('../../../assets/images/bannerFeed1.png')}
                  style={{
                    height: hp(25),
                    width: Dimensions.get('screen').width / 1.1,
                    alignSelf: 'center',
                  }}></Image>
              </View>

              <View style={{flexDirection: 'row', marginVertical: RFValue(10)}}>
                <View
                  style={{
                    width: '65%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
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
                      props.navigation.navigate('Feed_Comment');
                    }}
                    style={{justifyContent: 'center', alignItems: 'center'}}>
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
                    style={{justifyContent: 'center', alignItems: 'center'}}>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      resizeMode={'cover'}
                      source={require('../../../assets/images/pinBorder.png')}
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
                    source={require('../../../assets/images/clock.png')}
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

              <View
                style={{
                  marginVertical: RFValue(10),
                  borderWidth: 1,
                  borderColor: GlobalStyles.color.lightGrey,
                  marginHorizontal: RFValue(40),
                }}></View>

              <View
                style={{
                  marginHorizontal: RFValue(10),
                  //paddingBottom: isKeyboardVisible ? 330 : RFValue(50),
                }}>
                {Feeds.map((item) => {
                  return (
                    <>
                      <View style={{marginVertical: RFValue(5)}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              marginVertical: RFValue(5),
                              fontFamily: GlobalStyles.font.fontFamilyBold,
                              fontSize: RFValue(15),
                            }}>
                            Jeneh
                          </Text>
                          <Text
                            style={{
                              fontFamily: GlobalStyles.font.fontFamilyRegular,
                              color: GlobalStyles.color.darkGrey,
                              fontSize: RFValue(12),
                            }}>
                            19 hours ago
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={{
                              width: '80%',
                              flexDirection: 'row',
                            }}>
                            <View style={{width: '20%'}}>
                              <Image
                                resizeMode={'cover'}
                                source={require('../../../assets/images/photo1.png')}
                                style={{
                                  height: RFValue(40),
                                  width: RFValue(40),
                                  borderRadius: 100,
                                }}></Image>
                            </View>
                            <View style={{width: '80%'}}>
                              <Text
                                style={{
                                  fontFamily:
                                    GlobalStyles.font.fontFamilyRegular,
                                  color: GlobalStyles.color.black,
                                  textAlign: 'justify',
                                }}>
                                I wanted to share how I like eating my burgers.
                                I wanted to share how I like eating my burgers.
                                I wanted to share how I like eating my burgers.
                              </Text>
                            </View>
                          </View>
                          <View style={{width: '20%', alignItems: 'flex-end'}}>
                            <Pressable
                              onPress={() => {
                                setCommentReply(true);
                              }}
                              style={{alignSelf: 'center'}}>
                              <Image
                                resizeMode={'cover'}
                                source={require('../../../assets/images/reply.png')}
                                style={{
                                  height: RFValue(25),
                                  width: RFValue(25),
                                  tintColor: GlobalStyles.color.green,
                                }}></Image>
                            </Pressable>
                            <Pressable
                              onPress={() => setLike(like == 0 ? 1 : 0)}
                              style={{alignSelf: 'center'}}>
                              <Image
                                resizeMode={'cover'}
                                source={
                                  like == 0
                                    ? require('../../../assets/images/heart2.png')
                                    : require('../../../assets/images/heart.png')
                                }
                                style={{
                                  height: RFValue(25),
                                  width: RFValue(25),
                                  tintColor: GlobalStyles.color.red,
                                  bottom: 0,
                                }}></Image>
                            </Pressable>
                            <Text
                              style={{
                                fontFamily: GlobalStyles.font.fontFamilyRegular,
                                color: GlobalStyles.color.darkGrey,
                                alignSelf: 'center',
                                fontSize: RFValue(12),
                              }}>
                              {like} likes
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            bottom: 0,
                            marginVertical: RFValue(10),
                            marginHorizontal: RFValue(40),
                            borderWidth: 1,
                            borderColor: GlobalStyles.color.lightGrey,
                            borderStyle: 'dashed',
                          }}></View>

                        <FlatList
                          data={item.reply}
                          keyExtractor={(item) => item.id}
                          showsVerticalScrollIndicator={false}
                          renderItem={({item}) => (
                            <View
                              style={{
                                flexDirection: 'row',
                                marginHorizontal: RFValue(20),
                                marginVertical: RFValue(10),
                              }}>
                              <Image
                                resizeMode={'cover'}
                                source={require('../../../assets/images/photo1.png')}
                                style={{
                                  height: RFValue(25),
                                  width: RFValue(25),
                                  borderRadius: 100,
                                }}></Image>
                              <Text style={{marginHorizontal: RFValue(10)}}>
                                <Text
                                  style={{
                                    fontFamily:
                                      GlobalStyles.font.fontFamilyRegular,
                                    color: GlobalStyles.color.black,
                                    fontWeight: 'bold',
                                  }}>
                                  Jenah{' '}
                                </Text>
                                <Text
                                  style={{
                                    fontFamily:
                                      GlobalStyles.font.fontFamilyRegular,
                                    color: GlobalStyles.color.green,
                                    fontWeight: 'bold',
                                  }}>
                                  {'@' + 'Alex' + ' '}
                                </Text>
                                <Text
                                  style={{
                                    ontFamily:
                                      GlobalStyles.font.fontFamilyRegular,
                                    color: GlobalStyles.color.black,
                                  }}>
                                  Yes that is pretty funny, it does look like it
                                  :)
                                </Text>
                              </Text>
                            </View>
                          )}
                        />
                      </View>
                    </>
                  );
                })}
              </View>

              {isReportModalVisible ? <ReportModal /> : null}
            </ScrollView>
            <View
              style={[
                stylesModal.footer,
                isKeyboardVisible && Platform.OS == 'android'
                  ? {bottom: RFValue(-20)}
                  : {bottom: RFValue(0)},
              ]}>
              <View style={stylesModal.inputContainer}>
                <TextInput
                  style={[stylesModal.inputs]}
                  placeholder="Say something..."
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={(message) => setComment(message)}
                />
              </View>
            </View>
          </MenuProvider>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default feedComment;

const styles = StyleSheet.create({});

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
    borderRadius: RFValue(50),
    width: '100%',
    //alignItems: 'center',
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
    fontSize: RFValue(14),
    fontWeight: Platform.OS === 'android' ? 'bold' : '100',
    fontFamily: GlobalStyles.font.fontFamilyBold,
    //fontSize: '1rem',
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
    // paddingBottom: RFValue(10),
    // marginBottom: RFValue(-10)
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(10),
    padding: RFValue(6),
  },
});

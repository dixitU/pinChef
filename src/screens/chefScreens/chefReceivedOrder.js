import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from '../../Style/GlobalStyles';
import FliterIcon from '../../assets/svg/FliterIcon';
import CancelIcon from '../../assets/svg/CancelIcon';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function chefReceivedOrderScreen({navigation, route}) {
  const [filter, setFilter] = useState(false);
  const [feeds, setFeeds] = useState(true);
  const [food, setFood] = useState(false);
  const [services, setServices] = useState(false);
  const [emasterclass, setEmasterclass] = useState(false);

  useEffect(() => {}, []);

  const topSwitchHeader = (activeTab) => {
    if (activeTab === 'Feeds') {
      setFeeds(true);
      setFood(false);
      setServices(false);
      setEmasterclass(false);
    }
    if (activeTab === 'Food') {
      setFeeds(false);
      setFood(true);
      setServices(false);
      setEmasterclass(false);
    }
    if (activeTab === 'Services') {
      setFeeds(false);
      setFood(false);
      setServices(true);
      setEmasterclass(false);
    }
    if (activeTab === 'e-Masterclass') {
      setFeeds(false);
      setFood(false);
      setServices(false);
      setEmasterclass(true);
    }
  };

  const Feeds = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={() => topSwitchHeader('Food')}
        config={config}
        style={{
          flex: 1,
          marginHorizontal: RFValue(10),
          marginTop: RFValue(20),
        }}>
        <View
          style={{
            borderRadius: RFValue(10),
            borderWidth: 1,
            borderColor: '#D9D9D9',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: RFValue(5),
              backgroundColor: '#464040',
              borderRadius: RFValue(10),
            }}>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyBold,
                width: '40%',
                color: '#fff',
              }}>
              Item
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyBold,
                textAlign: 'center',
                color: '#fff',
              }}>
              QTY
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyBold,
                textAlign: 'center',
                color: '#fff',
              }}>
              Price
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyBold,
                textAlign: 'center',
                color: '#fff',
              }}>
              Amount
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: RFValue(5),
            }}>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                width: '40%',
              }}>
              Cook and Deliver
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                textAlign: 'center',
              }}>
              1
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                textAlign: 'center',
              }}>
              $23.80
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                textAlign: 'center',
              }}>
              $23.80
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: RFValue(5),
            }}>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                width: '40%',
              }}>
              Cook and Deliver
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                textAlign: 'center',
              }}>
              1
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                textAlign: 'center',
              }}>
              $23.80
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                textAlign: 'center',
              }}>
              $23.80
            </Text>
          </View>
          <View
            style={{
              paddingVertical: RFValue(5),
              paddingHorizontal: RFValue(12),
            }}>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: GlobalStyles.font.fontFamilyBold,
                textAlign: 'right',
              }}>
              Total:$ 39.84
            </Text>
          </View>
          <View
            style={{
              paddingVertical: RFValue(5),
              paddingHorizontal: RFValue(5),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: RFValue(10),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
              }}>
              2 days ago
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 1,
              }}>
              <CancelIcon />
              <TouchableOpacity
                onPress={() => navigation.navigate('Chef_Order_Detail')}
                style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: RFValue(10),
                    fontFamily: GlobalStyles.font.fontFamilyRegular,
                    marginLeft: RFValue(10),
                  }}>
                  Details
                </Text>
                {/* <MaterialIcons
                  name={'keyboard-arrow-down'}
                  size={30}
                  style={{color: '#469a21'}}
                /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GestureRecognizer>
    );
  };

  const Food = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={() => topSwitchHeader('Services')}
        onSwipeRight={() => topSwitchHeader('Feeds')}
        config={config}
        style={{
          flex: 1,
        }}>
        <Text>Food</Text>
      </GestureRecognizer>
    );
  };

  const Services = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={() => topSwitchHeader('e-Masterclass')}
        onSwipeRight={() => topSwitchHeader('Food')}
        config={config}
        style={{
          flex: 1,
        }}>
        <Text>Services</Text>
      </GestureRecognizer>
    );
  };

  const EMasterClass = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeRight={() => topSwitchHeader('Services')}
        config={config}
        style={{
          flex: 1,
        }}>
        <Text>EMasterClass</Text>
      </GestureRecognizer>
    );
  };

  const ChefProfileHeader = () => {
    return (
      <View
        style={
          Platform.OS == 'android'
            ? {
                backgroundColor: '#d9d9d9',
                flexDirection: 'row',
                paddingTop: RFValue(50),
                paddingBottom: RFValue(5),
                marginHorizontal: RFValue(1),
              }
            : {
                backgroundColor: '#d9d9d9',
                flexDirection: 'row',
                paddingTop: RFValue(40),
                paddingBottom: RFValue(5),
                marginHorizontal: RFValue(1),
                borderBottomWidth: 1,
                borderColor: '#464040',
              }
        }>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: RFValue(10),
            // flex: 1
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: RFValue(5),
              // flex: 1
            }}>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyBold,
                color: '#464040',
                fontSize: RFValue(18),
                fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
              }}>
              Food & Chef Services
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              paddingRight: RFValue(10),
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => setFilter(!filter)}>
              <FliterIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <ChefProfileHeader />
      <SafeAreaView style={{flex: 1}}>
        {filter ? (
          <View
            style={{
              backgroundColor: '#d9d9d9',
              borderBottomLeftRadius: RFValue(20),
              borderBottomRightRadius: RFValue(20),
            }}>
            <View
              style={{marginHorizontal: RFValue(15), marginTop: RFValue(10)}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: GlobalStyles.font.fontFamilyBold,
                    color: '#464040',
                    fontSize: RFValue(13),
                    fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
                    paddingVertical: RFValue(5),
                  }}>
                  Dates
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: GlobalStyles.font.fontFamilyBold,
                    color: '#464040',
                    fontSize: RFValue(13),
                    fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
                    paddingVertical: RFValue(5),
                  }}>
                  Min-Max
                </Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Nothing"
                style={{
                  marginVertical: RFValue(10),
                  backgroundColor: '#D0D0D0',
                  padding: RFValue(10),
                  borderRadius: RFValue(20),
                  marginTop: RFValue(20),
                }}
              />
            </View>
          </View>
        ) : // </TouchableWithoutFeedback>
        null}

        <View
          style={{
            zIndex: filter ? -1 : 0,
            position: 'absolute',
            flex: 1,
          }}>
          <TouchableWithoutFeedback
            onPress={() => (filter ? setFilter(!filter) : setFilter(false))}
            disabled={filter ? false : true}>
            <View
              style={{
                flex: 1,
                width: wp('100%') - RFValue(20),
                height: hp('100%'),
                marginHorizontal: RFValue(10),
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  style={{
                    padding: RFValue(10),
                    borderBottomWidth: feeds ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('Feeds')}>
                  <Text style={{fontSize: RFValue(13)}}>Feeds</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: RFValue(10),
                    borderBottomWidth: food ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('Food')}>
                  <Text style={{fontSize: RFValue(13)}}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: RFValue(10),
                    borderBottomWidth: services ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('Services')}>
                  <Text style={{fontSize: RFValue(13)}}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: RFValue(10),
                    borderBottomWidth: emasterclass ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('e-Masterclass')}>
                  <Text style={{fontSize: RFValue(13)}}>e-Masterclass</Text>
                </TouchableOpacity>
              </View>

              {feeds ? <Feeds /> : null}
              {food ? <Food /> : null}
              {services ? <Services /> : null}
              {emasterclass ? <EMasterClass /> : null}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </>
  );
}

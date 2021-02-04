import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from '../../Style/GlobalStyles';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

export default function chefOrderDetail({navigation, route}) {
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
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => navigation.navigate('Chef_Received_Order')}>
            {/* <MaterialIcons
              name={'arrow-back-ios'}
              size={25}
              style={{marginLeft: RFValue(10), color: '#469a21'}}
            /> */}
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: RFValue(5),
            }}>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyBold,
                color: '#464040',
                fontSize: RFValue(18),
                fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
              }}>
              Order Details
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <ChefProfileHeader />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View
              style={{
                marginVertical: RFValue(10),
                marginHorizontal: RFValue(10),
                alignSelf: 'flex-end',
              }}>
              <Text
                style={{
                  fontFamily: GlobalStyles.font.fontFamilyRegular,
                  color: '#464040',
                  fontSize: RFValue(10),
                }}>
                13 October, 2020 - 1:34 PM
              </Text>
            </View>
            <View
              style={{
                marginVertical: RFValue(10),
                marginHorizontal: RFValue(10),
                flexDirection: 'row',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  resizeMode={'cover'}
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                  }}
                  style={{
                    height: hp(4),
                    width: hp(4),
                    borderRadius: hp(2),
                    marginLeft: RFValue(10),
                  }}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: RFValue(10),
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontFamily: GlobalStyles.font.fontFamilyBold,
                    fontSize: RFValue(12),
                  }}>
                  Matt Wilson
                </Text>
                <Text style={{fontSize: RFValue(10), color: '#464040'}}>
                  Executive Chef
                </Text>
              </View>
            </View>
            <View style={{marginHorizontal: RFValue(20)}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingVertical: RFValue(5),
                  backgroundColor: '#464040',
                  borderRadius: RFValue(10),
                  marginVertical: RFValue(5),
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
                  paddingVertical: RFValue(10),
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
                  alignSelf: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: GlobalStyles.font.fontFamilyRegular,
                    paddingVertical: RFValue(3),
                  }}>
                  <Text
                    style={{
                      fontFamily: GlobalStyles.font.fontFamilyBold,
                      color: '#464040',
                    }}>
                    Subtotal:{' '}
                  </Text>
                  $ 39.84
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: GlobalStyles.font.fontFamilyRegular,
                    paddingVertical: RFValue(3),
                  }}>
                  <Text
                    style={{
                      fontFamily: GlobalStyles.font.fontFamilyBold,
                      color: '#464040',
                    }}>
                    Tax:{' '}
                  </Text>
                  8%
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: GlobalStyles.font.fontFamilyRegular,
                    paddingVertical: RFValue(3),
                  }}>
                  <Text
                    style={{
                      fontFamily: GlobalStyles.font.fontFamilyBold,
                      color: '#464040',
                    }}>
                    Shipping:{' '}
                  </Text>
                  $ 15.00
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: GlobalStyles.font.fontFamilyRegular,
                    paddingVertical: RFValue(3),
                  }}>
                  <Text
                    style={{
                      fontFamily: GlobalStyles.font.fontFamilyBold,
                      color: '#464040',
                    }}>
                    Process fee:{' '}
                  </Text>
                  $ 15.00
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
                  <Text style={{color: '#464040'}}>Total: </Text>$ 39.84
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: RFValue(20),
                marginVertical: RFValue(10),
              }}>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                  color: '#464040',
                  paddingVertical: RFValue(5),
                }}>
                Address
              </Text>
              <View
                style={{
                  paddingHorizontal: RFValue(15),
                  paddingVertical: RFValue(10),
                  borderWidth: RFValue(1),
                  borderRadius: RFValue(10),
                  borderColor: '#464040',
                  height: RFValue(70),
                }}>
                <TextInput placeholder="User Address" multiline={true} style={{ fontSize: RFValue(12) }} />
              </View>
            </View>
            <View
              style={{
                marginHorizontal: RFValue(20),
                marginVertical: RFValue(5),
              }}>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                  color: '#464040',
                  paddingVertical: RFValue(5),
                }}>
                Extra notes
              </Text>
              <View
                style={{
                  paddingHorizontal: RFValue(15),
                  paddingVertical: RFValue(10),
                  borderWidth: RFValue(1),
                  borderRadius: RFValue(10),
                  borderColor: '#464040',
                  height: RFValue(70),
                }}>
                <TextInput
                  placeholder="Please do not make. Changes last minute. Changes are allowed upon request a day in advance."
                  multiline={true}
                  style={{ fontSize: RFValue(12) }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

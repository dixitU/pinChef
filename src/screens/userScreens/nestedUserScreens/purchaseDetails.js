import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import UserChefHeader from '../../../components/userChefHeader';
import GlobalStyles from '../../../Style/GlobalStyles';

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

export default PurchaseDetails = () => {
  const [address, setAddress] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  return (
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader backHeader={true} backHeaderText={'Purchase Details'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            marginHorizontal: RFValue(10),
          }}
          showsVerticalScrollIndicator={false}>
          <View style={{alignSelf: 'flex-end', marginVertical: RFValue(10)}}>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                fontSize: RFValue(13),
              }}>
              13 October, 2020- 1:24 PM
            </Text>
          </View>

          <View
            style={{
              marginVertical: RFValue(10),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
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
          </View>

          {/* table view */}
          <View style={{flex: 1}}>
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

              <FlatList
                data={Feeds}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
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
                )}
              />

              <View
                style={{
                  marginVertical: RFValue(10),
                  marginHorizontal: RFValue(12),
                }}>
                <Text style={{marginVertical: RFValue(3)}}>
                  <Text style={styles.leftText}>Subtotal: </Text>
                  <Text style={styles.rightText}>$ 39.84</Text>
                </Text>
                <Text style={{marginVertical: RFValue(3)}}>
                  <Text style={styles.leftText}>Tax: </Text>
                  <Text style={styles.rightText}>%8</Text>
                </Text>
                <Text style={{marginVertical: RFValue(3)}}>
                  <Text style={styles.leftText}>Shipping: </Text>
                  <Text style={styles.rightText}>$ 15.00</Text>
                </Text>
                <Text style={{marginVertical: RFValue(3)}}>
                  <Text style={styles.leftText}>Process Fees: </Text>
                  <Text style={styles.rightText}>$ 15.00</Text>
                </Text>
                <Text style={{marginVertical: RFValue(3)}}>
                  <Text style={[styles.leftText, {fontSize: RFValue(15)}]}>
                    Total:{' '}
                  </Text>
                  <Text
                    style={[
                      styles.rightText,
                      {fontSize: RFValue(15), fontWeight: 'bold'},
                    ]}>
                    $ 39.84
                  </Text>
                </Text>
              </View>

              <View style={{margin: RFValue(5)}}>
                <Text
                  style={[
                    styles.leftText,
                    {fontSize: RFValue(18), textAlign: 'left'},
                  ]}>
                  Adress
                </Text>
                <View
                  style={{
                    height: hp(12),
                    padding: RFValue(10),
                    borderRadius: RFValue(10),
                    borderWidth: RFValue(1),
                    borderColor: GlobalStyles.color.black,
                  }}>
                  <TextInput
                    value={address}
                    onChangeText={(text) => {
                      setAddress(text);
                    }}
                    multiline={true}
                    placeholder="User address"
                    placeholderTextColor={GlobalStyles.color.darkGrey}
                    autoCapitalize="none"
                    textContentType={'name'}
                    keyboardType={'default'}
                    style={{marginLeft: RFValue(15), fontSize: RFValue(13)}}
                  />
                </View>
              </View>

              <View style={{margin: RFValue(5)}}>
                <Text
                  style={[
                    styles.leftText,
                    {fontSize: RFValue(18), textAlign: 'left'},
                  ]}>
                  Extra notes
                </Text>
                <View
                  style={{
                    height: hp(12),
                    padding: RFValue(10),
                    borderRadius: RFValue(10),
                    borderWidth: RFValue(1),
                    borderColor: GlobalStyles.color.black,
                  }}>
                  <TextInput
                    value={extraNotes}
                    onChangeText={(text) => {
                      setExtraNotes(text);
                    }}
                    multiline={true}
                    placeholder="Please do not make. Changes last minute. 
                  Changes are allowed upon request a day in 
                  advance."
                    placeholderTextColor={GlobalStyles.color.darkGrey}
                    autoCapitalize="none"
                    textContentType={'name'}
                    keyboardType={'default'}
                    style={{marginLeft: RFValue(15), fontSize: RFValue(13)}}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  leftText: {
    fontSize: RFValue(12),
    fontFamily: GlobalStyles.font.fontFamilyBold,
    textAlign: 'right',
    color: GlobalStyles.color.darkGrey,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: RFValue(12),
    fontFamily: GlobalStyles.font.fontFamilyRegular,
    textAlign: 'right',
  },
});

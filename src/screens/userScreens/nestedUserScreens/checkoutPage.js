import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  FlatList,
  Pressable,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import UserChefHeader from '../../../components/userChefHeader';
import GlobalStyles from '../../../Style/GlobalStyles';
import GreenArrow from '../../../assets/svg/GreenArrow';
import Secure from '../../../assets/svg/Secure';
import ApplePay from '../../../assets/svg/ApplePay';
import Paypal from '../../../assets/svg/Paypal';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

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

export default CheckoutPage = ({navigation}) => {
  const [radioSelectedItem, setRadioSelectedItem] = useState('');
  const [extranotes, setExtranotes] = useState('');
  const [chefadress, setChefadress] = useState('');
  const [cardname, setCardname] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [carddate, setCarddate] = useState('');
  const [cardcvv, setCardcvv] = useState('');

  const onSelect = (index, value) => {
    setRadioSelectedItem(value);
  };

  return (
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader
        backHeader={true}
        backHeaderText={'CHECKOUT'}
        backButton={() => navigation.goBack()}
      />
      <View style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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

            {/* table view */}
            <View style={{flex: 1}}>
              <View
                style={{
                  borderRadius: RFValue(10),
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
                    <Text style={styles.leftText}>Tax: </Text>
                    <Text style={styles.rightText}>%8</Text>
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
                        {
                          fontSize: RFValue(15),
                          fontWeight: 'bold',
                          color: GlobalStyles.color.green,
                        },
                      ]}>
                      $ 39.84
                    </Text>
                  </Text>
                </View>

                <View style={{margin: RFValue(5)}}>
                  <Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.green,
                        },
                      ]}>
                      Order Type{' '}
                    </Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.red,
                        },
                      ]}>
                      *
                    </Text>
                  </Text>
                  <View
                    style={{
                      padding: RFValue(10),
                    }}>
                    <RadioGroup
                      color="#464040"
                      activeColor={GlobalStyles.color.green}
                      onSelect={(index, value) => onSelect(index, value)}>
                      <RadioButton value={'item1'}>
                        <Text
                          style={[
                            styles.leftText,
                            {
                              fontSize: RFValue(15),
                              color: GlobalStyles.color.black,
                              fontWeight: 'normal',
                              fontFamily: GlobalStyles.font.fontFamilyRegular,
                            },
                          ]}>
                          Pick up/Takeaway
                        </Text>
                      </RadioButton>
                      <RadioButton value={'item2'}>
                        <Text
                          style={[
                            styles.leftText,
                            {
                              fontSize: RFValue(15),
                              color: GlobalStyles.color.black,
                              fontWeight: 'normal',
                              fontFamily: GlobalStyles.font.fontFamilyRegular,
                            },
                          ]}>
                          Delivery
                        </Text>
                      </RadioButton>
                    </RadioGroup>
                  </View>
                </View>
                
                <View style={{margin: RFValue(5)}}>
                  <Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.green,
                        },
                      ]}>
                      Delivery Day{' '}
                    </Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.red,
                        },
                      ]}>
                      *
                    </Text>
                  </Text>
                  <View
                    style={{
                      padding: RFValue(15),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderRadius: RFValue(15),
                      borderWidth: RFValue(1),
                      borderColor: GlobalStyles.color.black,
                    }}>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.black,
                        },
                      ]}>
                      Today
                    </Text>
                    <Pressable style={{transform: [{rotate: '90deg'}]}}>
                      <GreenArrow />
                    </Pressable>
                  </View>
                </View>

                <View style={{margin: RFValue(5)}}>
                  <Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.green,
                        },
                      ]}>
                      Delivery Time{' '}
                    </Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.red,
                        },
                      ]}>
                      *
                    </Text>
                  </Text>
                  <View
                    style={{
                      padding: RFValue(15),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderRadius: RFValue(15),
                      borderWidth: RFValue(1),
                      borderColor: GlobalStyles.color.black,
                    }}>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.black,
                        },
                      ]}>
                      Select a time
                    </Text>
                    <Pressable style={{transform: [{rotate: '90deg'}]}}>
                      <GreenArrow />
                    </Pressable>
                  </View>
                </View>

                <View style={{margin: RFValue(5)}}>
                  <Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.green,
                        },
                      ]}>
                      Chef Adress
                    </Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.red,
                        },
                      ]}>
                      *
                    </Text>
                  </Text>
                  <View
                    style={{
                      padding: RFValue(15),
                      borderRadius: RFValue(15),
                      borderWidth: RFValue(1),
                      borderColor: GlobalStyles.color.black,
                    }}>
                    <TextInput
                      value={chefadress}
                      onChangeText={(text) => {
                        setChefadress(text);
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
                  <Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.green,
                        },
                      ]}>
                      Extra Notes
                    </Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.red,
                        },
                      ]}>
                      *
                    </Text>
                  </Text>
                  <View
                    style={{
                      padding: RFValue(15),
                      borderRadius: RFValue(15),
                      borderWidth: RFValue(1),
                      borderColor: GlobalStyles.color.black,
                    }}>
                    <TextInput
                      value={extranotes}
                      onChangeText={(text) => {
                        setExtranotes(text);
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
                  <Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.green,
                        },
                      ]}>
                      Payment Method{' '}
                    </Text>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.red,
                        },
                      ]}>
                      *
                    </Text>
                  </Text>
                  <View
                    style={{
                      padding: RFValue(15),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderRadius: RFValue(15),
                      borderWidth: RFValue(1),
                      borderColor: GlobalStyles.color.black,
                    }}>
                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(15),
                          textAlign: 'left',
                          color: GlobalStyles.color.black,
                        },
                      ]}>
                      Select a payment method
                    </Text>
                    <Pressable style={{transform: [{rotate: '90deg'}]}}>
                      <GreenArrow />
                    </Pressable>
                  </View>
                </View>

                <View
                  style={{
                    marginVertical: RFValue(20),
                  }}>
                  <View
                    style={{
                      marginVertical: RFValue(10),
                      borderRadius: RFValue(10),
                    }}>
                    <View
                      style={{
                        paddingVertical: RFValue(5),
                        backgroundColor: '#464040',
                        borderRadius: RFValue(10),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          fontFamily: GlobalStyles.font.fontFamilyBold,
                          color: GlobalStyles.color.white,
                          paddingLeft: RFValue(10),
                        }}>
                        Card Information
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      marginVertical: RFValue(5),
                      marginHorizontal: RFValue(20),
                    }}>
                    <View
                      style={{
                        borderRadius: RFValue(20),
                        paddingVertical: RFValue(5),
                        borderWidth: 1,
                        borderColor: GlobalStyles.color.darkGrey,
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        value={cardname}
                        onChangeText={(text) => {
                          setCardname(text);
                        }}
                        multiline={true}
                        placeholder="Name on card"
                        placeholderTextColor={GlobalStyles.color.darkGrey}
                        autoCapitalize="none"
                        textContentType={'name'}
                        keyboardType={'default'}
                        style={{marginLeft: RFValue(15), fontSize: RFValue(13)}}
                      />
                    </View>

                    <View
                      style={{
                        marginVertical: RFValue(10),
                        borderRadius: RFValue(20),
                        paddingVertical: RFValue(5),
                        borderWidth: 1,
                        borderColor: GlobalStyles.color.darkGrey,
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        value={cardnumber}
                        onChangeText={(text) => {
                          setCardnumber(text);
                        }}
                        multiline={true}
                        placeholder="4444 4444 4444 4444"
                        placeholderTextColor={GlobalStyles.color.darkGrey}
                        autoCapitalize="none"
                        textContentType={'telephoneNumber'}
                        keyboardType={'decimal-pad'}
                        style={{marginLeft: RFValue(15), fontSize: RFValue(13)}}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          flex: 1,
                          borderRadius: RFValue(20),
                          paddingVertical: RFValue(5),
                          borderWidth: 1,
                          borderColor: GlobalStyles.color.darkGrey,
                          justifyContent: 'center',
                          marginRight: RFValue(5),
                        }}>
                        <TextInput
                          value={cardnumber}
                          onChangeText={(text) => {
                            setCardnumber(text);
                          }}
                          multiline={true}
                          placeholder="MM / YY"
                          placeholderTextColor={GlobalStyles.color.darkGrey}
                          autoCapitalize="none"
                          textContentType={'telephoneNumber'}
                          keyboardType={'decimal-pad'}
                          style={{
                            marginLeft: RFValue(15),
                            fontSize: RFValue(13),
                          }}
                        />
                      </View>

                      <View
                        style={{
                          flex: 1,
                          borderRadius: RFValue(20),
                          paddingVertical: RFValue(5),
                          borderWidth: 1,
                          borderColor: GlobalStyles.color.darkGrey,
                          justifyContent: 'center',
                        }}>
                        <TextInput
                          value={cardnumber}
                          onChangeText={(text) => {
                            setCardnumber(text);
                          }}
                          multiline={true}
                          placeholder="CVV"
                          placeholderTextColor={GlobalStyles.color.darkGrey}
                          autoCapitalize="none"
                          textContentType={'telephoneNumber'}
                          keyboardType={'decimal-pad'}
                          style={{
                            marginLeft: RFValue(15),
                            fontSize: RFValue(13),
                          }}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        marginVertical: RFValue(10),
                        flexDirection: 'row',
                        flex: 1,
                      }}>
                      <Image
                        resizeMode={'cover'}
                        source={require('../../../assets/png_icons/Chef_Screens/info_icon_red.png')}
                        style={{
                          height: RFValue(20),
                          width: RFValue(20),
                        }}></Image>

                      <Text
                        style={[
                          styles.leftText,
                          {
                            fontSize: RFValue(13),
                            textAlign: 'left',
                            color: GlobalStyles.color.black,
                            fontWeight: 'normal',
                            paddingHorizontal: RFValue(5),
                            flex: 1,
                          },
                        ]}>
                        All Card payments are processed through Strip.
                      </Text>

                      <Secure />
                    </View>

                    <View
                      style={{
                        marginBottom: RFValue(10),
                        flexDirection: 'row',
                        flex: 1,
                      }}>
                      <Image
                        resizeMode={'cover'}
                        source={require('../../../assets/png_icons/Chef_Screens/info_icon_red.png')}
                        style={{
                          height: RFValue(20),
                          width: RFValue(20),
                        }}></Image>

                      <Text
                        style={[
                          styles.leftText,
                          {
                            fontSize: RFValue(13),
                            textAlign: 'left',
                            color: GlobalStyles.color.black,
                            fontWeight: 'normal',
                            paddingHorizontal: RFValue(5),
                            flex: 1,
                          },
                        ]}>
                        By Paying you accept the payment policy.
                      </Text>
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                        marginVertical: RFValue(20),
                      }}>
                      <Pressable
                        style={{
                          backgroundColor: GlobalStyles.color.green,
                          borderBottomLeftRadius: RFValue(20),
                          borderBottomRightRadius: RFValue(20),
                          borderTopLeftRadius: RFValue(20),
                          borderTopRightRadius: RFValue(0),
                          elevation: 5,
                          shadowColor: '#000',
                          shadowOffset: {width: 0, height: 2},
                          shadowOpacity: 0.5,
                          shadowRadius: 2,
                          elevation: 2,
                        }}>
                        <Text
                          style={{
                            paddingVertical: RFValue(10),
                            paddingHorizontal: RFValue(30),
                            fontSize: RFValue(20),
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Pay
                        </Text>
                      </Pressable>
                    </View>

                    <Text
                      style={[
                        styles.leftText,
                        {
                          fontSize: RFValue(13),
                          alignSelf: 'center',
                          color: GlobalStyles.color.black,
                          fontWeight: 'bold',
                          paddingHorizontal: RFValue(5),
                        },
                      ]}>
                      OR PAY WITH
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: RFValue(10),
                        paddingHorizontal: RFValue(50),
                        justifyContent: 'space-around',
                      }}>
                      <ApplePay />
                      <Paypal />
                    </View>
                  </View>
                </View>

                {/* ################################################## */}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
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

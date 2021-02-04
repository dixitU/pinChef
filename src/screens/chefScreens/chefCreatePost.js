import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Touchable,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from '../../Style/GlobalStyles';
import SavePostIcon from '../../assets/svg/SavePostIcon';
import CreatePostIcon1 from '../../assets/svg/CreatePostIcon1';
import CreatePostIcon2 from '../../assets/svg/CreatePostIcon2';
import CreatePostIcon3 from '../../assets/svg/CreatePostIcon3';
import UploadImageIcon from '../../assets/svg/UploadImageIcon';
import ArrowRightYellow from '../../assets/svg/ArrowRightYellow';
import ArrowDownYellow from '../../assets/svg/ArrowDownYellow';
import CreatePostCancelIcon from '../../assets/svg/CreatePostCancelIcon';
import CreatePostLocationIcon from '../../assets/svg/CreatePostLocationIcon';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function chefCreatePost({navigation, route}) {
  const name = route.params.name;

  const FeedsPost = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            padding: 16,
            backgroundColor: 'white',
          }}>
          <View style={{marginHorizontal: RFValue(20)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 2,
                paddingVertical: RFValue(10),
                borderBottomColor: '#FFD54F',
              }}>
              <CreatePostIcon1 />
              <CreatePostIcon2 />
              <CreatePostIcon3 />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopWidth: 2,
                paddingVertical: RFValue(10),
                borderTopColor: '#FFD54F',
              }}>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                  fontWeight: 'bold',
                  marginLeft: RFValue(10),
                }}>
                1
              </Text>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                  fontWeight: 'bold',
                }}>
                2
              </Text>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: GlobalStyles.font.fontFamilyBold,
                  fontWeight: 'bold',
                  marginRight: RFValue(4),
                }}>
                3
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              height: hp(20),
              marginVertical: RFValue(10),
              borderWidth: RFValue(3),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(25),
              marginHorizontal: RFValue(20),
            }}>
            <TouchableOpacity>
              <UploadImageIcon />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(15),
              marginVertical: RFValue(10),
              borderWidth: RFValue(3),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(25),
              marginHorizontal: RFValue(20),
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
              }}
              placeholder="Write Post description..."
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginVertical: RFValue(10),
              borderWidth: RFValue(3),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(25),
              paddingVertical: RFValue(10),
              paddingHorizontal: RFValue(10),
              flexDirection: 'row',
              marginHorizontal: RFValue(20),
            }}>
            <CreatePostLocationIcon />
            <TextInput
              placeholder="Location"
              placeholderTextColor="#9B9B9B"
              style={{marginHorizontal: RFValue(10), fontSize: RFValue(15)}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: RFValue(20),
                borderTopLeftRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#464640',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#464640',
                borderRadius: RFValue(20),
                borderTopRightRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#D9D9D9',
                }}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const FoodPost = () => {
    const [selected, setSelected] = useState('Pickup');
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{
            flex: 1,
            margin: 10,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              height: hp(20),
              marginVertical: RFValue(10),
              borderWidth: RFValue(3),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(25),
              marginHorizontal: RFValue(10),
            }}>
            <TouchableOpacity>
              <UploadImageIcon />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Food Item name
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              justifyContent: 'center',
            }}>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
              }}
              placeholder="Enter Food Title"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Description & Ingredients
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(13),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
              }}
              placeholder="Write the description, Ingredients, portion size"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Service Days and Hours
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: hp(5),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(12),
                flex: 1,
              }}
              placeholder="Available  days and hours"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
            <View style={{marginRight: RFValue(10)}}>
              <ArrowRightYellow />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Price
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(5),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: RFValue(10),
                borderRightWidth: 1,
                height: hp(5),
                justifyContent: 'center',
                borderRightColor: '#6A6A6A',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: RFValue(15)}}>$</Text>
            </View>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(12),
                flex: 1,
              }}
              placeholder="Enter Price"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: GlobalStyles.font.fontFamilyRegular,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Available For Services
          </Text>
          <Pressable
            style={{
              paddingHorizontal: RFValue(10),
              paddingTop: RFValue(10),
              borderRightWidth: 1,
              borderRightColor: '#6A6A6A',
              flexDirection: 'row',
            }}
            onPress={() => setSelected('Pickup')}>
            <View
              style={{
                height: hp(2),
                width: hp(2),
                borderWidth: 1,
                borderRadius: hp(1),
                borderColor: '#6A6A6A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {selected == 'Pickup' ? (
                <View
                  style={{
                    backgroundColor: '#469a09',
                    height: hp(1.2),
                    width: hp(1.2),
                    borderRadius: hp(1),
                  }}
                />
              ) : null}
            </View>
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                marginLeft: RFValue(10),
              }}>
              Pick Up
            </Text>
          </Pressable>
          <Pressable
            style={{
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              borderRightWidth: 1,
              borderRightColor: '#6A6A6A',
              flexDirection: 'row',
            }}
            onPress={() => setSelected('Delivery')}>
            <View
              style={{
                height: hp(2),
                width: hp(2),
                borderWidth: 1,
                borderRadius: hp(1),
                borderColor: '#6A6A6A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {selected == 'Delivery' ? (
                <View
                  style={{
                    backgroundColor: '#469a09',
                    height: hp(1.2),
                    width: hp(1.2),
                    borderRadius: hp(1),
                  }}
                />
              ) : null}
            </View>
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: GlobalStyles.font.fontFamilyRegular,
                marginLeft: RFValue(10),
                flex: 1,
              }}>
              Delivery
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginRight: RFValue(20),
              }}>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: GlobalStyles.font.fontFamilyRegular,
                  marginLeft: RFValue(20),
                }}>
                Fee: $
              </Text>
              <TextInput
                placeholder="Enter delivery fee"
                placeholderTextColor="#9B9B9B"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#6A6A6A',
                  paddingBottom: RFValue(2),
                  paddingRight: RFValue(10),
                  paddingLeft: RFValue(3),
                }}
              />
            </View>
          </Pressable>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'flex-end',
              marginTop: RFValue(10),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: RFValue(20),
                borderTopLeftRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#464640',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#464640',
                borderRadius: RFValue(20),
                borderTopRightRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#D9D9D9',
                }}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  };

  const Recipes = () => {
    const [dropdown, setDropdown] = useState(false);
    const [selected, setSelected] = useState('');
    const data = [
      {
        name: 'Afghanistan',
      },
      {
        name: 'Albania',
      },
      {
        name: 'Algeria',
      },
      {
        name: 'Andorra',
      },
      {
        name: 'Angola',
      },
      {
        name: 'Argentina',
      },
      {
        name: 'Armenia',
      },
      {
        name: 'Australia',
      },
      {
        name: 'Austria',
      },
      {
        name: 'Azerbaijan',
      },
      {
        name: 'Bahamas',
      },
      {
        name: 'Bahrain',
      },
      {
        name: 'Bangladesh',
      },
      {
        name: 'Barbados',
      },

      {
        name: 'Belarus',
      },
      {
        name: 'Belgium',
      },
      {
        name: 'Belize',
      },
      {
        name: 'Benin',
      },
      {
        name: 'Bhutan',
      },
      {
        name: 'Bosnia and Herzegovina',
      },
      {
        name: 'Botswana',
      },
      {
        name: 'Brazil',
      },
      {
        name: 'Brunei Darussalam',
      },
      {
        name: 'Bulgaria',
      },
      {
        name: 'Burkina Faso',
      },
      {
        name: 'Burundi',
      },
      {
        name: 'Cabo Verde',
      },
    ];
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}>
        <ScrollView
          style={{
            flex: 1,
            margin: 10,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              height: hp(20),
              marginVertical: RFValue(10),
              borderWidth: RFValue(3),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(25),
              marginHorizontal: RFValue(10),
            }}>
            <TouchableOpacity>
              <UploadImageIcon />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Food Name
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
                flex: 1,
              }}
              placeholder="Enter Food Title"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Cuisine Type
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => setDropdown(!dropdown)}>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
                flex: 1,
              }}
              placeholder="Select an option"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
            <View style={{marginRight: RFValue(10)}}>
              <ArrowDownYellow />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Number Of Servings
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
                flex: 1,
              }}
              placeholder="2"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Prep Time
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
                flex: 1,
              }}
              placeholder="10 mins"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Cook Time
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
                flex: 1,
              }}
              placeholder="40 mins"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <ScrollView
            style={{
              marginVertical: RFValue(10),
              marginHorizontal: RFValue(10),
              zIndex: 1,
              position: 'absolute',
              top: hp(44),
              display: dropdown ? 'flex' : 'none',
              backgroundColor: 'white',
              width: wp('100%') - RFValue(40),
              borderWidth: RFValue(2),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(20),
              height: hp('60%')
            }}>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(item.name);
                    setDropdown(!dropdown);
                  }}>
                  <Text
                    style={{
                      paddingHorizontal: RFValue(10),
                      paddingTop: RFValue(10),
                      fontSize: RFValue(12),
                      fontFamily: GlobalStyles.font.fontFamilyRegular,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Ingredients
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(13),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
              }}
              placeholder="Write all the ingredients"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Instructions
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(13),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
              }}
              placeholder="Write step by step instructions as simple as possible  "
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Required tools <Text style={{ color: '#9B9B9B' }}>(optional)</Text>
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(13),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
              }}
              placeholder="Write down the tools needed to make this food"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'flex-end',
              marginTop: RFValue(10),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: RFValue(20),
                borderTopLeftRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#464640',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#464640',
                borderRadius: RFValue(20),
                borderTopRightRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#D9D9D9',
                }}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  };

  const ServicesPost = () => {
    const [dropdown, setDropdown] = useState(false);
    const [selected, setSelected] = useState('');
    const data = [
      {
        name: 'Cook and Deliver',
      },
      {
        name: 'Cook and Ship',
      },
      {
        name: 'Cook for Pick up',
      },
      {
        name: 'Host Guests and cook',
      },
      {
        name: 'Go to Guests address to cook',
      },
      {
        name: 'Cook Live with Chef',
      },
    ];
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}>
        <ScrollView
          style={{
            flex: 1,
            margin: 10,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              height: hp(20),
              marginVertical: RFValue(10),
              borderWidth: RFValue(3),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(25),
              marginHorizontal: RFValue(10),
            }}>
            <TouchableOpacity>
              <UploadImageIcon />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Service Type
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => setDropdown(!dropdown)}>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(12),
                flex: 1,
              }}
              placeholder="Select a service type"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
            <View style={{marginRight: RFValue(10)}}>
              <ArrowDownYellow />
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginVertical: RFValue(10),
              marginHorizontal: RFValue(10),
              zIndex: 1,
              position: 'absolute',
              top: hp(32),
              display: dropdown ? 'flex' : 'none',
              backgroundColor: 'white',
              width: wp('100%') - RFValue(40),
              borderWidth: RFValue(2),
              borderColor: '#D9D9D9',
              borderRadius: RFValue(20),
            }}>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(item.name);
                    setDropdown(!dropdown);
                  }}>
                  <Text
                    style={{
                      paddingHorizontal: RFValue(10),
                      paddingTop: RFValue(10),
                      fontSize: RFValue(12),
                      fontFamily: GlobalStyles.font.fontFamilyRegular,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Full Description about Service
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(13),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(13),
              }}
              placeholder="Write about what is included in the service you will be providing"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Service Days and Hours
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                marginVertical: RFValue(10),
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(12),
                flex: 1,
              }}
              placeholder="Available  days and hours"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
            <View style={{marginRight: RFValue(10)}}>
              <ArrowRightYellow />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: RFValue(12),
              fontFamily: GlobalStyles.font.fontFamilyBold,
              marginHorizontal: RFValue(10),
              marginTop: RFValue(10),
            }}>
            Price
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              marginVertical: RFValue(10),
              borderWidth: RFValue(1),
              borderColor: '#6A6A6A',
              borderRadius: RFValue(15),
              marginHorizontal: RFValue(10),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: RFValue(10),
                borderRightWidth: 1,
                height: hp(6),
                justifyContent: 'center',
                borderRightColor: '#6A6A6A',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: RFValue(15)}}>$</Text>
            </View>
            <TextInput
              style={{
                paddingHorizontal: RFValue(15),
                fontSize: RFValue(12),
                flex: 1,
              }}
              placeholder="Enter Price"
              placeholderTextColor="#9B9B9B"
              multiline={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'flex-end',
              marginTop: RFValue(10),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: RFValue(20),
                borderTopLeftRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#464640',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#464640',
                borderRadius: RFValue(20),
                borderTopRightRadius: RFValue(0),
                width: wp('40%'),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  paddingVertical: RFValue(10),
                  fontWeight: 'bold',
                  color: '#D9D9D9',
                }}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  };

  const EMasterClassPost = () => {
    return (
      <View style={{flex: 1, padding: 16}}>
        <Text>E-Master Class Post</Text>
      </View>
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
                borderBottomRightRadius: RFValue(20),
              }
            : {
                backgroundColor: '#d9d9d9',
                flexDirection: 'row',
                paddingTop: RFValue(40),
                borderBottomRightRadius: RFValue(20),
              }
        }>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: RFValue(10),
            backgroundColor: '#464040',
            flex: 1,
            borderRadius: RFValue(25),
            borderBottomLeftRadius: RFValue(0),
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: RFValue(5),
            }}>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyBold,
                color: '#fff',
                fontSize: RFValue(16),
                paddingVertical: RFValue(15),
                fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
              }}>
              {name == 'Feeds' ? 'Create a Posts' : null}
              {name == 'Food' ? 'Create a Food for sale' : null}
              {name == 'Recipes' ? 'Create a Recipe' : null}
              {name == 'Services' ? 'Create a Services for sale' : null}
              {name == 'EMasterClass' ? 'Create a Posts' : null}
            </Text>
          </View>
          <View
            style={{
              paddingRight: RFValue(15),
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setFilter(!filter)}>
              {name == 'Feeds' ? <SavePostIcon /> : <CreatePostCancelIcon />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <ChefProfileHeader />
      <KeyboardAvoidingView style={{flex: 1}}>
        {name == 'Feeds' ? <FeedsPost /> : null}
        {name == 'Food' ? <FoodPost /> : null}
        {name == 'Recipes' ? <Recipes /> : null}
        {name == 'Services' ? <ServicesPost /> : null}
        {name == 'EMasterClass' ? <EMasterClassPost /> : null}
      </KeyboardAvoidingView>
    </>
  );
}

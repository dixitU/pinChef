import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Touchable,
} from 'react-native';
import FliterIcon from '../../assets/svg/FliterIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from '../../Style/GlobalStyles';
import GestureRecognizer from 'react-native-swipe-gestures';
import CreateIcon from '../../assets/svg/CreateIcon';

export default function chefHomeScreen({navigation, route}) {
  const [filter, setFilter] = useState(false);
  const [feeds, setFeeds] = useState(true);
  const [food, setFood] = useState(false);
  const [recipes, setRecipes] = useState(false);
  const [services, setServices] = useState(false);
  const [emasterclass, setEmasterclass] = useState(false);

  useEffect(() => {}, []);

  const topSwitchHeader = (activeTab) => {
    if (activeTab === 'Feeds') {
      setFeeds(true);
      setFood(false);
      setRecipes(false);
      setServices(false);
      setEmasterclass(false);
    }
    if (activeTab === 'Food') {
      setFeeds(false);
      setFood(true);
      setRecipes(false);
      setServices(false);
      setEmasterclass(false);
    }
    if (activeTab === 'Recipes') {
      setFeeds(false);
      setFood(false);
      setRecipes(true);
      setServices(false);
      setEmasterclass(false);
    }
    if (activeTab === 'Services') {
      setFeeds(false);
      setFood(false);
      setRecipes(false);
      setServices(true);
      setEmasterclass(false);
    }
    if (activeTab === 'e-Masterclass') {
      setFeeds(false);
      setFood(false);
      setRecipes(false);
      setServices(false);
      setEmasterclass(true);
    }
  };

  const onPressCreate = () => {
    let name = '';
    if (feeds) {
      name = 'Feeds';
    }
    if (food) {
      name = 'Food';
    }
    if (recipes) {
      name = 'Recipes';
    }
    if (services) {
      name = 'Services';
    }
    if (emasterclass) {
      name = 'EMasterClass';
    }
    if (name != '') {
      navigation.navigate('Chef_Post', {name: name});
    } else {
      console.log | 'No Navigation';
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
        }}>
        <Text>Feeds</Text>
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
        onSwipeLeft={() => topSwitchHeader('Recipes')}
        onSwipeRight={() => topSwitchHeader('Feeds')}
        config={config}
        style={{
          flex: 1,
        }}>
        <Text>Food</Text>
      </GestureRecognizer>
    );
  };

  const Recipes = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={() => topSwitchHeader('Services')}
        onSwipeRight={() => topSwitchHeader('Food')}
        config={config}
        style={{
          flex: 1,
        }}>
        <Text>Recipes</Text>
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
        onSwipeRight={() => topSwitchHeader('Recipes')}
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
          }}>
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
              Chefs Posts
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
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          alignItems: 'flex-end',
          zIndex: 1,
          padding: RFValue(20),
        }}
        onPress={() => onPressCreate()}>
        <CreateIcon />
      </TouchableOpacity>
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
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    paddingVertical: RFValue(10),
                    borderBottomWidth: feeds ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('Feeds')}>
                  <Text style={{fontSize: RFValue(13)}}>Feeds</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingVertical: RFValue(10),
                    borderBottomWidth: food ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('Food')}>
                  <Text style={{fontSize: RFValue(13)}}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingVertical: RFValue(10),
                    borderBottomWidth: recipes ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('Recipes')}>
                  <Text style={{fontSize: RFValue(13)}}>Recipes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingVertical: RFValue(10),
                    borderBottomWidth: services ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('Services')}>
                  <Text style={{fontSize: RFValue(13)}}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingVertical: RFValue(10),
                    borderBottomWidth: emasterclass ? RFValue(2) : RFValue(0),
                    borderBottomColor: '#469a21',
                  }}
                  onPress={() => topSwitchHeader('e-Masterclass')}>
                  <Text style={{fontSize: RFValue(13)}}>e-Masterclass</Text>
                </TouchableOpacity>
              </View>

              {feeds ? <Feeds /> : null}
              {food ? <Food /> : null}
              {recipes ? <Recipes /> : null}
              {services ? <Services /> : null}
              {emasterclass ? <EMasterClass /> : null}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </>
  );
}

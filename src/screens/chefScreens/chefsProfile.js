import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, Platform } from 'react-native';
// import ChefProfileHeader from '../../components/chefProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import GlobalStyles from '../../Style/GlobalStyles';
import ChefNameIcon from '../../assets/svg/ChefNameIcon';
import ChefBadge from '../../assets/svg/ChefBadge';
import EmptyPhotos from '../../assets/svg/EmptyPhotos';
import AddPhotos from '../../assets/svg/AddPhotos';
import FoodOrderNotification from '../../assets/svg/FoodOrderNotification';
import { Rating } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileHeaderIcon1 from '../../assets/svg/ProfileHeaderIcon1';
import ProfileHeaderIcon2 from '../../assets/svg/ProfileHeaderIcon2';


export default function chefsProfileScreen({ navigation, route }) {
  const [photos, setPhotos] = useState(true);
  const [photosLength, setPhotosLength] = useState(11);
  const [info, setInfo] = useState(false);
  const [notifications, setNotification] = useState(false);

  useEffect(() => {

  }, []);

  const headerPress = (activeTab) => {
    console.log(activeTab);
    if (activeTab == 'photos') {
      setPhotos(true);
      setInfo(false);
      setNotification(false);
    }
    if (activeTab == 'info') {
      setPhotos(false);
      setInfo(true);
      setNotification(false);
    }
    if (activeTab == 'notifications') {
      setPhotos(false);
      setInfo(false);
      setNotification(true);
    }
  }

  const Photos = () => {
    // const imageData = []
    const imageData = [
      {
        img: 'https://images.unsplash.com/photo-1611787524147-c6b02d5e4270?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
      },
      {
        img: 'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      },
      {
        img: 'https://images.unsplash.com/photo-1611817757318-778c55d529c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      },
      {
        img: 'https://images.unsplash.com/photo-1611615566736-42c1a5b514c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      },
      {
        img: 'https://images.unsplash.com/photo-1611787524147-c6b02d5e4270?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
      },
      {
        img: 'add'
      }
    ];
    return (
      <View style={{ marginTop: RFValue(10) }}>
        {imageData.length != 0 ?
          <View style={{ flexDirection: 'row' }}>
            <FlatList
              data={imageData}
              renderItem={({ item, index }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: RFValue(1) }}>
                  {item.img == 'add' ?
                    <View style={{ height: hp(15), width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <AddPhotos />
                    </View>
                    :
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: item.img }}
                      style={{
                        height: hp(15),
                        width: '100%',
                      }}
                    />}
                </View>
              )}
              numColumns={3}
            />
          </View>
          :
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(10) }}>
            <EmptyPhotos />
          </View>}
      </View>
    );
  }

  const Info = () => {
    return (
      <View>
        <Text style={{ marginTop: RFValue(10) }}>
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(12) }}>Prosonal Summary: </Text>
          <Text style={{ fontSize: RFValue(12) }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
        </Text>
        <Text style={{ marginTop: RFValue(10) }}>
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(12) }}>DOB: </Text>
          <Text style={{ fontSize: RFValue(12) }}>25 October, 1975</Text>
        </Text>
      </View>
    );
  }

  const Notifications = () => {
    const note = [
      {
        name: 'Darshan Togadiya',
        image: 'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        date: '13 October 2020',
        time: '1:24 PM'
      },
      {
        name: 'Darshan Togadiya',
        image: 'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        date: '13 October 2020',
        time: '1:24 PM'
      }
    ]
    return (
      <FlatList
        data={note}
        renderItem={({ item, index }) => (
          <View style={{ marginTop: RFValue(10) }}>
            {index != 0 ?
              <View style={{ height: 0.5, backgroundColor: '#858585', marginBottom: RFValue(15), marginHorizontal: RFValue(20) }} />
              : null}
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  resizeMode={'cover'}
                  source={{ uri: item.image }}
                  style={{ height: hp(4), width: hp(4), borderRadius: hp(3) }}
                />
              </View>
              <View style={{ marginHorizontal: RFValue(10) }}>
                <Text style={{ fontFamily: GlobalStyles.font.fontFamilyBold, fontSize: RFValue(12) }}>{item.name}</Text>
                <Text style={{ fontSize: RFValue(8), color: '#858585', marginTop: RFValue(2) }}>{item.date} - {item.time}</Text>
              </View>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Text style={{ fontFamily: GlobalStyles.font.fontFamilyBold, fontSize: RFValue(12) }}>New Food Order</Text>
                <FoodOrderNotification />
              </View>
            </View>
          </View>
        )}
      />
    );
  }

  const ChefProfileHeader = () => {
    return (
      <View
        style={Platform.OS == 'android' ? {
          backgroundColor: '#d9d9d9',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: RFValue(50),
          paddingBottom: RFValue(5),
          marginHorizontal: RFValue(1)
        } : {
          backgroundColor: '#d9d9d9',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: RFValue(40),
          paddingBottom: RFValue(5),
          marginHorizontal: RFValue(1)
        }}>
        <View
          style={{ width: '50%', flexDirection: 'row', paddingLeft: RFValue(10) }}>
          <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => navigation.navigate('ChefMain')}>
            {/* <MaterialIcons name={'arrow-back-ios'} size={25} style={{ marginLeft: RFValue(10), color: '#469a21' }} /> */}
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
              Profile
          </Text>
          </View>
        </View>
        <View
          style={{ width: '50%', alignItems: 'flex-end' }}>
          <View style={{ justifyContent: 'center', paddingRight: RFValue(10), flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Chef_Chat')}>
              <ProfileHeaderIcon1 />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: RFValue(10) }}>
              <ProfileHeaderIcon2 />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <ChefProfileHeader />
      <ScrollView style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor={'#d9d9d9'} />
        <View style={{ height: hp(20), backgroundColor: '#484848' }} >
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginLeft: RFValue(10), width: hp(15) }}>
            <Image
              resizeMode={'cover'}
              source={{ uri: 'https://images.unsplash.com/photo-1611787524147-c6b02d5e4270?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' }}
              style={styles.profileImage}
            />
            <View style={{ alignItems: 'center', marginTop: RFValue(2), flexDirection: 'row', justifyContent: 'center' }}>
              <Image source={require('../../assets/images/locationIcon.png')} />
              <Text style={{ marginLeft: RFValue(3), fontFamily: GlobalStyles.font.fontFamilyBold, color: '#469a21', fontSize: RFValue(10) }}>Miami, FI</Text>
            </View>
          </View>
          <View style={{ marginLeft: -RFValue(8), marginTop: RFValue(10) }}>
            <ChefBadge />
          </View>
          <View style={{ marginLeft: RFValue(10), marginTop: RFValue(5), flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: GlobalStyles.font.fontFamilyBold, fontSize: RFValue(14), marginRight: RFValue(3) }}>Matt Wilson</Text>
              <ChefNameIcon />
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style={{ fontFamily: GlobalStyles.font.fontFamilyBold, textAlign: 'right', marginRight: RFValue(5), fontSize: RFValue(12) }}>25 followers</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontFamily: GlobalStyles.font.fontFamilyRegular, marginTop: RFValue(10), fontSize: RFValue(10) }}>Executive Chef</Text>
              <Text style={{ fontFamily: GlobalStyles.font.fontFamilyRegular, marginTop: RFValue(10), fontSize: RFValue(10) }}>French, Italian, Spanish, Caucasian</Text>
              <Text style={{ fontFamily: GlobalStyles.font.fontFamilyRegular, marginTop: RFValue(10), fontSize: RFValue(10) }}>Come to address, cook live, cook ...</Text>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginHorizontal: RFValue(20), marginTop: RFValue(10) }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: RFValue(5), fontFamily: GlobalStyles.font.fontFamilyRegular, fontSize: RFValue(11) }}>56/4.5</Text>
            <Rating
              ratingCount={5}
              imageSize={hp(2)}
              startingValue={4.5} />
            <View style={{ height: 1, backgroundColor: 'black', flex: 1, marginLeft: RFValue(5), marginTop: RFValue(6) }}>
            </View>
          </View>
          <View style={{ marginTop: RFValue(8) }}>
            <Text style={{ fontSize: RFValue(11) }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
          </View>
        </View>
        <View style={{ marginTop: RFValue(8), marginHorizontal: RFValue(20) }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.headerStyle, photos ? { backgroundColor: '#D9D9D9' } : { backgroundColor: 'transparent' }]} onPress={() => headerPress('photos')}>
              <Text style={{ marginHorizontal: RFValue(10), marginVertical: RFValue(5), fontSize: RFValue(12) }}>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerStyle, info ? { backgroundColor: '#D9D9D9' } : { backgroundColor: 'transparent' }]} onPress={() => headerPress('info')}>
              <Text style={{ marginHorizontal: RFValue(10), marginVertical: RFValue(5), fontSize: RFValue(12) }}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerStyle, notifications ? { backgroundColor: '#D9D9D9' } : { backgroundColor: 'transparent' }]} onPress={() => headerPress('notifications')}>
              <Text style={{ marginHorizontal: RFValue(10), marginVertical: RFValue(5), fontSize: RFValue(12) }}>Notifications</Text>
            </TouchableOpacity>
          </View>
          {photos ? <Photos /> : null}
          {info ? <Info /> : null}
          {notifications ? <Notifications /> : null}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  headerStyle: {
    backgroundColor: '#D9D9D9',
    width: wp('33%') - RFValue(10),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBlock: {
    height: wp('32%') - RFValue(10),
    width: wp('32%') - RFValue(10),
    backgroundColor: '#D9D9D9',
    marginLeft: RFValue(2)
  },
  profileImage: {
    backgroundColor: 'blue',
    height: hp(15),
    width: hp(15),
    borderRadius: hp(7.5),
    marginTop: -RFValue(30)
  }
});
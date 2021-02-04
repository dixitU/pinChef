import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Modal,
  Switch,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import CustomBorderLineDashed from '../../../components/CustomBorderLineDashed';
import UserChefHeader from '../../../components/userChefHeader';

import Notification from '../../../assets/svg/Notification';
import GreenArrow from '../../../assets/svg/GreenArrow';

//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from '../../../Style/GlobalStyles';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const NotificationsScreen = ({navigation}) => {
  const [notifications, setNotifications] = useState();

  const toggleNotifications = () =>
    setNotifications((previousState) => !previousState);

  return (
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader
        backHeader={true}
        backHeaderText={'NOTIFICATIONS'}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fFF', paddingTop: 15}}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <View style={styles.LeftIconContainer}>
                <Notification />
                {/* <CustomIcon name="Bell-Icon" size={RFValue(22)} color="#469A09" /> */}
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Show Notifications</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Switch
                  trackColor={{false: '#DED6CF', true: '#469A09'}}
                  thumbColor={notifications ? '#FFFFFF' : '#FFFFFF'}
                  ios_backgroundColor="#DED6CF"
                  onValueChange={toggleNotifications}
                  value={notifications}
                  style={{
                    transform:
                      Platform.OS === 'ios'
                        ? [{scaleX: 1.1}, {scaleY: 1.1}]
                        : [{scaleX: 1.5}, {scaleY: 1.5}],
                    marginRight: -4,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.borderLine}>
            <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <View style={styles.LeftIconContainer}>
                <Notification />
                {/* <CustomIcon name="Bell-Icon" size={RFValue(22)} color="#469A09" /> */}
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>App Notifications</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <GreenArrow />
                {/* <CustomIcon name="Down-arrow-dark-green" size={RFValue(22)} color="#469A09" /> */}
              </View>
            </View>
          </View>
          <View style={styles.borderLine}>
            <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  containerTitleView: {
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(15),
    flexDirection: 'row',
    height: hp('8%'),
    paddingBottom: 5,
    alignItems: 'flex-end',
  },
  titleView: {
    color: '#469A09',
    fontFamily: GlobalStyles.font.fontFamilyBold,
    fontSize: RFValue(23),
  },
  itemContainer: {
    height: hp('9%'),
    paddingLeft: '2%',
    paddingRight: '4%',
  },
  item: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  LeftIconContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 4,
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontFamily: GlobalStyles.font.fontFamilyBold,
    fontSize: RFValue(15),
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  borderLine: {
    paddingHorizontal: 15,
  },
});

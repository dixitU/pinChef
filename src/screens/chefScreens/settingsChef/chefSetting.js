import React from 'react';
import { 
  Text,
  View, 
  Pressable, 
  TouchableOpacity, 
  Share, 
  ScrollView, 
  SafeAreaView,
  StyleSheet,
  StatusBar
} from "react-native";
import CustomBorderLineDashed from "../../../components/CustomBorderLineDashed";
import Subscriptions from "../../../assets/svg/Subscriptions";
import PaymentMethod from "../../../assets/svg/PaymentMethod";
import Notification from '../../../assets/svg/Notification';
import Help from '../../../assets/svg/Help';
import ShareFriend from '../../../assets/svg/Share';
import Star from '../../../assets/svg/Star';
import GreenArrow from '../../../assets/svg/GreenArrow';

//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from "../../../Style/GlobalStyles";
import UserChefHeader from '../../../components/userChefHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const chefSettingScreen = ({navigation}) => {

  const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'https://www.google.com/',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
  };

  return (
    <>
    <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader settingMain={true} settingMainText={'SETTINGS'} />

    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex:1, backgroundColor: "#fFF" }}>
        <View style={{flex: 1, paddingTop: 30}}>

       
          <Pressable 
            onPress={() => {
                navigation.navigate("Chef_Settings_Profile")
            }}
          >
            <View style={[styles.containerUser, { paddingLeft: "2%", paddingRight: "4%" }]}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                    <View
                        style={[styles.containerInicials, {
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            backgroundColor: "#FFD54F",
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 14,
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center",
                        }]}
                    >
                        <Text style={styles.lblInicials}>
                            JD
                        </Text>
                    </View>
                </View>
                <View style={[styles.containerName]}>
                    <Text style={styles.lblName}>John Doe</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                    <GreenArrow />
                    {/* <CustomIcon name="Down-arrow-dark-green" size={25} color="#469A09" /> */}
                </View>
            </View>
          </Pressable>
          <View style={styles.itemContainer}>
              <TouchableOpacity style={{ width: "100%", height: "100%" }}
                  onPress={() => navigation.navigate("Chef_Settings_Notifications")}
              >
                  <View style={styles.item}>
                      <View style={styles.LeftIconContainer}>
                          <Notification />
                          {/* <CustomIcon name="Bell-Icon" size={RFValue(24)} color="#469A09" /> */}
                      </View>
                      <View style={styles.textContainer}>
                          <Text style={styles.title}>NOTIFICATIONS</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
              <TouchableOpacity style={{ width: "100%", height: "100%" }}
                  onPress={() => navigation.navigate("Chef_Settings_Help")}
              >
                  <View style={styles.item}>
                      <View style={styles.LeftIconContainer}>
                          <Help />
                          {/* <CustomIcon name="help-icon" size={RFValue(24)} color="#469A09" /> */}
                      </View>
                      <View style={styles.textContainer}>
                          <Text style={styles.title}>HELP</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
              <TouchableOpacity style={{ width: "100%", height: "100%" }}
                  onPress={() => navigation.navigate("Chef_Settings_PaymentMethods")}
              >
                  <View style={styles.item}>
                      <View style={styles.LeftIconContainer}>
                        <PaymentMethod />
                      </View>
                      <View style={styles.textContainer}>
                          <Text style={styles.title}>PAYMENT METHODS</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
              <TouchableOpacity style={{ width: "100%", height: "100%" }}
                  onPress={() => navigation.navigate("Chef_Settings_Subscriptions")}
              >
                  <View style={styles.item}>
                      <View style={styles.LeftIconContainer}>
                        <Subscriptions />
                      </View>
                      <View style={styles.textContainer}>
                          <Text style={styles.title}>SUBSCRIPTIONS</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
              <TouchableOpacity style={{ width: "100%", height: "100%" }}
                  onPress={() => onShare()}
              >
                  <View style={styles.item}>
                      <View style={styles.LeftIconContainer}>
                          <ShareFriend />
                        {/* <CustomIcon name="Share" size={RFValue(24)} color="#469A09" /> */}
                      </View>
                      <View style={styles.textContainer}>
                          <Text style={styles.title}>SHARE WITH FRIEND</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
          <View style={styles.itemContainer}>
              <TouchableOpacity style={{ width: "100%", height: "100%" }}
                  onPress={() => console.log("Rate Us")}
              >
                  <View style={styles.item}>
                      <View style={styles.LeftIconContainer}>
                          <Star />
                        {/* <CustomIcon name="Star" size={RFValue(24)} color="#FFD54F" /> */}
                      </View>
                      <View style={styles.textContainer}>
                          <Text style={styles.title}>RATE US</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={styles.borderLine}>
              <CustomBorderLineDashed size="1" color="#464040" dashGap="2 5" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default chefSettingScreen;

const styles = StyleSheet.create({
  containerTitleView: {
    justifyContent: "center",
    paddingLeft: RFValue(5),
    paddingRight: RFValue(5),
    flexDirection: "row",
    height: hp("8%"),
    paddingBottom: 5,
    alignItems: "flex-end",
  },
  titleView: {
      color: "#469A09",
      fontFamily: GlobalStyles.font.fontFamilyBold,
      fontSize: RFValue(23),
  },
  containerUser: {
    height: 55,
    flexDirection: "row",
    marginBottom: "6%",
  },
  containerName: {
      flex: 2,
      justifyContent: "center",
      paddingHorizontal: 1,
  },
  containerInicials: {
      width: RFValue(60),
      height: RFValue(60)
  },
  lblInicials: {
      fontSize: RFValue(25),
      fontFamily: GlobalStyles.font.fontFamilyBold,
  },
  lblName: {
      color: "#000000",
      fontFamily: GlobalStyles.font.fontFamilyBold,
      fontSize: RFValue(18),
  },
  itemContainer: {
    height: hp("9%"),
    paddingLeft: "2%",
    paddingRight: "4%",
  },
  item: {
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
  },
  LeftIconContainer:{
      flex: 1,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
  },
  textContainer: {
      flex: 4,
      justifyContent: "center",
      height: "100%",
  },
  borderLine: {
    paddingHorizontal: 15
  },
  title: {
      fontFamily: GlobalStyles.font.fontFamilyBold,
      fontSize: RFValue(12),
  },
})
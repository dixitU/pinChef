import React, {useState, useRef, useEffect} from "react";
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
    StatusBar
} from "react-native";
import NewLogo from "../../../assets/svg/NewLogo";
//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from "../../../Style/GlobalStyles";
import UserChefHeader from '../../../components/userChefHeader';

import ArrowBackground from '../../../assets/svg/ArrowBackground';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';


const AboutScreen = ({navigation}) => {
    return (
        <>
        <StatusBar translucent backgroundColor={'#d9d9d9'} />
        <UserChefHeader
        backHeader={true}
        backHeaderText={'ABOUT'}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

        <SafeAreaView style={{flex: 1}}>
            <View style={{flex:1, backgroundColor: "#fFF", paddingTop: 15 }}>
                <View style={{alignItems: "center", marginVertical: 20, height: hp("30%")}}>
                    <NewLogo />
                </View>
                <View style={{alignItems: "center"}}>
                    <View style={{flexDirection: "row", justifyContent: "flex-start", width: "50%", alignItems: "center"}}>
                        <ArrowBackground />
                        {/* <CustomIcon name="arrow-background" size={RFValue(20)} color="#469A09" /> */}
                        <Text style={[styles.title, {marginLeft: 20}]}>App version 0.4</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "flex-start", width: "50%", marginTop: 20, alignItems: "center"}}>
                    <ArrowBackground />
                        {/* <CustomIcon name="arrow-background" size={RFValue(20)} color="#469A09" /> */}
                        <Text style={[styles.title, {marginLeft: 20}]}>Updated on 22/01/2021</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </>
    )
}

export default AboutScreen;


const styles = StyleSheet.create({
    containerTitleView: {
      justifyContent: "space-between",
      paddingHorizontal: RFValue(15),
      flexDirection: "row",
      height: hp("8%"),
      paddingBottom: 5,
      alignItems: "flex-end",
    },
    titleView: {
        color: "#469A09",
        fontFamily: GlobalStyles.font.fontFamilyBold,
        fontSize: RFValue(17),
    },
    title: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        fontSize: RFValue(12),
    },
});
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
import CustomBorderLineDashed from "../../../components/CustomBorderLineDashed";
//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from "../../../Style/GlobalStyles";
import UserChefHeader from '../../../components/userChefHeader';

import TermsAndPolicy from '../../../assets/svg/TermsAndPolicy';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';



const TermsPolicyScreen = ({navigation}) => {
    return (
        <>
        <StatusBar translucent backgroundColor={'#d9d9d9'} />
        <UserChefHeader
        backHeader={true}
        backHeaderText={'TERMS & PRIVACY POLICY'}
        settingHeaderIcons={true}
        termIcon={true}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex:1, backgroundColor: "#fFF", paddingTop: 15 }}>
                <View style={styles.containerInputs}>
                    <View style={styles.containerItem}>
                        <View style={[{marginRight: 15}]}>
                            <TermsAndPolicy />
                            {/* <CustomIcon name="terms-and-privacy-bullet-icon" color="#469A09" size={RFValue(20)}/> */}
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.subTitle}>Age Restriction Rules</Text>
                            <View >
                                <Text style={styles.titleNote}>
                                    You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default TermsPolicyScreen;


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
    borderLine: {
        paddingHorizontal: 15
    },
    containerInputs: {
        flex: 1,
        paddingHorizontal: "4%",
    },
    containerItem: {
        paddingVertical: "5%",
        paddingHorizontal: "4%",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    item: {
        width: "100%",
        flexDirection: "row",
    },
    containerText: {
        flex: 2,
    },
    subTitle: {
        fontSize: RFValue(16),
        color: "#000000",
        fontFamily: GlobalStyles.font.fontFamilyBold,
        marginBottom: 15,
    },
    titleNote: {
        color: "#707070",
        fontSize: RFValue(13),
        fontFamily: GlobalStyles.font.fontFamilyRegular,
    },  
});
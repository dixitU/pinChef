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
import UserChefHeader from '../../../components/userChefHeader';

//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from "../../../Style/GlobalStyles";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';



const PaymentMethodScreen = ({navigation}) => {
    return (
        <>
        <StatusBar translucent backgroundColor={'#d9d9d9'} />
        <UserChefHeader
        backHeader={true}
        backHeaderText={'PAYMENT METHOD'}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex:1, backgroundColor: "#fFF", paddingTop: 15 }}>
            <View style={{backgroundColor: "#fFF", flex: 1, paddingTop: 10}}>
                <View style={{paddingHorizontal: 15, marginVertical: 20}}>
                    <Text style={[styles.title, {textAlign: "center"}]} >To activate your online payment options, please sign in to your accounts in each.</Text>
                </View>
                <View style={[styles.itemContainer, {marginTop: 20}]}>
                    <View style={styles.item}>
                        <Text style={[styles.title]} >Stripe</Text>
                        <TouchableOpacity style={styles.btnNotSignIn}>
                            <Text style={styles.btnNotSignInText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View>
                            <Text style={[styles.title]} >Paypal</Text>
                            <Text style={[styles.infoText, {marginLeft: 0, fontSize: 12, marginTop: 5}]}>PinChef@personal.com</Text>
                        </View>
                        <TouchableOpacity style={styles.btnSignedIn}>
                            <Text style={styles.btnSignedInText}>Signed In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Text style={[styles.title]} >Stripe</Text>
                        <TouchableOpacity style={styles.btnNotSignIn}>
                            <Text style={styles.btnNotSignInText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: "row", paddingHorizontal: 20, alignItems: "center", marginTop: 55}}>
                    {/* <CustomIcon name="My-screenings-info" size={25} color="#BF2604" /> */}
                    <Text style={styles.infoText}>Cash and Credit Card on Delivery will only be available on all accept e-Masterclasses. </Text>
                </View>
                <View style={{flexDirection: "row", paddingHorizontal: 20, alignItems: "center", marginTop: 20}}>
                    {/* <CustomIcon name="My-screenings-info" size={25} color="#BF2604" /> */}
                    <Text style={styles.infoText}>To add/delete payment options offered, go back to the chef’s profile details and  </Text>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default PaymentMethodScreen;


const styles = StyleSheet.create({
    itemContainer: {
        height: 60,
        paddingLeft: "2%",
        paddingRight: "4%",
        marginTop: 20
    },
    item: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 20,
        justifyContent: "space-between",
        paddingLeft: "13%"
    },
    title: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        fontSize: RFValue(14),
    },
    btnNotSignIn: {
        backgroundColor: "#469A09a2",
        width: 130,
        borderRadius: 35,
        borderTopRightRadius: 0,
    },
    btnNotSignInText: {
        paddingVertical: 12,
        textAlign: "center",
        fontSize: RFValue(15),
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: "#fff",
    },
    btnSignedIn: {
        backgroundColor: "#469A09",
        width: 130,
        borderRadius: 35,
        borderTopRightRadius: 0,
    },
    btnSignedInText: {
        paddingVertical: 12,
        textAlign: "center",
        fontSize: RFValue(15),
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: "#fff",
    },
    infoText: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: GlobalStyles.color.darkGrey,
        marginLeft: 5,
    }
})
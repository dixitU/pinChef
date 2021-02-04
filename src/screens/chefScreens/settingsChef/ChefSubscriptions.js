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
import Crown from "../../../assets/svg/Crown";

//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from "../../../Style/GlobalStyles";
import UserChefHeader from '../../../components/userChefHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const ChefSubscriptionsScreen = ({navigation}) => {
  return (
    <>
    <StatusBar translucent backgroundColor={'#d9d9d9'} />
    <UserChefHeader
        backHeader={true}
        backHeaderText={'SUBSCRITPTIONS'}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex:1, backgroundColor: "#fFF" }}>
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <View style={styles.titleContainer}>
                    <View style={{flexDirection: "row", marginBottom: 10}}>
                        <Text style={styles.titleRed}>First 3 Months</Text>
                        <Text style={styles.titleGreen}>FREE</Text>   
                    </View>
                    <Text style={styles.softText}>Free 29 days remaining</Text>
                </View>
                <View style={{ width:"90%", alignSelf: "center"}}>
                    <CustomBorderLineDashed size="2" color="#464040" dashGap="1 3" />
                </View>
                <View style={{flexDirection: "row", flex: 1}}>
                    <View style={styles.ItemsContainer}>
                        <View style={[styles.buttonYellow, { borderTopLeftRadius: 50 }]}>
                            <Text style={[styles.btnTopText, { borderTopLeftRadius: 25, borderBottomRightRadius: 25}]}>STARTER</Text>
                            <Text style={styles.btnPrice}>$9.99</Text>
                        </View>
                        <View style={styles.listContainer}>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>Free Chef Posts</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={() =>  navigation.navigate('webViewSettings', {price: "9.99"})}>
                            <View style={styles.greenBtn}>
                                <View style={{flexDirection: "row", flexWrap:"wrap", alignItems: "center", justifyContent: "space-around", width:"100%"}}>
                                    <Text style={styles.btnTime}>Monthly</Text>
                                    <Text style={styles.greenbtnPrice}>$9.99</Text>
                                </View>
                                <Text style={styles.btnSignup}>SIGN UP</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>  navigation.navigate('webViewSettings', {price: "99.99"})}>
                            <View style={styles.greenBtn}>
                                <View style={{flexDirection: "row", flexWrap:"wrap", alignItems: "center", justifyContent: "space-around", width:"100%"}}>
                                    <Text style={styles.btnTime}>1 yearly payment</Text>
                                    <Text style={styles.greenbtnPrice}>$99.99</Text>
                                </View>
                                <Text style={styles.btnSignup}>SIGN UP</Text>
                            </View>
                            </TouchableOpacity>
                            <Text style={styles.infoGreenBtn}>you save $20</Text>
                        </View>
                    </View>
                    <View style={styles.ItemsContainer}>
                        <View style={[styles.buttonYellow, { borderTopRightRadius: 50 }]}>
                            <Text style={[styles.btnTopText, { borderTopRightRadius: 25, borderBottomLeftRadius: 25}]}> <Crown /> VIP</Text>
                            <Text style={styles.btnPrice}>$14.99</Text>
                        </View>
                        <View style={styles.listContainer}>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>Free Chef Posts</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                {/* <CustomIcon name="check" style={styles.icon} color="#469A09"/> */}
                                <Text style={styles.listText}>2 masterclass listings</Text>
                            </View>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={() =>  navigation.navigate('webViewSettings', {price: "14.99"})}>
                            <View style={styles.greenBtn}>
                                <View style={{flexDirection: "row", flexWrap:"wrap", alignItems: "center", justifyContent: "space-around", width:"100%"}}>
                                    <Text style={styles.btnTime}>Monthly</Text>
                                    <Text style={styles.greenbtnPrice}>$14.99</Text>
                                </View>
                                <Text style={styles.btnSignup}>SIGN UP</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('webViewSettings', {price: "149.99"})}>
                            <View style={styles.greenBtn}>
                                <View style={{flexDirection: "row", flexWrap:"wrap", alignItems: "center", justifyContent: "space-around", width:"100%"}}>
                                    <Text style={styles.btnTime}>1 yearly payment</Text>
                                    <Text style={styles.greenbtnPrice}>$149.99</Text>
                                </View>
                                <Text style={styles.btnSignup}>SIGN UP</Text>
                            </View>
                            </TouchableOpacity>
                            <Text style={styles.infoGreenBtn}>you save $30</Text>
                        </View>
                    </View>
                </View>
            </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default ChefSubscriptionsScreen;


const styles = StyleSheet.create({
    titleContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    titleRed: {
        color: GlobalStyles.color.red,
        fontFamily: GlobalStyles.font.fontFamilyBold,
        marginRight: 10,
        fontSize: RFValue(18)
    },
    titleGreen: {
        color: GlobalStyles.color.green,
        fontFamily: GlobalStyles.font.fontFamilyBold,
        fontSize: RFValue(18)
    },
    boldText: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
    },
    softText: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: GlobalStyles.color.darkGrey,
        fontSize: RFValue(14)
    },
    buttonYellow: {
        backgroundColor: GlobalStyles.color.yellow,

        borderBottomLeftRadius:35,
        borderBottomRightRadius: 35,
        alignItems: "center"
    },
    ItemsContainer: {
        flex: 0.5,
        paddingHorizontal: 1
    },
    btnTopText: {
        backgroundColor: "#EFDA9A",
        paddingVertical: 8,
        width: "100%",
        textAlign: "center",

        fontFamily: GlobalStyles.font.fontFamilyBold,
        fontSize: RFValue(17),
        color: GlobalStyles.color.darkGrey,
    },
    btnPrice: {
        color: GlobalStyles.color.green,
        fontFamily: GlobalStyles.font.fontFamilyBold,
        paddingVertical: 8
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        marginTop: 15,
    },
    listText: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: GlobalStyles.color.darkGrey,
        marginLeft: 10,
        fontSize: RFValue(12),
    },
    icon: {
        fontSize: RFValue(8),
    },
    listContainer: {
        marginBottom: "auto"
    },
    greenBtn: {
        backgroundColor: GlobalStyles.color.green,
        width: "90%",
        alignSelf: "center",
        borderBottomLeftRadius: 45,
        borderTopLeftRadius: 45,
        borderBottomRightRadius: 38,
        padding: 10,
        alignItems: "center",
        marginBottom: 10
    },
    btnTime: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: GlobalStyles.color.yellow,
        fontSize: RFValue(15),

    },
    greenbtnPrice: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: GlobalStyles.color.red,
        fontSize: RFValue(14),
    },
    btnSignup: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: GlobalStyles.color.white,
        fontSize: RFValue(18),
        
    },
    infoGreenBtn: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: GlobalStyles.color.red,
        fontSize: RFValue(14),
        textAlign: "center",
        marginBottom: 7
    },
    btnContainer: {
        marginTop: 20
    }
})
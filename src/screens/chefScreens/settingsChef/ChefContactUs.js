import React, {useState, useRef, useEffect} from "react";
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from "react-native";
//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from "../../../Style/GlobalStyles";
import UserChefHeader from '../../../components/userChefHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GreenButton from "../../../components/Greenbutton";
import TermsAndPolicy from '../../../assets/svg/TermsAndPolicy';


const ContactUsScreen = ({navigation}) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");


    return (
        <>
        <StatusBar translucent backgroundColor={'#d9d9d9'} />
        <UserChefHeader
        backHeader={true}
        backHeaderText={'CONTACT US'}
        settingHeaderIcons={true}
        contactIcon={true}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />
        
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex:1, backgroundColor: "#fFF", paddingTop: 15 }}>
                <View style={[styles.containerInputs]}>
                    <View style={styles.containerItem}>
                        <View style={[styles.containerIconLeft]}>
                            <TermsAndPolicy />
                            {/* <CustomIcon name="terms-and-privacy-bullet-icon" color="#469A09" size={RFValue(20)}/> */}
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.subTitle}>Please fill the form below and submit suggestion, feedback, or any advertisment related questions.</Text>
                        </View>
                    </View>
                    <View>
                        <View style={[styles.input_label_left]}>
                            <Text style={[styles.label]}>Name</Text>
                            <View style={[styles.input,{ position:"relative"}]}>
                                <TextInput
                                    style={styles.input_text}
                                    placeholder="Enter name"
                                    placeholderTextColor="#5B5353"
                                    onChangeText={setName}
                                    value={name}
                                ></TextInput>
                            </View>
                        </View>
                        <View style={[styles.input_label_left,{marginTop:10}]}>
                            <Text style={[styles.label]}>Email</Text>
                            <View style={[styles.input]}>
                                <TextInput
                                    style={styles.input_text}
                                    autoCapitalize="none" 
                                    keyboardType="email-address"
                                    placeholder="Enter email"
                                    placeholderTextColor="#5B5353"
                                    onChangeText={setEmail}
                                    value={email}
                                />
                            </View>
                        </View>
                        <View style={[styles.input_label_left,{marginTop:10}]}>
                            <Text style={[styles.label]}>Subject</Text>
                            <View style={[styles.input]}>
                                <TextInput
                                    style={styles.input_text}
                                    placeholder="Enter subject"
                                    placeholderTextColor="#5B5353"
                                    onChangeText={setSubject}
                                    value={subject}
                                />
                            </View>
                        </View>
                        <View style={[styles.input_label_left,{marginTop:10}]}>
                            <Text style={[styles.label]}>Message</Text>
                            <View style={[styles.input,{height:200}]}>
                                <TextInput
                                    style={[styles.input_text,{textAlignVertical: "top", paddingTop:5}]}
                                    placeholder="Enter message"
                                    placeholderTextColor="#5B5353"
                                    multiline
                                    onChangeText={setMessage}
                                    value={message}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.2, alignSelf: 'center' }}>
                            <GreenButton buttonClick={() => console.log("send")} buttonText="Send" btnColor={GlobalStyles.color.darkGrey} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default ContactUsScreen;


const styles = StyleSheet.create({
    containerInputs: {
        flex: 1,
        paddingHorizontal: "3%",
    },
    containerItem: {
        paddingVertical: "5%",
        paddingHorizontal: "4%",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    containerIconLeft: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    containerText: {
        flex: 2,
    },
    subTitle: {
        fontSize: RFValue(12),
        color: "#000",
        fontFamily: GlobalStyles.font.fontFamilyBold,
    },
    label: {
        fontFamily: GlobalStyles.font.fontFamilyBold,
        color: "#5B5353",
        fontSize: RFValue(13),
        paddingBottom: 3,
        paddingLeft: "8%",
    },
    input_text: {
        height: 40,
        fontSize: RFValue(11),
        paddingRight: 25,
        flex: 1,
        color: "#5B5353",
        fontFamily: GlobalStyles.font.fontFamilyRegular,
    },
    input: {
        height: 45,
        borderRadius: 13,
        borderWidth: 3,
        borderColor: "#F0E5D8",
        marginHorizontal: "6%",
        marginTop: 6,
        paddingLeft: "2%",
    },
    
});
import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image,
    Text,
    ImageBackground,
    StatusBar,
    Platform,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GlobalStyles from '../Style/GlobalStyles';
import ProfileHeaderIcon1 from '../assets/svg/ProfileHeaderIcon1';
import ProfileHeaderIcon2 from '../assets/svg/ProfileHeaderIcon2';
import { TouchableOpacity } from 'react-native-gesture-handler';

const chefProfileHeader = ({ navigation }) => {
    useEffect(() => { }, []);

    return (
        <View
            style={{
                backgroundColor: '#d9d9d9',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingTop: RFValue(40),
                paddingBottom: RFValue(5),
                marginHorizontal: RFValue(1),
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
            }}>
            <View
                style={{ width: '50%', flexDirection: 'row', paddingLeft: RFValue(10) }}>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
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

export default chefProfileHeader;

const styles = StyleSheet.create({});

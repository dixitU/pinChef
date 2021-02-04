import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, FlatList, StatusBar, TouchableOpacity, Platform, Pressable } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { MenuProvider } from 'react-native-popup-menu';
import GlobalStyles from '../../Style/GlobalStyles';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import EmptyChatBox from '../../assets/svg/EmptyChatBox';
import ThreeDot from '../../assets/svg/ThreeDot';
import PinUserIcon from '../../assets/svg/PinUserIcon';
import DeleteChatIcon from '../../assets/svg/DeleteChatIcon';
import ClearMessageIcon from '../../assets/svg/ClearMessageIcon';

export default function chefsChatScreen({ navigation, route }) {
    const [chatUser, setChatUser] = useState([
        {
            image: 'https://images.unsplash.com/photo-1611787524147-c6b02d5e4270?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            name: 'Divyesh Nabhoya',
            message: 'hi i am darshan togadiya.looking  opportunity as react native developer...',
            messageTime: '1:34 PM',
            userPined: false
        },
        {
            image: 'https://images.unsplash.com/photo-1611817757318-778c55d529c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name: 'Divyesh Nabhoya',
            message: 'Wow it is amazing. we are going tommorow manali.',
            messageTime: '1:34 PM',
            userPined: false
        },
        {
            image: 'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name: 'Femin Italiya',
            message: 'hi i am darshan togadiya.how are you?',
            messageTime: '2:00 PM',
            userPined: true
        }
    ]);


    useEffect(() => {

    }, []);


    const ChefChatHeader = () => {
        return (
            <View
            style={Platform.OS == 'android' ? {
                paddingTop: RFValue(50),
                paddingBottom: RFValue(10),
                marginHorizontal: RFValue(1),
                flexDirection: 'row'
              } : {
                paddingBottom: RFValue(10),
                marginHorizontal: RFValue(1),
                flexDirection: 'row'
              }}>
                <Pressable onPress={() => navigation.navigate('Chef_Profile')}>
                    {/* <MaterialIcons name={'arrow-back-ios'} size={25} style={{ marginLeft: RFValue(10), color: '#469a21' }} /> */}
                </Pressable>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.9 }}>
                    <Text style={{ fontSize: RFValue(15), color: '#469a21', fontFamily: GlobalStyles.font.fontFamilyBold }}>MY CHAT</Text>
                </View>
            </View>
        );
    }

    return (
        <>
        <StatusBar backgroundColor="#fff" />
            <SafeAreaView style={{ flex: 1 }}>
            
                <ChefChatHeader />
                {chatUser.length == 0 ?
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.9 }}>
                        <EmptyChatBox />
                        <Text style={{ fontFamily: GlobalStyles.font.fontFamilyRegular, fontSize: RFValue(17), marginTop: RFValue(40) }}>You haven't chatted yet.</Text>
                    </View>
                    :
                    <MenuProvider>
                        <View style={{ flexDirection: 'row', marginBottom: RFValue(5), marginHorizontal: RFValue(30), borderWidth: RFValue(2), borderColor: '#D9D9D9', borderRadius: RFValue(50) }}>
                            <TextInput
                                placeholder="Search"
                                style={{ flex: 1, paddingHorizontal: RFValue(10), paddingVertical: RFValue(10) }}
                            />
                            <Image
                                resizeMode={'cover'}
                                source={require('../../assets/images/Search.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    alignSelf: 'center',
                                    marginHorizontal: RFValue(5)
                                }}
                            />
                        </View>
                        <FlatList
                            data={chatUser}
                            renderItem={({ item, index }) => (
                                <ScrollView style={{}}>
                                    {index != 0 ?
                                        <View style={{ height: 1, backgroundColor: '#D9D9D9' }} /> : null}
                                    <Pressable style={{ marginHorizontal: RFValue(10), marginVertical: RFValue(10), flexDirection: 'row', flex: 1 }} onPress={() => navigation.navigate('Chef_UserChat')}>
                                        <View style={{ justifyContent: 'center' }}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={{ uri: item.image }}
                                                style={{
                                                    height: hp(6),
                                                    width: hp(6),
                                                    borderRadius: hp(5),
                                                    marginHorizontal: RFValue(5)
                                                }}
                                            />
                                        </View >
                                        <View style={{ marginHorizontal: RFValue(5), flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <View>
                                                    <Text style={{ fontFamily: GlobalStyles.font.fontFamilyBold, fontSize: RFValue(12) }}>{item.name}</Text>
                                                </View>
                                                <View style={{ flex: 1, marginTop: RFValue(5) }}>
                                                    <Text style={{ fontSize: RFValue(10), fontFamily: GlobalStyles.font.fontFamilyRegular }}>{item.message}</Text>
                                                </View>
                                            </View>
                                            <View style={{}}>
                                                <View>
                                                    <Menu>
                                                        <MenuTrigger>
                                                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                                                <ThreeDot />
                                                            </View>
                                                            {/* <ThreeDot /> */}
                                                        </MenuTrigger>
                                                        <MenuOptions optionsContainerStyle={ Platform.OS == 'android' ? { borderWidth: 1, borderRadius: 20, borderColor: '#D9D9D9' } : { borderRadius: 20, shadowOffset: { width: 0, height: 2 }, elevation: 0, shadowRadius: 3 }}>
                                                            <MenuOption onSelect={() => alert(`Save`)} >
                                                                <View style={{ flexDirection: 'row', marginHorizontal: RFValue(10), marginVertical: RFValue(10) }}>
                                                                    <PinUserIcon />
                                                                    <Text style={{ fontSize: RFValue(12), fontFamily: GlobalStyles.font.fontFamilyBold, marginHorizontal: RFValue(10) }}>Pin User</Text>
                                                                </View>
                                                            </MenuOption>
                                                            <View style={{ height: 2, backgroundColor: '#D9D9D9' }} />
                                                            <MenuOption onSelect={() => alert(`Save`)} >
                                                                <View style={{ flexDirection: 'row', marginHorizontal: RFValue(10), marginVertical: RFValue(10) }}>
                                                                    <DeleteChatIcon />
                                                                    <Text style={{ fontSize: RFValue(12), fontFamily: GlobalStyles.font.fontFamilyBold, marginHorizontal: RFValue(10) }}>Delete</Text>
                                                                </View>
                                                            </MenuOption>
                                                            <View style={{ height: 2, backgroundColor: '#D9D9D9' }} />
                                                            <MenuOption onSelect={() => alert(`Save`)} >
                                                                <View style={{ flexDirection: 'row', marginHorizontal: RFValue(10), marginVertical: RFValue(10) }}>
                                                                    <ClearMessageIcon />
                                                                    <Text style={{ fontSize: RFValue(12), fontFamily: GlobalStyles.font.fontFamilyBold, marginHorizontal: RFValue(10) }}>Clear message</Text>
                                                                </View>
                                                            </MenuOption>

                                                        </MenuOptions>
                                                    </Menu>
                                                </View>
                                                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1 }}>
                                                    <Text style={{ fontSize: RFValue(10) }}>{item.messageTime}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Pressable>
                                </ScrollView>
                            )}
                        />
                    </MenuProvider>}
            </SafeAreaView>
        </>
    );
};

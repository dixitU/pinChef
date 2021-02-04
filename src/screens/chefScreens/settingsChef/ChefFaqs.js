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
import Accordion from '../../../components/Accordion';
import CustomBorderLineDashed from '../../../components/CustomBorderLineDashed';
//import CustomIcon from '../../../components/CustomIcons';
import GlobalStyles from '../../../Style/GlobalStyles';
import UserChefHeader from '../../../components/userChefHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const FAQS = [
  {
    index: '1',
    id: '1',
    title: 'What is “PINCHEF”?',
    data:
      'On PinChef all Food lovers can search, find, follow and even connect with any Chefs like yourself. Consumers can find you according to their location or any location they want. They can see through all your services, foods and e-masterclasses you offer on our platform “PINCHEF”. You will have many sections to upload things about your life as a Chef and upload all services and food you offer.',
  },
  {
    index: '2',
    id: '1',
    title: 'Is it Free to use PINCHEF?',
    data:
      'It is totally free for consumers but paid for Chefs for a small monthly or yearly fee. For “PINCHEF” to be able to run smoothly and keep adding more interesting and useful features for you. We do offer a 3-month trial as a sign-up gift for newcomers as well as to help to all Chefs during these rough times. ',
  },
  {
    index: '3',
    id: '1',
    title: 'How do I sign up as a Chef?',
    data:
      'All you have to do is Sign up with your Email or Facebook, Gmail or Apple Id and continue with the following profile set up, which will be one short one and a full detailed Chef profile. Please give as more info as possible. Because you do this once, but consumers will have enough info about you to make the right choice.',
  },
  {
    index: '4',
    id: '1',
    title: 'Why is giving most personal info mandatory?',
    data:
      'It is mandatory for Chefs because, you will be offering all your services to customers. So, we need a way of verifying you as a Chef and our team may contact you for verification purposes. Your phone number will not show to customers, you can share it if you want from chat. Your accurate address is always required for verification as well as showing as pickup location. Your accurate email is required for verification as well as contacting means regards your account.',
  },
  {
    index: '5',
    id: '1',
    title:
      'If my personal address is different than the takeaway address for food? ',
    data:
      'We need your takeaway address instead of your personal address if they are different.',
  },
  {
    index: '6',
    id: '1',
    title: 'What if I forget my password?',
    data:
      'You can easily click “Forgot my password” on the “Sign in” page and set a new password.',
  },
  {
    index: '7',
    id: '1',
    title: 'What is on Home?',
    data: `You have can create and see everything you have created it, edit them or delete them. There are four sections. 
Feeds: Here you can post any image or short video with info you would like to share with all food. All will be able to comment and like them. 
Foods: You can create a Food or a Food menu bundle for sale depending on your offers and creativity. You will be able to add an image and needed info about it.  
Services: You can create a Chef Service for sale depending on your creativity. You will be able to add all details needed to make it clear and attractive for customers. 
e-Masterclass: You will be able to create an online masterclass/s or online workshops easily and sell tickets. We don’t have direct streaming from the app at the moment. So, you can have the live streaming anywhere you want from third party apps or websites. But we do suggest using our “PINCHEF” YouTube channel if you are going to do it through YouTube. See details on how to give live on YouTube. We don’t allow canceling masterclasses if there is at least one ticket sold unless there is a respectful acceptable emergency. In this case you would have to cancel the masterclass and give the respectful reason message to the customers that bought tickets with info about the refund.`,
  },
  {
    index: '8',
    id: '1',
    title: 'What is on Chef?',
    data:
      'Here you can see your profile as a customer would see. You can upload personal images of yours that will be visible to all. We recommend adding images to show more about who you are apart from being a Chef. You can see the notifications you have and take action. You can see how many users follow you. You can also access your chats with customers. ',
  },
  {
    index: '9',
    id: '1',
    title: 'What is on Marketplace?',
    data:
      'Here you can see all your placed orders divided by sections with all their details. As well as cancel an order. You can also filter through them.',
  },
  {
    index: '10',
    id: '1',
    title: 'What is Star?',
    data:
      'Here you can see all Ratings and Reviews left for you and even reply to your customers or like their comments.',
  },
  {
    index: '11',
    id: '1',
    title: 'What is in Settings?',
    data:
      'All your personal info and change of profile image with background image can be done though here. All help and info can be found there as well as option to contact us directly. Please allow up to 42 hours to get a response from us. You can always see or change your subscription plan on the Subscription page on here.',
  },
  {
    index: '12',
    id: '1',
    title: 'What type of Subscriptions are there?',
    data:
      'After our tree month trial period is over you will have to choose a plan to continue using our the PINCHEF platform. Starter and VIP will be the options provided. You can look through the differences and details on that page. Subscriptions will be auto renewed depending on whether it is monthly or yearly. It can be canceled or upgraded or downgraded any time.',
  },
  {
    index: '13',
    id: '1',
    title: 'How do Chefs get the payment for their Products & Services?',
    data:
      'We just help connect Chefs and customers that is why we choose not to be in any process of the payments of services or products. All payments will go directly to Chefs. Chefs will have the options of choosing what payments they will offer for customers. Read more details on Payment Methods.',
  },
  {
    index: '14',
    id: '1',
    title: 'Payment Methods.',
    data:
      'To be able to sell any Product or Service as a Chef, you must have a Stripe or PayPal account. If you don’t have an account with them. You need to open at least one and connect your bank info on there. We will not know any bank info. Because you will just sign in your account, which will allow our system to get the payments directly to your bank account. You are responsible for any fees that those 3rd party companies apply. We just help you and the customer payment to be connected. If your country is not applicable to open an account on one of these platforms, there are other ways to overcome this. As opening a TransferWise account and then using that bank info to open an account on Stripe or PayPal. All info is online.',
  },
  {
    index: '15',
    id: '1',
    title: 'What happens if I accidently delete my account?',
    data:
      'Unfortunately, there is no way we can bring your account back after you agree to get your account deleted. All your services including all other stuff done on the app will be deleted. That is why we as you if you are sure you want to delete your account when you click to do so. You will have to create your account and build your profile from zero.',
  },
];

const FaqsScreen = ({navigation}) => {
  const renderAccordions = () => {
    const items = [];
    let item;
    for (item of FAQS) {
      items.push(
        <View key={item.index}>
          <View style={[styles.item]}>
            <Text style={styles.title}>{item.index}</Text>
            <Accordion id={item.id} title={item.title} data={item.data} />
          </View>
          <CustomBorderLineDashed color="#BF908F" size="1" dashGap="2 5" />
        </View>,
      );
    }
    return items;
  };

  return (
    <>
      <StatusBar translucent backgroundColor={'#d9d9d9'} />
      <UserChefHeader
        backHeader={true}
        backHeaderText={'FAQ'}
        settingHeaderIcons={true}
        faqIcon={true}
        settingTextColor={true}
        backButton={() => navigation.goBack()}
      />

      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fFF', paddingTop: 15}}>
          <View style={styles.containerInputs}>{renderAccordions()}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FaqsScreen;

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
    fontSize: RFValue(17),
  },

  borderLine: {
    paddingHorizontal: 15,
  },
  containerInputs: {
    flex: 1,
    paddingHorizontal: '4%',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(23),
    color: '#5B5353',
    fontFamily: GlobalStyles.font.fontFamilyBold,
    alignSelf: 'center',
    width: 50,
    textAlign: 'center',
  },
});

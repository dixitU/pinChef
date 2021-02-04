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
      'On PinChef all Food lovers can search, find, follow and even connect with any Chef close by or at any location about the services, foods and classes they sell and enjoy their lives as Chefs.',
  },
  {
    index: '2',
    id: '1',
    title: 'Is it Free to use “PINCHEF”?',
    data:
      'It is totally free and easy to use PINCHEF to find and follow Chefs. All you have to do is Sign up with your email or Facebook, Gmail, Apple Id.',
  },
  {
    index: '3',
    id: '1',
    title: 'What if I forget my password?',
    data:
      'You can easily click “Forgot my password” on the “Sign in” page and set a new password.',
  },
  {
    index: '4',
    id: '1',
    title: 'Where do I get access to the masterclass I purchased?',
    data:
      'After you purchase an online masterclass ticket. You will be able to see the link to it in your starred screen under masterclasses. You will get a link to it asap depending on where the chef will be livestreaming. If you have any questions you can always ask from the Chef directly.',
  },
  {
    index: '5',
    id: '1',
    title:
      'What do I do if I like a food/service/masterclass for sale, but I have questions to be confident before I make the purchase?',
    data:
      'You can always look through the comments and reviews of the chef. Ask other that have commented by replying to them or ask the chef directly.',
  },
  {
    index: '6',
    id: '1',
    title: 'What if I have a question that is not on here about the app?',
    data:
      'We have a “Contact us” screen in Settings/Help/Contacts Us. Here you can directly write to us about any question.',
  },
  {
    index: '7',
    id: '1',
    title: 'Where can I get help regards my purchase?',
    data:
      '“PINCHEF” is a place for food lovers to get connected. It is not in charge of any transaction made on it. We recommend you verify any questions or concerns you have directly from the Chef before you make your purchase. As the Chef is the only one who can help you. “PINCHEF” is not responsible for the deal made between you and the Chef.',
  },
  {
    index: '8',
    id: '1',
    title: 'What is Rate and Review the Chef.',
    data:
      'If you have had any experience with the Chef, please make sure to leave honest ratings and review for the chef to help make a choice easier for other food lovers like you. Rating the Chef without having any experience with the Chef is forbidden. Will be considered as a false Rate&Review. You may be suspended from the app and the Rate&Review will be deleted.',
  },
  {
    index: '9',
    id: '1',
    title: 'What If I am not happy with the purchase and want to get a refund?',
    data:
      '“PINCHEF” is a place for food lovers to get connected. It is not in charge of any transaction made on it. This is why we cannot help with resolving any of your concerns. You need to always directly contact the Chef. As the Chef is the only one who can help you. PINCHEF is not responsible for the deal made between you and the Chef in anyway or matter. Don’t forgot you can always write an honest review.',
  },
  {
    index: '10',
    id: '1',
    title:
      'What If I have a ticket for a e-Masterclass and I want to get a refund?',
    data:
      'Originally you cannot get a refund for a masterclass. But it is totally up to the Chef. If you believe you have a very reasonable excuse always try talking to the Chef and explaining. Maybe the Chef will be able to help you out.',
  },
  {
    index: '11',
    id: '1',
    title: 'What if an e-Masterclass that I have a ticket for is canceled?',
    data:
      'Usually an e-Masterclass can never be canceled. Unless the Chef will have an emergency and a very respectful excuse. In this case you will be notified about it, and the Chef will give you a refund. Please allow him time for the refund process as the system usually takes minim 2-10 business days, however it can take up to 30 days depending upon the payment methods and banks.',
  },
  {
    index: '12',
    id: '1',
    title: 'What If I accidently deleted my account?',
    data:
      'Unfortunately, there is no way we can bring your account back after you agree to get your account deleted. That is why we as you if you are sure you want to delete your account when you click to do so.',
  },
  {
    index: '13',
    id: '1',
    title: 'Answering When Users writ to you?',
    data:
      'If so happens, please try to contact the chef once more through chat or commenting on the post to make sure there wasn’t a mistake, and the chef received your message. We encourage all Chefs to respond to you asap. Thank you for your patience.',
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
        settingHeaderIcons = {true}
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

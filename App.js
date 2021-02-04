import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Image, Platform, Keyboard} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//auth screen
import SplashScreen from './src/screens/authScreens/SplashScreen';
import UserSelect from './src/screens/authScreens/UserSelect';
import LoginScreen from './src/screens/authScreens/Login';
import RegisterScreen from './src/screens/authScreens/Register';
import SigninSelect from './src/screens/authScreens/SigninSelect';
import VerifyScreen from './src/screens/authScreens/Verify';
import ForgotPassword1 from './src/screens/authScreens/ForgotPassword1';
import ForgotPassword2 from './src/screens/authScreens/ForgotPassword2';
import Profile from './src/screens/authScreens/Profile';
import Onboarding from './src/screens/authScreens/Onboarding';

//tabbar icons
import Home from './src/assets/svg/AddToCart';

//chef homeScreen
import chefHome from './src/screens/chefScreens/chefHome';
import chefsProfile from './src/screens/chefScreens/chefsProfile';
import chefsChat from './src/screens/chefScreens/chefsChat';
import chefsUserChat from './src/screens/chefScreens/chefsUserChat';
import chefReceivedOrder from './src/screens/chefScreens/chefReceivedOrder';
import chefOrderDetail from './src/screens/chefScreens/chefOrderDetail';
import chefReplyPage from './src/screens/chefScreens/chefReplyPage';
// import chefSetting from './src/screens/chefScreens/chefSetting';
import chefCreatePost from './src/screens/chefScreens/chefCreatePost';

//user homeScreen
import userHome from './src/screens/userScreens/userHome';
import feedComment from './src/screens/userScreens/nestedUserScreens/feedComment';
import singleReceipes from './src/screens/userScreens/nestedUserScreens/singleReceipes';
import exploreChef from './src/screens/userScreens/exploreChef';
import userCart from './src/screens/userScreens/userCart';
import checkoutPage from './src/screens/userScreens/nestedUserScreens/checkoutPage';
import userStarPage from './src/screens/userScreens/userStarPage';
import purchaseDetails from './src/screens/userScreens/nestedUserScreens/purchaseDetails';
// import userSetting from './src/screens/userScreens/userSetting';
import {RFValue} from 'react-native-responsive-fontsize';

// User settings
import UserSetting from './src/screens/userScreens/settingsUser/userSetting';
import UserSettingProfile from './src/screens/userScreens/settingsUser/UserProfile';
import UserSettingNotifications from './src/screens/userScreens/settingsUser/UserNotifications';
import UserSettingHelp from './src/screens/userScreens/settingsUser/UserHelp';
import UserSettingFaqs from './src/screens/userScreens/settingsUser/UserFaqs';

// Chef settings
import chefSetting from './src/screens/chefScreens/settingsChef/chefSetting';
import chefSettingNotifications from './src/screens/chefScreens/settingsChef/ChefNotifications';
import chefSettingHelp from './src/screens/chefScreens/settingsChef/ChefHelp';
import chefSettingFaqs from './src/screens/chefScreens/settingsChef/ChefFaqs';
import chefSettingTermsPolicy from './src/screens/chefScreens/settingsChef/ChefTermsPolicy';
import chefSettingTermsAbout from './src/screens/chefScreens/settingsChef/ChefAbout';
import chefSettingTermsContactus from './src/screens/chefScreens/settingsChef/ChefContactUs';
import chefSettingTermsProfile from './src/screens/chefScreens/settingsChef/ChefProfile';
import chefSettingPaymentMethods from './src/screens/chefScreens/settingsChef/ChefPaymentMethods';
import chefSettingSubscriptions from './src/screens/chefScreens/settingsChef/ChefSubscriptions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ChefStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chef_Home">
      <Stack.Screen
        name="Chef_Home"
        component={chefHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chef_Post"
        component={chefCreatePost}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ChefProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chef_Profile">
      <Stack.Screen
        name="Chef_Profile"
        component={chefsProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chef_Chat"
        component={chefsChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chef_UserChat"
        component={chefsUserChat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ChefReceivedOrder = () => {
  return (
    <Stack.Navigator initialRouteName="Chef_Received_Order">
      <Stack.Screen
        name="Chef_Received_Order"
        component={chefReceivedOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chef_Order_Detail"
        component={chefOrderDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ChefSettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chef_Settings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chef_Settings" component={chefSetting} />
      <Stack.Screen name="Chef_Settings_Notifications" component={chefSettingNotifications} />
      <Stack.Screen name="Chef_Settings_Help" component={chefSettingHelp} />
      <Stack.Screen name="Chef_Settings_Faqs" component={chefSettingFaqs} />
      <Stack.Screen name="Chef_Settings_TermsPolicy" component={chefSettingTermsPolicy} />
      <Stack.Screen name="Chef_Settings_About" component={chefSettingTermsAbout} />
      <Stack.Screen name="Chef_Settings_ContactUs" component={chefSettingTermsContactus} />
      <Stack.Screen name="Chef_Settings_Profile" component={chefSettingTermsProfile} />
      <Stack.Screen name="Chef_Settings_PaymentMethods" component={chefSettingPaymentMethods} />
      <Stack.Screen name="Chef_Settings_Subscriptions" component={chefSettingSubscriptions} />
    </Stack.Navigator>
  );
};


const ChefMain = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      setKeyboardVisible(false),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      setKeyboardVisible(true),
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="ChefMain"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: keyboardVisible ? {backgroundColor: '#464040',} : {
          backgroundColor: '#464040',
          paddingTop: RFValue(10), 
          paddingBottom: RFValue(10),
        },
        keyboardHidesTabBar: Platform.OS == 'android' ? true : false,
      }}>
      <Tab.Screen
        name="ChefMain"
        component={ChefStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/images/tab/homeTabIconSelected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="ChefProfile"
        component={ChefProfileStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/images/tab/chefTabIconSelected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="ChefReceivedOrder"
        component={ChefReceivedOrder}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/images/tab/cartTabIconSelected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="ChefReplyPage"
        component={chefReplyPage}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/images/tab/starTabIconSelected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="ChefSetting"
        component={ChefSettingsStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/images/tab/settingsTabIconSelected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const userHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="User_Home">
      <Stack.Screen
        name="User_Home"
        component={userHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Feed_Comment"
        component={feedComment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Single_Receipes"
        component={singleReceipes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const userStarPageStack = () => {
  return (
    <Stack.Navigator initialRouteName="UserStar">
      <Stack.Screen
        name="UserStar"
        component={userStarPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Purchase_Details"
        component={purchaseDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const userCartStack = () => {
  return (
    <Stack.Navigator initialRouteName="UserCart">
      <Stack.Screen
        name="UserCart"
        component={userCart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout_Page"
        component={checkoutPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const UserSettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chef_Settings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="User_Settings" component={UserSetting} />
      <Stack.Screen name="User_Settings_Profile" component={UserSettingProfile} />
      <Stack.Screen name="User_Settings_Notifications" component={UserSettingNotifications} />
      <Stack.Screen name="User_Settings_Help" component={UserSettingHelp} />
      <Stack.Screen name="User_Settings_Faqs" component={UserSettingFaqs} />
      <Stack.Screen name="User_Settings_TermsPolicy" component={chefSettingTermsPolicy} />
      <Stack.Screen name="User_Settings_About" component={chefSettingTermsAbout} />
      <Stack.Screen name="User_Settings_ContactUs" component={chefSettingTermsContactus} />
    </Stack.Navigator>
  );
};

const UserMain = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      setKeyboardVisible(false),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      setKeyboardVisible(true),
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="UserMain"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: keyboardVisible
          ? {backgroundColor: '#464040'}
          : {
              backgroundColor: '#464040',
              paddingTop: RFValue(10),
              paddingBottom: RFValue(10),
            },
        keyboardHidesTabBar: Platform.OS == 'android' ? true : false,
      }}>
      <Tab.Screen
        name="UserMain"
        component={userHomeStack}
        options={({route}) => ({
          //tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/png_icons/Home_selected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        })}
      />
      <Tab.Screen
        name="ExploreChef"
        component={exploreChef}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/png_icons/chef_selected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="UserCartStack"
        component={userCartStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/png_icons/Shop_selected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="UserStarPage"
        component={userStarPageStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/png_icons/Star_selected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="UserSetting"
        component={UserSettingsStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              resizeMode={'cover'}
              source={require('./src/assets/png_icons/settings_selected.png')}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                tintColor: focused ? '#469a21' : '#ffd54f',
              }}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="UserSelect">
      <Stack.Screen
        name="UserSelect"
        component={UserSelect}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SigninScreen"
        component={SigninSelect}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyScreen"
        component={VerifyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword1"
        component={ForgotPassword1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword2"
        component={ForgotPassword2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Main pages after login */}
        <Stack.Screen
          name="ChefMain"
          component={ChefMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserMain"
          component={UserMain}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

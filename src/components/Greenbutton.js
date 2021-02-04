import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from "../Style/GlobalStyles";

const GreenButton = (props) => {
  return (
    <View style={{alignItems: 'center', marginVertical: RFValue(20)}}>
      <Pressable
        style={{
            backgroundColor: props.btnColor,
            borderRadius: 30,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2.22,
      
            elevation: 3,
        }}
        onPress = {props.buttonClick}
        >
        <Text
          style={{
            color: "#fff",
            fontFamily: GlobalStyles.font.fontFamilyBold,
            fontSize: RFValue(19),
            paddingVertical: RFValue(7),
            paddingHorizontal: RFValue(40),
            textAlign: "center",
          }}>
          {props.buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default GreenButton;


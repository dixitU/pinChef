import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const redButton = (props) => {
  return (
    <View style={{alignItems: 'center', marginVertical: RFValue(20)}}>
      <Pressable
        style={{
          backgroundColor: '#bf2612',
          borderRadius: RFValue(30),
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        }}
        onPress = {props.buttonClick}
        >
        <Text
          style={{
            paddingVertical: RFValue(15),
            paddingHorizontal: RFValue(30),
            fontSize: RFValue(20),
            fontWeight: 'bold',
            color: 'white',
          }}>
          {props.buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default redButton;

import React, {useEffect, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import WrongPwd from '../assets/svg/WrongPwd';
import GlobalStyles from '../Style/GlobalStyles';

const PWIncorrectModal = (props, navigation) => {
  useEffect(() => {
    //console.log(!props.piModalVisible)
  }, []);

  function photomodalclose() {
    props.photomodalclose();
  }

  function emptyModalclose() {
    if(props.name == 'emptyModal'){
      props.emptyModalclose();
    }else {
      props.woModalclose();
    }
  }

  function passwordMatchclose() {
    props.passwordMatchclose();
  }

  return (
    <>
      {props.verificationModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.authModalVisible}>
          <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
              <WrongPwd />
              <Text style={stylesModal.textModal}>{props.modalText}</Text>
              <TouchableOpacity
                onPress={emptyModalclose}
                style={stylesModal.btnContinue}>
                <Text style={stylesModal.textBtnContinue}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {props.passwordMatchModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.authModalVisible}
          >
          <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
              {/* <WrongPwd /> */}
              <Text style={stylesModal.textModal}>{props.modalText}</Text>
              <TouchableOpacity
                onPress={passwordMatchclose}
                style={stylesModal.btnContinue}>
                <Text style={stylesModal.textBtnContinue}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {props.photoVerificationModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.authModalVisible}>
          <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
              {/* <WrongPwd /> */}
              <Text style={stylesModal.textModal}>{props.modalText}</Text>
              <TouchableOpacity
                onPress={photomodalclose}
                style={stylesModal.btnContinue}>
                <Text style={stylesModal.textBtnContinue}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default PWIncorrectModal;

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: 20,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 53,
    width: '100%',
    padding: 40,
    paddingBottom: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textModal: {
    fontFamily: GlobalStyles.font.fontFamilyBold,
    fontSize: RFValue(14),
    textAlign: 'justify',
    fontWeight: Platform.OS === 'android' ? 'bold' : '100',
    textAlign: 'center',
    marginTop: 28,
  },
  textBtnContinue: {
    color: '#fff',
    fontSize: RFValue(14),
    fontWeight: Platform.OS === 'android' ? 'bold' : '100',
    fontFamily: GlobalStyles.font.fontFamilyBold,
    //fontSize: '1rem',
  },
  btnContinue: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.color.green,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

// {props.verificationModal && (
//   <Modal
//     animationType="slide"
//     transparent={true}
//     visible={isModalVisible}
//     >
//     <View style={stylesModal.centeredView}>
//       <View style={stylesModal.modalView}>
//         <WrongPwd />
//         <Text style={stylesModal.textModal}>{props.modalText}</Text>
//         <TouchableOpacity
//           onPress={() => setIsModalVisible(false)}
//           style={stylesModal.btnContinue}>
//           <Text style={stylesModal.textBtnContinue}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </Modal>
// )}

// {props.passwordMatchModal && (
//   <Modal
//     animationType="slide"
//     transparent={true}
//     visible={isModalVisible}
//     onRequestClose={() => {
//       isModalVisible;
//     }}>
//     <View style={stylesModal.centeredView}>
//       <View style={stylesModal.modalView}>
//         {/* <WrongPwd /> */}
//         <Text style={stylesModal.textModal}>{props.modalText}</Text>
//         <TouchableOpacity
//           onPress={() => setIsModalVisible(!isModalVisible)}
//           style={stylesModal.btnContinue}>
//           <Text style={stylesModal.textBtnContinue}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </Modal>
// )}

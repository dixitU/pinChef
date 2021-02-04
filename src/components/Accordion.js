import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import CustomIcon from './CustomIcons';
import GlobalStyles from '../Style/GlobalStyles';

import GreenArrow from '../assets/svg/GreenArrow';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render() {
    return (
      <View style={{width: '100%'}}>
        <TouchableOpacity
          ref={this.accordion}
          style={styles.rowFaqs}
          onPress={() => this.toggleExpand()}>
          <Text style={[styles.title]}>{this.props.title}</Text>
          {this.state.expanded ? (
            <View style={{transform: [{rotate: '90deg'}]}}>
              <GreenArrow />
            </View>
          ) : (
            <View style={{transform: [{rotate: '90deg'}]}}>
              <GreenArrow />
            </View>
          )}

          {/* <CustomIcon name={ 'upArrow' : 'downarrow'} size={RFValue(8)} color="#469A09" style={{ marginTop: 3 }}/> */}
        </TouchableOpacity>

        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <Text style={styles.subInfo}>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowFaqs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 3,
    alignItems: 'center',
    width: '85%',
    paddingVertical: 5,
    height: hp('9%'),
  },
  title: {
    fontSize: RFValue(13),
    fontFamily: GlobalStyles.font.fontFamilyBold,
    paddingLeft: '2%',
    width: '90%',
  },
  parentHr: {
    height: 1,
    color: 'white',
    width: '100%',
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '82%',
    marginBottom: 20,
  },
  subInfo: {
    color: '#707070',
    fontSize: RFValue(13),
  },
});

import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import * as styleConfig from '../style';

export default class Key extends React.Component {
  handlePress = (value) => {
    if (this.props.onPress) {
      this.props.onPress(value);
    }
  }

  render() {
    const { title, style, value } = this.props;

    return (<View style={style}>
      <TouchableHighlight
        onPress={() => this.handlePress(value)}
        underlayColor={styleConfig.COLOR_BASE_FOCUS}
        style={styles.key}>
        <Text style={styles.keyText}>{title ? title : value}</Text>
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  key: {
    alignItems: 'center',
    backgroundColor: styleConfig.COLOR_BASE_SOFT,
    borderRadius: styleConfig.BORDER_RADIUS,
    display: 'flex',
    justifyContent: 'center',
    aspectRatio: 1.05,
  },
  keyText: {
    fontSize: moderateScale(20),
    fontFamily: styleConfig.FONT_FAMILY_BOLD,
  },
});

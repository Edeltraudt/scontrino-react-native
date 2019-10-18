import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors, style, font } from '../style';

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
        underlayColor={colors.baseFocus}
        style={styles.key}>
        <Text style={styles.keyText}>{title ? title : value}</Text>
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  key: {
    alignItems: 'center',
    backgroundColor: colors.baseSoft,
    borderRadius: style.borderRadius,
    display: 'flex',
    justifyContent: 'center',
    aspectRatio: 1.05,
  },
  keyText: {
    fontSize: moderateScale(20),
    fontFamily: font.family.bold,
  },
});

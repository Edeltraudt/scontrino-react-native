import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import * as styleConfig from '../style';

export default class ExpenseInput extends React.Component {
  render() {
    const { value, colorText } = this.props;

    return (
      <View style={[
          styles.container,
          (this.props.small ? styles.container_small : {})
        ]}
        color={colorText}>
      <View style={styles.expense}>
        <Text style={[styles.currency, { color: colorText }]}>
          €
        </Text>
        <TextInput style={styles.input}
          color={colorText}
          editable={false}
          value={value} />
      </View>
    </View>
);
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    aspectRatio: 2.8,
    justifyContent: 'center',
    paddingBottom: styleConfig.FONT_SIZE_BASE,
  },
  container_small: {
    aspectRatio: 4.2,
  },
  expense: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    fontSize: styleConfig.FONT_SIZE_EXPENSE,
    fontFamily: styleConfig.FONT_FAMILY_BOLD,
  },
  currency: {
    fontSize: styleConfig.FONT_SIZE_EXPENSE,
    fontFamily: styleConfig.FONT_FAMILY,
    opacity: styleConfig.OPACITY_SOFT,
  },
});

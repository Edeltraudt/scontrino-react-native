import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { font, style } from '../style';
import { moderateScale } from 'react-native-size-matters';

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
    aspectRatio: moderateScale(3.75, -0.25), // 2.8
    justifyContent: 'center',
    paddingBottom: font.size.base,
  },
  container_small: {
    aspectRatio: moderateScale(5, -0.25), // 4.2
  },
  expense: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    fontSize: font.size.expense,
    fontFamily: font.family.bold,
  },
  currency: {
    fontSize: font.size.expense,
    fontFamily: font.family.base,
    opacity: style.opacitySoft,
  },
});

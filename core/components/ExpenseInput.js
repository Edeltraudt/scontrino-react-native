import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { FONT_FAMILY_BOLD, FONT_FAMILY } from '../style';

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

const fontSize = moderateScale(48, 0.75);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 64,
    paddingTop: 24,
  },
  container_small: {
    paddingTop: 0,
    paddingBottom: 24,
  },
  expense: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    fontSize,
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: '600',
  },
  currency: {
    fontSize,
    fontFamily: FONT_FAMILY,
    opacity: 0.5,
  },
});

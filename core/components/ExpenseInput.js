import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { font, style, spacing, colors } from '../style';
import { moderateScale } from 'react-native-size-matters';
import CategoryIcon from './CategoryIcon';

export default class ExpenseInput extends React.Component {
  render() {
    const { value, small, category } = this.props;

    return (
      <View style={styles.container}>
        {!small &&
          <Text style={styles.label} numberOfLines={2}>
            How much did you spend?
          </Text>}

        <View style={styles.expense}>
          <Text style={[styles.text, styles.currency]}>
            €
          </Text>
          <TextInput style={[styles.text, styles.input]}
            editable={false}
            value={value} />

          {category && <CategoryIcon code={category} fixed />}
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingBottom: moderateScale(20, 2),
    paddingHorizontal: spacing.container,
  },
  label: {
    color: colors.invText,
    fontSize: font.size.expense * 0.35,
    fontFamily: font.family.bold,
    marginBottom: font.size.expense * 0.35 * 0.25,
    maxWidth: moderateScale(150, 0.5),
  },
  expense: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: colors.invText,
    fontSize: font.size.expense,
  },
  input: {
    fontFamily: font.family.bold,
  },
  currency: {
    color: colors.invText,
    fontFamily: font.family.base,
    opacity: style.opacitySoft,
  },
});

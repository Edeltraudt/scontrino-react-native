import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import CategoryIcon from './CategoryIcon';
import { colors, style, spacing, font } from '../style';

export default class CategoryItem extends React.Component {
  handlePress = (key, color, colorText) => {
    if (this.props.onPress) {
      this.props.onPress(key, color, colorText);
    }
  }

  render() {
    const {
      style,
      code,
      title,
      label,
      help,
      color,
      colorText,
      fullWidth,
      fixed
    } = this.props;

    return (<View style={[styles.categoryWrap,  style]}>
      <TouchableHighlight style={[
            styles.category,
            (fullWidth ? styles.category_full : {}),
            (fixed ? styles.category_fixed : {}),
          ]}
          underlayColor={colors.baseFocus}
          onPress={() => this.handlePress(code, color, colorText)}
          disabled={fixed}>
        <>
          <CategoryIcon code={code} fullWidth={fullWidth} fixed={fixed} />
          <View>
            <Text style={[
              styles.categoryTitle,
              (fixed ? styles.categoryTitle_fixed : {})
            ]}>{title}</Text>
            <Text numberOfLines={2} style={[
              styles.categoryLabel,
              (fixed ? styles.categoryLabel_fixed : {})
            ]}>{label}</Text>
            <Text numberOfLines={2} style={[
              styles.categoryHelp,
              (fixed ? styles.categoryHelp_fixed : {})
            ]}>{help}</Text>
          </View>
        </>
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: colors.base,
    borderRadius: style.borderRadius,
    padding: spacing.base,
    paddingBottom: spacing.base * 1.5,
  },
  category_full: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: spacing.small,
    paddingVertical: spacing.medium,
  },
  category_fixed: {
    paddingVertical: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },

  categoryTitle: {
    color: colors.text,
    fontFamily: font.family.bold,
    fontSize: font.size.base,
    marginBottom: 2,
  },
  categoryTitle_fixed: {
    fontSize: font.size.base * 1.1,
  },

  categoryLabel: {
    color: colors.text,
    fontSize: font.size.small,
    marginBottom: font.size.base * 0.5,
  },
  categoryLabel_fixed: {
    fontSize: font.size.small * 1.125,
  },

  categoryHelp: {
    color: colors.textSoft,
    fontSize: font.size.xxsmall,
    marginTop: 'auto',
  },
  categoryHelp_fixed: {
    fontSize: font.size.xsmall,
  },
});

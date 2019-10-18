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
            <Text numberOfLines={1} style={[
              styles.categoryLabel,
              (fixed ? styles.categoryLabel_fixed : {})
            ]}>{label}</Text>
            <Text numberOfLines={1} style={[
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
    paddingLeft: spacing.base,
    paddingRight: spacing.small,
    paddingVertical: spacing.base,
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
  },
  categoryTitle_fixed: {
    fontSize: font.size.base * 1.1,
  },

  categoryLabel: {
    color: colors.text,
    fontSize: font.size.small,
  },
  categoryLabel_fixed: {
    fontSize: font.size.small * 1.125,
  },

  categoryHelp: {
    color: colors.text_soft,
    fontSize: font.size.xxsmall,
    marginTop: font.size.xxsmall * 0.75,
  },
  categoryHelp_fixed: {
    fontSize: font.size.xsmall,
  },
});

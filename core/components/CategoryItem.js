import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import CategoryIcon from './CategoryIcon';
import * as styleConfig from '../style';

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
          underlayColor={styleConfig.COLOR_BASE_FOCUS}
          onPress={() => this.handlePress(code, color, colorText)}
          disabled={fixed}>
        <>
          <CategoryIcon code={code} fullWidth={fullWidth} fixed={fixed} />
          <View>
            <Text style={[
              styles.categoryTitle,
              (fixed ? styles.categoryTitle_fixed : {})
            ]}>{title}</Text>
            <Text style={[
              styles.categoryLabel,
              (fixed ? styles.categoryLabel_fixed : {})
            ]}>{label}</Text>
            <Text style={[
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
    backgroundColor: styleConfig.COLOR_BASE,
    borderRadius: styleConfig.BORDER_RADIUS,
    paddingLeft: styleConfig.SPACING_BASE,
    paddingRight: styleConfig.SPACING_SMALL,
    paddingVertical: styleConfig.SPACING_BASE,
  },
  category_full: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: styleConfig.SPACING_SMALL,
    paddingVertical: styleConfig.SPACING_LARGE,
  },
  category_fixed: {
    paddingVertical: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },

  categoryTitle: {
    color: styleConfig.COLOR_TEXT,
    fontFamily: styleConfig.FONT_FAMILY_BOLD,
    fontSize: styleConfig.FONT_SIZE_BASE,
  },
  categoryTitle_fixed: {
    fontSize: styleConfig.FONT_SIZE_BASE * 1.1,
  },

  categoryLabel: {
    color: styleConfig.COLOR_TEXT,
    fontSize: styleConfig.FONT_SIZE_SMALL,
  },
  categoryLabel_fixed: {
    fontSize: styleConfig.FONT_SIZE_SMALL * 1.125,
  },

  categoryHelp: {
    color: styleConfig.COLOR_TEXT_SOFT,
    fontSize: styleConfig.FONT_SIZE_XXSMALL,
    marginTop: styleConfig.FONT_SIZE_XXSMALL * 0.75,
  },
  categoryHelp_fixed: {
    fontSize: styleConfig.FONT_SIZE_XSMALL,
  },
});

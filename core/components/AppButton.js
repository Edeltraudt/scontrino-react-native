import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import * as styleConfig from '../style';

export const AppButtonType = Object.freeze({
  default: 0,
  soft: 1,
});

export default class AppButton extends React.Component {
  handlePress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    const { title, style, type } = this.props;

    return (<View style={style}>
      <TouchableHighlight style={[
            styles.button,
            type === AppButtonType.soft ? styles.button_soft : {},
          ]}
          onPress={this.handlePress}
          underlayColor={type === AppButtonType.soft
            ? styleConfig.COLOR_BASE_FOCUS
            : styleConfig.COLOR_INV_BASE_FOCUS}>
        <Text style={[
            styles.text,
            type === AppButtonType.soft ? styles.text_soft : {},
          ]}>{title}</Text>
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: styleConfig.COLOR_INV_BASE,
    borderRadius: styleConfig.BORDER_RADIUS_S,
    paddingTop: styleConfig.FONT_SIZE_BASE * 0.875,
    paddingBottom: styleConfig.FONT_SIZE_BASE * 0.9,
  },
  text: {
    color: styleConfig.COLOR_INV_TEXT,
    fontFamily: styleConfig.FONT_FAMILY_BOLD,
    fontSize: styleConfig.FONT_SIZE_BASE,
    textAlign: 'center'
  },

  button_soft: {
    backgroundColor: styleConfig.COLOR_BASE,
  },
  text_soft: {
    color: styleConfig.COLOR_TEXT_SOFT,
  },
});

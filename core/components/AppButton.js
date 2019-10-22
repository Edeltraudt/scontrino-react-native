import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { colors, style, font, spacing } from '../style';

export const AppButtonType = Object.freeze({
  default: '',
  soft: 'soft',
  primary: 'primary',
});

export default class AppButton extends React.Component {
  handlePress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    const { title, style, type, disabled } = this.props;

    return (<View style={style}>
      <TouchableHighlight style={[
            styles.button,
            type ? styles['button_' + type] : {},
            disabled ? styles.disabled : {},
          ]}
          disabled={disabled}
          onPress={this.handlePress}
          underlayColor={type ? underlayColors[type] : colors.invBaseFocus}>
        {this.props.children
          ? this.props.children
          : <Text style={[
            styles.text,
            type ? styles['text_' + type] : {},
          ]}>{title}</Text>}
      </TouchableHighlight>
    </View>);
  }
}

const underlayColors = {
  'soft': colors.baseFocus,
  'primary': colors.primaryFocus,
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.invBase,
    borderRadius: style.borderRadiusS,
    paddingTop: font.size.base * 0.9,
    paddingBottom: font.size.base * 0.95,
    paddingHorizontal: spacing.large,
  },
  text: {
    color: colors.invText,
    fontFamily: font.family.bold,
    fontSize: font.size.base,
    textAlign: 'center'
  },

  disabled: {
    opacity: style.opacitySoft,
  },

  button_soft: {
    backgroundColor: colors.base,
  },
  text_soft: {
    color: colors.textSoft,
  },

  button_primary: {
    backgroundColor: colors.primary,
  },
  text_primary: {
    color: colors.invText,
  },
});

export const ButtonStyles = styles;

import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { colors, style, font, spacing } from '../style';

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
            ? colors.baseFocus
            : colors.invBaseFocus}>
        {this.props.children
          ? this.props.children
          : <Text style={[
            styles.text,
            type === AppButtonType.soft ? styles.text_soft : {},
          ]}>{title}</Text>}
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.invBase,
    borderRadius: style.borderRadiusS,
    paddingTop: font.size.base * 0.8,
    paddingBottom: font.size.base * 0.85,
    paddingHorizontal: spacing.large,
  },
  text: {
    color: colors.invText,
    fontFamily: font.family.bold,
    fontSize: font.size.base,
    textAlign: 'center'
  },

  button_soft: {
    backgroundColor: colors.base,
  },
  text_soft: {
    color: colors.textSoft,
  },
});

export const ButtonStyles = styles;

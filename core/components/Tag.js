import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as styleConfig from '../style';

export default class Tag extends React.Component {
  handlePress = (title) => {
    if (this.props.onPress) {
      this.props.onPress(title);
    }
  }

  render() {
    const { title, style, colorLabel, colorLabelText } = this.props;
    return (<View style={style}>
      <TouchableOpacity style={[styles.tag, {backgroundColor: colorLabel}]}
        onPress={() => this.handlePress(title)}
        activeOpacity={0.5}>
        <Text style={[styles.text, {color: colorLabelText}]}>{title}</Text>
      </TouchableOpacity>
    </View>);
  }
}

const fontSize = styleConfig.FONT_SIZE_SMALL;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#22222222',
    borderRadius: styleConfig.BORDER_RADIUS_S * 0.75,
    marginBottom: fontSize * 0.375,
    marginRight: fontSize * 0.375,
    paddingHorizontal: fontSize * 1.125,
    paddingTop: fontSize * 0.75,
    paddingBottom: fontSize * 0.6875,
  },
  text: {
    color: '#222222AA',
    fontSize,
    lineHeight: fontSize,
    textAlign: 'center'
  },
});

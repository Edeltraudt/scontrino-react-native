import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#22222222',
    borderRadius: 8,
    marginBottom: 6,
    marginRight: 6,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 11,
  },
  text: {
    color: '#222222AA',
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center'
  },
});

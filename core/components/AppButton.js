import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

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
            type === 'soft' ? styles.button_soft : {},
          ]}
          onPress={this.handlePress}
          underlayColor={type === 'soft' ? '#F0F0F0' : '#000'}>
        <Text style={[
            styles.text,
            type === 'soft' ? styles.text_soft : {},
          ]}>{title}</Text>
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#222222',
    borderRadius: 12,
    paddingTop: 16,
    paddingBottom: 18,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },

  button_soft: {
    backgroundColor: '#FFF',
  },
  text_soft: {
    color: '#7E8291',
  },
});

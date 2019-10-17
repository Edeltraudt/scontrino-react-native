import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import TagList from './TagList';
import AppButton from './AppButton';

export default class LabelInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ''
    };
  }

  handleTagSelect = (tag) => {
    this.setState({label: tag})

    if (this.props.onChange) {
      this.props.onChange(tag);
    }
  }

  handleInput = (value) => {
    this.setState({label: value});
  }

  handleButtonPress = () => {
    if (this.props.onNext) {
      this.props.onNext();
    }
  }

  render() {
    const { fixed, style } = this.props;

    return <>
      <View style={style}>
        <TextInput style={[styles.input, (fixed ? styles.input_fixed : {})]}
          placeholder={!fixed ? 'What is this expense for?' : ''}
          placeholderTextColor='#abadb6'
          editable={!fixed}
          onChangeText={this.handleInput}
          value={!fixed ? this.state.label : this.props.value} />
      </View>

      {!fixed && <>
        <TagList onChange={this.handleTagSelect}
          colorLabel={this.props.colorLabel}
          colorLabelText={this.props.colorLabelText} />

        <AppButton title={(this.state.label.trim().length > 0
          ? 'Continue' : 'Skip')}
          style={styles.button}
          onPress={this.handleButtonPress} />
      </>}
    </>;
  }
}

const styles = StyleSheet.create({
  input: {
    color: '#303B67',
    fontSize: 28,
    fontWeight: '600',
    marginTop: -16,
    marginBottom: 16,
    paddingVertical: 10,
  },
  input_fixed: {
    borderTopColor: '#CCC',
    borderTopWidth: StyleSheet.hairlineWidth,
    marginBottom: 4,
    marginTop: 15,
    paddingTop: 18,
  },

  button: {
    marginTop: 'auto',
  },
});

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import TagList from './TagList';
import AppButton from './AppButton';
import { colors, font, spacing } from '../style';

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
    this.setState({ label: value });

    if (this.props.onChange) {
      this.props.onChange(value);
    }
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
        <TextInput style={[styles.input, fixed ? styles.input_fixed : {}]}
          placeholder={!fixed ? 'What is this expense for?' : ''}
          placeholderTextColor={colors.placeholder}
          editable={!fixed}
          autoFocus={true}
          onChangeText={this.handleInput}
          value={!fixed ? this.state.label : this.props.value} />
      </View>

      {!fixed &&
        <TagList onChange={this.handleTagSelect}
          colorLabel={this.props.colorLabel}
          colorLabelText={this.props.colorLabelText} />}
    </>;
  }
}

const styles = StyleSheet.create({
  input: {
    color: colors.text,
    fontSize: font.size.xlarge,
    fontFamily: font.family.bold,
    marginBottom: spacing.large,
  },
  input_fixed: {
    marginBottom: 0,
  },
});

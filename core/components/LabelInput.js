import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import TagList from './TagList';
import AppButton from './AppButton';
import * as styleConfig from '../style';

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
          placeholderTextColor={styleConfig.COLOR_PLACEHOLDER}
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
    color: styleConfig.COLOR_TEXT,
    fontSize: styleConfig.FONT_SIZE_XLARGE,
    fontFamily: styleConfig.FONT_FAMILY_BOLD,
    marginTop: styleConfig.SPACING_BASE * -1,
    marginBottom: styleConfig.SPACING_BASE * 1.25,
    paddingVertical: styleConfig.SPACING_BASE,
  },
  input_fixed: {
    borderTopColor: styleConfig.COLOR_BORDER,
    borderTopWidth: StyleSheet.hairlineWidth,
    marginBottom: 4,
    marginTop: styleConfig.SPACING_BASE,
    paddingTop: styleConfig.SPACING_BASE,
  },

  button: {
    marginTop: 'auto',
  },
});

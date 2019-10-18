import React from 'react';
import { StyleSheet, View } from 'react-native';
import Key from './Key';
import { spacing } from '../style';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleValueChange = (value) => {
    this.setState({ value });

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  handleKeyPress = (action) => {
    // fill with 00 to make it a round number
    if (action === '00') {
      this.handleValueChange(this.state.value * 100);

      // handle regular number input
    } else if (!isNaN(action)) {
      this.handleValueChange(this.state.value * 10 + action);

      // delete last number
    } else if (action === 'del') {
      this.handleValueChange(Number(this.state.value.toString().slice(0, -1)));
    }
  }

  render() {
    return (<View style={styles.keyboard}>
      <View style={styles.keyboardRow}>
        <Key style={styles.key}
          value={1}
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value={2}
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value={3}
          onPress={this.handleKeyPress} />
      </View>
      <View style={styles.keyboardRow}>
        <Key style={styles.key}
          value={4}
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value={5}
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value={6}
          onPress={this.handleKeyPress} />
      </View>
      <View style={styles.keyboardRow}>
        <Key style={styles.key}
          value={7}
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value={8}
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value={9}
          onPress={this.handleKeyPress} />
      </View>
      <View style={styles.keyboardRow}>
        <Key style={styles.key}
          value='00'
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value={0}
          onPress={this.handleKeyPress} />
        <Key style={styles.key}
          value='del'
          onPress={this.handleKeyPress} />
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  keyboard: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: spacing.small * -1,
  },
  keyboardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.small,
  },
  key: {
    flex: 0,
    flexBasis: '26%',
    marginVertical: spacing.small,
  },
});

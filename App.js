import React from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, Text, StatusBar, TextInput, UIManager } from 'react-native';
import * as Font from 'expo-font';

import NewExpenseView from './core/views/NewExpenseView';
import { COLOR_BASE_SOFT } from './core/style';

const { State: TextInputState } = TextInput;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shift: new Animated.Value(0),
    };
  }

  componentWillMount = async () => {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    await Font.loadAsync({
      'IBMPlexSans-Light': require('./assets/fonts/IBMPlexSans-Light.ttf'),
      'IBMPlexSans-SemiBold': require('./assets/fonts/IBMPlexSans-SemiBold.ttf'),
    });
    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  render() {
    const {shift} = this.state;

    return !this.state.isLoading
      ? <Animated.View style={[styles.view, {transform: [{translateY: shift}]}]}>
          <StatusBar barStyle='light-content' />
          <NewExpenseView />
        </Animated.View>
      : <><Text>Loading</Text></>;
  }

  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight) - 20;
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 300,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLOR_BASE_SOFT,
    flex: 1,
  },
});

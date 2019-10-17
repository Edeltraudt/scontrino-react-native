import React from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager } from 'react-native';
import * as Font from 'expo-font';

import NewExpenseView from './core/views/NewExpenseView';

const { State: TextInputState } = TextInput;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      shift: new Animated.Value(0),
    };
  }

  componentWillMount = () => {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'ibm-plex-sans': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
      'ibm-plex-sans-bold': require('./assets/fonts/IBMPlexSans-SemiBold.ttf'),
    });
    this.setState({ isLoaded: true });
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  render() {
    const {shift} = this.state;
    return (
      <Animated.View style={[styles.view, { transform: [{ translateY: shift }]}]}>
        <NewExpenseView />
      </Animated.View>
    );
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
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
});

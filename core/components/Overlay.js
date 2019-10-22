import React from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';
import { font } from '../style';

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(10),
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();

    Animated.timing(this.state.translateY, {
      delay: 75,
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.sin,
    }).start();
  }

  render() {
    const {color, backgroundColor, style, title} = this.props;
    const {opacity, translateY} = this.state;

    return (
      <Animated.View style={[style, styles.wrap, {opacity}]}
        backgroundColor={backgroundColor}>
        {title &&
          <Animated.Text style={[styles.text, {
            color,
            transform: [{translateY}]
          }]}>{title}</Animated.Text>}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: font.size.base,
    fontFamily: font.family.bold,
  },
});

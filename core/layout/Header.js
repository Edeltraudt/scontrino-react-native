import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import * as styleConfig from '../style';

export default class Header extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={
            [styles.headerText, {color: this.props.color || styleConfig.COLOR_}]
          }>{this.props.title}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    opacity: styleConfig.OPACITY_SOFT,
    paddingHorizontal: styleConfig.SPACING_MEDIUM,
    paddingVertical: styleConfig.SPACING_BASE,
    position: 'relative',
  },
  headerText: {
    color: styleConfig.COLOR_INV_TEXT,
    fontSize: styleConfig.FONT_SIZE_SMALL,
    fontFamily: styleConfig.FONT_FAMILY_BOLD,
    textAlign: 'center',
  },
});

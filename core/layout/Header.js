import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { style, spacing, colors, font } from '../style';

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
    opacity: style.opacitySoft,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.base,
    position: 'relative',
  },
  headerText: {
    color: colors.invText,
    fontSize: font.size.small,
    fontFamily: font.family.bold,
    textAlign: 'center',
  },
});

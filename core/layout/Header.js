import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={
            [styles.headerText, {color: this.props.color || '#F6F6F6'}]
          }>{this.props.title}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    opacity: 0.5,
    paddingHorizontal: 24,
    paddingVertical: 20,
    position: 'relative',
  },
  headerText: {
    color: '#F6F6F6',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

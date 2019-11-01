import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { spacing, colors, font } from '../style';
import Icon from '../components/Icon';

export default class Header extends React.Component {
  render() {
    const {onBack, notification } = this.props;

    return (
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.headerIcon}>{'<'}</Text>
            {/* <Icon name='arrow-left' size={style.iconSize.small} color={color} /> */}
          </TouchableOpacity>
          {notification &&
            <Text style={styles.headerNotification}>{notification}</Text>}
          <View style={[styles.headerIcon, styles.headerIcon_clone]} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.container,
    paddingVertical: spacing.base,
  },
  headerIcon: {
    color: colors.invText,
    height: font.size.base,
    width: font.size.base,
  },
  headerIcon_clone: {
    opacity: 0,
  },
  headerText: {
    color: colors.invText,
    fontSize: font.size.small,
    fontFamily: font.family.bold,
    textAlign: 'center',
  },
  headerNotification: {
    color: colors.invText,
    fontSize: font.size.small,
    fontFamily: font.family.bold,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: font.family.bold,
  },
});

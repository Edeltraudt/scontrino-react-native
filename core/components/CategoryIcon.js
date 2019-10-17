import React from 'react';
import { StyleSheet, View } from 'react-native';
import categories from '../../categories';

export default class CategoryIcon extends React.Component {
  render() {
    const { fullWidth, fixed, code } = this.props;

    return (
      <View style={[
            styles.icon,
            (fullWidth ? styles.fullIcon : {}),
            (fixed ? styles.fixedIcon : {}),
          ]}
          backgroundColor={categories[code].props.color}
        >
        {/* TODO: add icon */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    height: 48,
    marginBottom: 12,
    width: 48,
  },
  fullIcon: {
    height: 56,
    marginBottom: 0,
    marginRight: 24,
    width: 56,
  },
  fixedIcon: {
    height: 64,
    width: 64,
  }
});

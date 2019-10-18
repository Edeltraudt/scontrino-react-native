import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import categories from '../../categories';
import { colors } from '../style';

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

const sizeS = moderateScale(42);
const sizeM = moderateScale(50);
const sizeL = moderateScale(58);

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.base_soft,
    borderRadius: 12,
    height: sizeS,
    marginBottom: sizeS * 0.25,
    width: sizeS,
  },
  fullIcon: {
    height: sizeM,
    marginBottom: 0,
    marginRight: sizeM * 0.5,
    width: sizeM,
  },
  fixedIcon: {
    height: sizeL,
    width: sizeL,
  }
});

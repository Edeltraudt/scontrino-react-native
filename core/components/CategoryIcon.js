import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { categories } from '../../categories';
import { colors, style, font } from '../style';
import Icon from './Icon';

export default class CategoryIcon extends React.Component {
  render() {
    const { fullWidth, fixed, code } = this.props;
    const backgroundColor = categories[code].props.color;

    return (
      <View style={[
            styles.icon,
            (fullWidth ? styles.fullIcon : {}),
            (fixed ? styles.fixedIcon : {backgroundColor}),
          ]}
        >
          {/* <Icon name={code} /> */}
      </View>
    )
  }
}

const size = scale(48);
const sizeL = font.size.expense;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.base_soft,
    borderRadius: style.borderRadiusS,
    height: size,
    marginBottom: size * 0.25,
    width: size,
  },
  fullIcon: {
    marginBottom: 0,
    marginRight: size * 0.5,
  },
  fixedIcon: {
    backgroundColor: '#00000033',
    color: colors.invBase,
    height: sizeL,
    marginBottom: sizeL * -0.125,
    marginTop: sizeL * -0.075,
    marginLeft: 'auto',
    width: sizeL,
  }
});

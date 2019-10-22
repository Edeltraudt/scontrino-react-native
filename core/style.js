import { moderateScale, scale } from 'react-native-size-matters';

export const style = {
  borderRadius: 16,
  borderRadiusS: moderateScale(8),
  borderRadiusL: moderateScale(24),
  opacitySoft: 0.5,
  iconSize: {
    small: moderateScale(16),
    large: moderateScale(32),
  },
};

export const font = {
  family: {
    base: 'IBMPlexSans-Light',
    bold: 'IBMPlexSans-SemiBold',
  },
  size: {
    expense: moderateScale(48, 1.25),
    xlarge: moderateScale(21, 0.75),
    base: moderateScale(16, 0.75),
    small: moderateScale(13, 0.75),
    xsmall: moderateScale(12, 0.25),
    xxsmall: moderateScale(11, 0.25),
  }
};

export const colors = {
  base: '#FFF',
  baseSoft: '#F6F6F6',
  baseFocus: '#EEE',
  text: '#1F1F1F',
  textSoft: '#7E8291',
  placeholder: '#ABADB6',
  invBase: '#1F1F1F',
  invBaseFocus: '#1F1F1F',
  invText: '#FFF',
  border: '#CCC',
  borderSoft: '#BBB',

  primary: '#26BE4F',
  primaryFocus: '#1C8C3A',

  error: '#FF5252',
};

export const spacing = {
  container: moderateScale(15, 10),
  box: scale(20),
  large: scale(28),
  medium: scale(20),
  base: scale(16),
  small: scale(8),
};

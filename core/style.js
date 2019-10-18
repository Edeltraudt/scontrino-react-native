import { moderateScale, scale } from 'react-native-size-matters';

export const style = {
  borderRadius: 16,
  borderRadiusS: 12,
  borderRadiusL: moderateScale(24),
  opacitySoft: 0.5,
};

export const font = {
  family: {
    base: 'IBMPlexSans-Light',
    bold: 'IBMPlexSans-SemiBold',
  },
  size: {
    expense: moderateScale(42, 0.85),
    xlarge: moderateScale(21, 0.625),
    base: moderateScale(16, 0.625),
    small: moderateScale(13, 0.625),
    xsmall: moderateScale(12, 0.625),
    xxsmall: moderateScale(10.5),
  }
};

export const colors = {
  base: '#FFF',
  baseSoft: '#F6F6F6',
  baseFocus: '#EEE',
  text: '#303B67',
  textSoft: '#7E8291',
  placeholder: '#ABADB6',
  invBase: '#1F1F1F',
  invBaseFocus: '#1F1F1F',
  invText: '#FFF',
  border: '#CCC',
  borderSoft: '#BBB',
};

export const spacing = {
  box: scale(20),
  large: moderateScale(28),
  medium: moderateScale(22),
  base: moderateScale(14),
  small: moderateScale(8),
};

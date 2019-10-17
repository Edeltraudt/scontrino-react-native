import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import CategoryIcon from './CategoryIcon';

export default class CategoryItem extends React.Component {
  handlePress = (key, color, colorText) => {
    if (this.props.onPress) {
      this.props.onPress(key, color, colorText);
    }
  }

  render() {
    const {
      style,
      code,
      title,
      label,
      help,
      color,
      colorText,
      fullWidth,
      fixed
    } = this.props;

    return (<View style={[styles.categoryWrap,  style]}>
      <TouchableHighlight style={[
            styles.category,
            (fullWidth ? styles.category_full : {}),
            (fixed ? styles.category_fixed : {}),
          ]}
          underlayColor='#EEE'
          onPress={() => this.handlePress(code, color, colorText)}
          disabled={fixed}>
        <>
          <CategoryIcon code={code} fullWidth={fullWidth} fixed={fixed} />
          <View>
            <Text style={[
              styles.categoryTitle,
              (fixed ? styles.categoryTitle_fixed : {})
            ]}>{title}</Text>
            <Text style={[
              styles.categoryLabel,
              (fixed ? styles.categoryLabel_fixed : {})
            ]}>{label}</Text>
            <Text style={[
              styles.categoryHelp,
              (fixed ? styles.categoryHelp_fixed : {})
            ]}>{help}</Text>
          </View>
        </>
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingLeft: 16,
    paddingRight: 11,
    paddingVertical: 16,
  },
  category_full: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 12,
    paddingVertical: 30,
  },
  category_fixed: {
    paddingVertical: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },

  categoryTitle: {
    color: '#303B67',
    fontWeight: '600',
    fontSize: 20,
  },
  categoryTitle_fixed: {
    color: '#303B67',
    fontWeight: '600',
    fontSize: 22,
  },

  categoryLabel: {
    color: '#303B67',
    fontSize: 15,
  },
  categoryLabel_fixed: {
    color: '#303B67',
    fontSize: 17,
  },

  categoryHelp: {
    color: '#7E8291',
    fontSize: 11.5,
    marginTop: 8,
  },
  categoryHelp_fixed: {
    fontSize: 13,
  },
});

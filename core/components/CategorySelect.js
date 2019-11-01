import React from 'react';
import { StyleSheet, View } from 'react-native';

import { categories } from './../../categories';
import CategoryItem from './CategoryItem';

export default class CategorySelect extends React.Component {
  handleChange = (key, color, colorText) => {
    if (this.props.onChange) {
      this.props.onChange(key, color, colorText);
    }
  }

  render() {
    return <>
      <View style={styles.categoryRow}>
        <CategoryItem
          onPress={this.handleChange}
          code={categories.basic.code}

          style={styles.categoryItem}
          {...categories.basic.props} />
        <CategoryItem
          onPress={this.handleChange}
          code={categories.luxury.code}

          style={styles.categoryItem}
          {...categories.luxury.props} />
      </View>
      <View style={styles.categoryRow}>
        <CategoryItem
          onPress={this.handleChange}
          code={categories.ext.code}

          fullWidth
          style={[styles.categoryItem, styles.categoryItem_full]}
          {...categories.ext.props} />
      </View>
      <View style={styles.categoryRow}>
        <CategoryItem
          onPress={this.handleChange}
          code={categories.acq.code}

          style={styles.categoryItem}
          {...categories.acq.props} />
        <CategoryItem
          onPress={this.handleChange}
          code={categories.work.code}

          style={styles.categoryItem}
          {...categories.work.props} />
      </View>
    </>;
  }
}

const styles = StyleSheet.create({
  categoryRow: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    flex: 0,
    flexBasis: '48%',
  },
  categoryItem_full: {
    flex: 1,
    flexBasis: 'auto',
  },
});

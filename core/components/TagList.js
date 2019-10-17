import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Tag from './Tag';

const mockData = [
  'Gym', 'Gift', 'Language Class', 'Clothes', 'Cinema', 'Coffee',
];

export default class TagList extends React.Component {
  handlePress = (tag) => {
    if (this.props.onChange) {
      this.props.onChange(tag);
    }
  }

  render() {
    return (<View style={this.props.style}>
      <View style={styles.list}>
        {mockData.map((tag, index) =>
          <Tag
              title={tag}
              key={index}
              onPress={this.handlePress}
              colorLabel={this.props.colorLabel}
              colorLabelText={this.props.colorLabelText}
            />)}
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
});

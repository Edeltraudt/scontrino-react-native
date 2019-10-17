import React from 'react';

import AppButton from './AppButton';
import { isToday } from './../helpers';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  handlePress = () => {
    // TODO: pen datepicker
  }

  handleChange = (date) => {
    this.setState({ date });
    // TODO: close datepicker
  }

  render() {
    return <>
      <AppButton title='Select Date' style={{ flex: 3, marginLeft: 10 }}
        type={!isToday(this.state.date) ? 'soft' : ''}
        onPress={this.handlePress} />
    </>;
  }
}

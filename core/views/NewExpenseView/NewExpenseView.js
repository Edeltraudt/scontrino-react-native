import React from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, SafeAreaView } from 'react-native';

import Header from './../../../core/layout/Header';
import { isToday } from './../../../core/helpers';

import Keyboard from './../../../core/components/Keyboard';
import CategorySelect from './../../../core/components/CategorySelect';
import CategoryItem from './../../../core/components/CategoryItem';
import LabelInput from './../../../core/components/LabelInput';
import ExpenseInput from './../../../core/components/ExpenseInput';
import AppButton from './../../../core/components/AppButton';
import categories from '../../../categories';

export default class NewExpenseView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,            // counter
      expense: 0,         // user input (cent)
      category: '',       // category key
      label: '',          // user input
      notes: '',          // user input
      date: new Date(),   // user input

      // category theming in default state (neutral black)
      color: '#1F1F1F',
      colorText: '#FFFFFF',
      colorLabel: '#F6F6F6',
      colorLabelText: '#AAAAAA',
    };
  }

  componentDidMount = async () => {
    this.updateColors();
  }

  updateColors() {
    const {category} = this.state;

    if (category && categories[category]) {
      const { color, colorText, colorLabel, colorLabelText} =
        categories[category].props;

      this.setState({ color, colorText, colorLabel, colorLabelText });
    }
  }

  handleNext = (save = false) => {
    this.setState({ step: this.state.step + 1 });

    if (save) {
      // TODO
      if (this.props.onSave) {
        this.props.onSave();
      }
    }
  }

  handleNotesChange = (notes) => {
    this.setState({ notes })
  }

  handleCategorySelect = (category, color, colorText) => {
    this.setState({ category, color, colorText });
    this.handleNext();
  }

  renderStep = () => {
    const { step } = this.state;
    const categoryProps = this.state.category
      ? categories[this.state.category].props
      : {};

    // expense keyboard
    if (step === 1) {
      return <View style={[styles.content, styles.content_soft]}>
        <Keyboard onChange={expense => this.setState({ expense })} />

        <SafeAreaView>
          <AppButton title='Continue'
            style={{ marginTop: 36 }}
            onPress={this.handleNext} />
        </SafeAreaView>
      </View>;

      // category selection
    } else if (step === 2) {
      return <View style={styles.content}>
        <CategorySelect onChange={this.handleCategorySelect} />
      </View>;
    }

    // label input/tag selection
    if (step >= 3) {
      return <>
        <View style={[
          styles.content,
          styles.content_soft,
          styles.content_auto
        ]}>
          <CategoryItem fixed fullWidth
            code={this.state.category}
            {...categoryProps} />

          {(step >= 4 && this.state.label.trim().length > 0) &&
            <LabelInput fixed value={this.state.label} />}
        </View>
        <View style={[styles.content]}>
          {step === 3 && <LabelInput
            onChange={label => this.setState({ label })}
            onNext={this.handleNext}
            {...categoryProps} />}

          {(step === 4) && <>
            {/* date options */}
            <View style={styles.buttonGroup}>
              <AppButton title='Today' style={{ flex: 2 }}
                type={!isToday(this.state.date) ? 'soft' : ''}
                onPress={() => this.setState({ date: new Date() })} />

              <AppButton title='Select Date' style={{ flex: 3, marginLeft: 10 }}
                type={isToday(this.state.date) ? 'soft' : ''}
                onPress={this.handleDateChange} />
            </View>

            {/* add attachments */}
            <View style={styles.buttonGroup}>
              <AppButton title='Attachment' type='soft' style={{ flex: 1 }} />
            </View>

            {/* notes input field */}
            <View style={styles.notes}>
              <TextInput style={styles.notesInput}
                value={this.state.notes}
                onChangeText={this.handleNotesChange}
                placeholder='Notes'
                placeholderTextColor='#abadb6' />
            </View>

            <SafeAreaView style={{ marginTop: 'auto' }}>
              <AppButton title='Finish' onPress={this.handle} />
            </SafeAreaView>
          </>}
        </View>
      </>;
    }
  }

  render() {
    const expense = this.state.expense > 0 ? parseFloat(this.state.expense / 100).toFixed(2).toString() : '0.00';
    const { color, colorText, step } = this.state;

    return <View style={styles.wrap} backgroundColor={color}>
      <StatusBar backgroundColor={color} />
      <Header title='New Expense' color={colorText} />
      <ExpenseInput value={expense} colorText={colorText} small={(step >= 3)} />

      {this.renderStep()}
    </View>;
  }
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flex: 1,
  },

  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 28,
    marginTop: -8,
    paddingBottom: 20,
    borderBottomColor: '#BBB',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  notes: {

  },
  notesInput: {
    fontSize: 18,
    width: '100%',
  },


  content: {
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 32,
    flex: 1,
    padding: 32,
  },
  content_auto: {
    flex: 0,
    marginBottom: -32,
    paddingBottom: 32 + 8,
    paddingTop: 8,
  },
  content_soft: {
    backgroundColor: '#FFF',
  },

});

import React from 'react';
import { StyleSheet, TextInput, View, SafeAreaView } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import categories from '../../categories';
import { isToday } from '../helpers';
import { spacing, colors, font, style } from '../style';

import Header from '../layout/Header';

import Keyboard from '../components/Keyboard';
import CategorySelect from '../components/CategorySelect';
import LabelInput from '../components/LabelInput';
import ExpenseInput from '../components/ExpenseInput';
import AppButton, { AppButtonType } from '../components/AppButton';

export default class NewExpenseView extends React.Component {
  steps = 4;

  constructor(props) {
    super(props);

    this.state = {
      step: 1,            // counter
      expense: 0,         // user input (cent)
      category: null,     // category key
      label: '',          // user input
      notes: '',          // user input
      date: new Date(),   // user input

      isSaved: false,
    };
  }

  componentDidMount = async () => {
    this.updateColors();
  }

  get hasLabel() {
    return this.state.label.trim().length > 0;
  }

  updateColors() {
    const {category} = this.state;

    if (category && categories[category]) {
      const { color, colorText, colorLabel, colorLabelText} =
        categories[category].props;

      this.setState({ color, colorText, colorLabel, colorLabelText });
    } else {
      // category theming in default state (neutral black)
      this.setState({
        color: colors.invBase,
        colorText: colors.invText,
        colorLabel: colors.baseSoft,
        colorLabelText: colors.placeholder,
      });
    }
  }

  handleNext = () => {
    if (this.state.step > 2) {
      this.save();
    }

    // navigate between steps
    if (this.state.step < this.steps) {
      this.setState({ step: this.state.step + 1 });
    } else {
      this.reset();
    }
  }

  handlePrevious = () => {
    if (this.state.step === 1) {
      // exit new expense input view
    } else {
      this.setState({ step: this.state.step - 1});
    }
  }

  save = (silent = true) => {
    if (!silent) {
      this.setState({isSaved: true}, () => {
        window.setTimeout(() => {
          this.setState({isSaved: false});
        }, 650);
      });
    }

    if (this.props.onSave) {
      this.props.onSave();
    }
  }

  reset = () => {
    this.setState({
      expense: 0,
      category: null,
      label: '',
      notes: '',
      date: new Date(),
      step: 1 ,
    }, () => this.updateColors());
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
            style={{ marginTop: spacing.large }}
            disabled={this.state.expense <= 0}
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
        {/* Label input with tag suggestions  */}
        {(step === 3 || (step > 3 && this.hasLabel)) &&
          <View style={[
            styles.content,
            styles.content_soft,
            step === 3 ? {} : styles.content_auto,
          ]}>
            <LabelInput
              fixed={step > 3}
              value={this.state.label}
              onChange={label => this.setState({ label })}
              onNext={this.handleNext}
              {...categoryProps} />

            {step === 3 &&
              <AppButton title={this.hasLabel ? 'Continue' : 'Skip'}
                style={styles.button}
                onPress={this.handleNext} />}
          </View>}

        {/* Additional, optional info */}
        {(step === 4) && <View style={[styles.content]}>
          {/* date options */}
          <View style={styles.buttonGroup}>
            <AppButton title='Today' style={{ flex: 2 }}
              type={!isToday(this.state.date) ? AppButtonType.soft : ''}
              onPress={() => this.setState({ date: new Date() })} />

            <AppButton title='Select Date' style={{ flex: 3, marginLeft: 10 }}
              type={isToday(this.state.date) ? AppButtonType.soft : ''}
              onPress={this.handleDateChange} />
          </View>

          {/* add attachments */}
          {/* <View style={styles.buttonGroup}>
            <AppButton title='Attachment' type={AppButtonType.soft} style={{ flex: 1 }} />
          </View> */}

          {/* notes input field */}
          <View style={styles.notes}>
            <TextInput style={styles.notesInput}
              value={this.state.notes}
              onChangeText={this.handleNotesChange}
              placeholder='Notes'
              placeholderTextColor={colors.placeholder} />
          </View>

          <SafeAreaView style={{ marginTop: 'auto' }}>
            <AppButton title='Finish' onPress={this.handleNext} />
          </SafeAreaView>
        </View>}
      </>;
    }
  }

  render() {
    const expense = this.state.expense > 0 ? parseFloat(this.state.expense / 100).toFixed(2).toString() : '0.00';
    const { isSaved, color, step, category } = this.state;

    return <View style={styles.wrap} backgroundColor={color}>
      <Header onBack={this.handlePrevious}
        notification={isSaved ? 'Saved!' : false} />
      <ExpenseInput value={expense} category={category} small={(step >= 2)} />

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
    borderBottomColor: colors.borderSoft,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    marginBottom: moderateScale(20, 0.75),
    marginTop: spacing.small * -1,
    paddingBottom: moderateScale(14, 0.75),
  },

  notes: {

  },
  notesInput: {
    fontSize: font.size.base,
    width: '100%',
  },


  content: {
    backgroundColor: colors.baseSoft,
    borderTopLeftRadius: style.borderRadiusL,
    flex: 1,
    padding: spacing.container,
  },
  content_auto: {
    flex: 0,
    marginBottom: spacing.container * -0.625,
    paddingBottom: spacing.container * 0.625 * 2,
  },
  content_soft: {
    backgroundColor: colors.base,
    paddingTop: spacing.container * 0.625
  },

  button: {
    marginTop: 'auto',
  },

});

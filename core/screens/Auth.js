import React from 'react';

import { StyleSheet, Text, TextInput, View, AsyncStorage, SafeAreaView } from 'react-native';
import AppButton, { AppButtonType } from '../components/AppButton';
import { colors, spacing, font } from '../style';

export default class AuthScreen extends React.Component {
  idLength = 7;

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      error: '',
    };
  }

  componentWillMount = async () => {
    this.setState({ id: await AsyncStorage.getItem('id') || '' }, () => {
      if (this.state.id) {
        this.handleSignIn();
      }
    });
  }

  handleSignIn = async () => {
    // TODO: check if ID is valid
    try {
      await AsyncStorage.setItem('id', this.state.id);
      this.props.navigation.navigate('NewExpense');
    } catch(error) {
      // TODO
    }
  }

  render() {
    return <View style={styles.wrap}>
      <View style={styles.circle} />
      <SafeAreaView>
        <Text style={styles.title}>You're new here.</Text>

        <TextInput style={styles.input}
          autoFocus={true}
          value={this.state.id}
          secureTextEntry={true}
          placeholder='Scontrino ID'
          onChangeText={id => this.setState({id})}
          placeholderTextColor={colors.placeholder} />

        <Text style={styles.error}>{this.state.error}</Text>

        <AppButton style={styles.button}
          disabled={this.state.id.trim().length < this.idLength}
          onPress={this.handleSignIn}
          type={AppButtonType.primary} title='Sign in' />
      </SafeAreaView>
    </View>;
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.invBase,
    flex: 1,
    paddingHorizontal: spacing.container,
    paddingTop: '50%',
  },
  title: {
    color: colors.invText,
    fontSize: font.size.expense,
    lineHeight: font.size.expense,
    fontFamily: font.family.bold,
    maxWidth: '90%',
  },
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.placeholder + 'AA',
    color: colors.invText,
    fontSize: font.size.xlarge,
    fontFamily: font.family.base,
    marginTop: '20%',
    paddingVertical: font.size.xlarge * 0.25,
  },
  button: {
    marginTop: spacing.large,
  },
  error: {
    color: colors.error,
    fontSize: font.size.small,
    marginVertical: font.size.small * 0.5,
  },

  circle: {
    backgroundColor: colors.primary,
    borderRadius: 900,
    aspectRatio: 1,
    position: 'absolute',
    right: '25%',
    top: '-35%',
    width: '150%',
  },
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

interface WeatherProps {}

interface WeatherState {
  city: string;
}

export default class Weather extends Component<WeatherProps, WeatherState> {
  state = {
    city: '',
  };

  private handleTextChange = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    this.setState({ city: event.nativeEvent.text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You input {this.state.city}</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this.handleTextChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: 'center',
  },
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import Forecast from './Forecast';
import { ForecastProps } from './Forecast';

interface WeatherProps {}

interface WeatherState {
  city: string;
  forecast: ForecastProps | null;
}

export default class Weather extends Component<WeatherProps, WeatherState> {
  state = {
    city: '',
    forecast: null,
  };

  private handleTextChange = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    this.setState({ city: event.nativeEvent.text });
  };

  render() {
    const { city, forecast } = this.state;

    const content = this.state.forecast ? (
      <Forecast
        main={forecast.main}
        description={forecast.description}
        temp={forecast.temp}
      />
    ) : null;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You input {city}</Text>
        {content}
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

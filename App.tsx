import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WeatherServices from './services/weatherServices';
import Weather from './components/Weather';

interface AppProps {}

interface AppState {
  isLoading: boolean;
  temperature: number;
  city: string | null;
  weatherCondition: string | null;
  error: PositionError | null;
}

export default class App extends Component<AppProps, AppState> {
  state = {
    isLoading: false,
    temperature: 0,
    city: null,
    weatherCondition: null,
    error: null,
  };

  private weatherServices = new WeatherServices();

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.weatherServices.fetchWeather(position.coords.latitude, position.coords.longitude)
          .then(data => {
            this.setState({
              temperature: data.main.temp,
              city: data.name,
              weatherCondition: data.weather[0].main,
              isLoading: false,
            });
          })
      },
      (error: PositionError) => this.setState({ error }),
    );
  }

  render() {
    const { isLoading, weatherCondition, city, temperature } = this.state;

    const content = isLoading ? (
      <View>
        <Text>Minimalist Weather App</Text>
      </View>
    ) : (
      <Weather weather={weatherCondition} city={city} temperature={temperature} />
    );

    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

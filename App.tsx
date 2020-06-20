import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

  private _apiKey: string = 'f49baef6b4984f869cda007be0df0833';
  private _apiBase: string = 'http://api.openweathermap.org/data/2.5/weather?';

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (error: PositionError) => this.setState({ error }),
    );
  }

  private fetchWeather = (lat: number = 25, lon: number = 25) => {
    fetch(
      `${this._apiBase}lat=${lat}&lon=${lon}&APPID=${this._apiKey}&units=metric`,
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          weatherCondition: data.weather[0].main,
          isLoading: false,
        });
      });
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

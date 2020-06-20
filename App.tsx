import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from './components/Weather';

interface AppProps {}

interface AppState {
  isLoading: boolean;
}

export default class App extends Component<AppProps, AppState> {
  state = {
    isLoading: true,
  };

  render() {
    const { isLoading } = this.state;

    const content = isLoading ? <Weather /> : (
      <View>
        <Text>Minimalist Weather App</Text>
      </View>
    );

    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

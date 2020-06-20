import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AppProps {}

interface AppState {
  isLoading: boolean;
}

export default class App extends Component<AppProps, AppState> {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    const content = isLoading ? null : (
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

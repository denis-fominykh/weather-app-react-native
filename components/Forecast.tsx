import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface ForecastProps {
  main: string;
  description: string;
  temp: number;
}

const Forecast: FC<ForecastProps> = ({ main, description, temp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{main}</Text>
      <Text style={styles.mainText}>Current conditions: {description}</Text>
      <Text style={styles.bigText}>{temp}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Forecast;

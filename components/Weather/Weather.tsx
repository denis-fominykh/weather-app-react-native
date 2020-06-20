import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import weatherConditions from '../../utils/weatherConditions';

interface WeatherProps {
  weather: string | null;
  city: string | null;
  temperature: number;
}

const Weather: FC<WeatherProps> = ({ weather, city, temperature }) => {
  if (weather && city && temperature) {
    return (
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[weather].color },
        ]}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={48}
            name={weatherConditions[weather].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{Math.round(temperature)}˚C</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
          <Text style={styles.subtitle}>
            {weatherConditions[weather].subtitle}
          </Text>
          <Text style={styles.city}>{city}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.weatherContainer, { backgroundColor: '#cf1d2d' }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.subtitle}>Something went wrong!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tempText: {
    fontSize: 72,
    color: '#fff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 60,
    color: '#fff',
  },
  subtitle: {
    fontSize: 30,
    color: '#fff',
  },
  city: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Weather;

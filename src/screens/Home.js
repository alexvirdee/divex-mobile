import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: '#33E6FF',
          textAlign: 'center',
          marginTop: 18,
        }}
      >
        Welcome to Divex
      </Text>
      <Text style={{ color: '#fff', textAlign: 'center', paddingTop: 8 }}>
        Always remember your dive experiences
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
    color: '#fff',
  },
});

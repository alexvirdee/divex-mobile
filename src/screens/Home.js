import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Home</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
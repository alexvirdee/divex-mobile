import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 8 }}>
        Login
      </Text>
      <Input
        placeholder="Username"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
      />
      <View style={{ alignSelf: 'center' }}>
        <Button
          title="Submit"
          buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

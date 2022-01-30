import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../component/Input';
import ButtonClick from '../component/ButtonClick';
import Gap from '../component/Gap';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <Text style={styles.title}>Log in to continue</Text>
        <Input label="Email :" placeholder="Type Email Here..." />
        <Gap height={10} />
        <Input label="Password :" placeholder="Type Password Here..." />
        <Gap height={50} />
        <ButtonClick title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1BB0CE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWrapper: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    height: 380,
    width: 300,
    borderRadius: 15,
    elevation: 8,
  },
  title: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

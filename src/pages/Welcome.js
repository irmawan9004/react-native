import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeSvg from '../assets/icon/programming.svg';
import ButtonClick from '../component/ButtonClick';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Hey,Welcome</Text>
        <WelcomeSvg height={200} width={200} />
        <ButtonClick width={200} title="Get Started" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Black',
    fontSize: 30,
  },
});

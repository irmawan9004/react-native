import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ButtonClick({title, width}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} width={width}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#1BB0CE',
    borderRadius: 20,
    width: 200,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

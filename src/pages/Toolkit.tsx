import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function ReduxToolkit() {
  const {container, row, button, text} = style;
  return (
    <View style={container}>
      <Text style={[text, {fontSize: 30}]}>State</Text>
      <View style={row}>
        <TouchableOpacity style={button}>
          <Text style={text}>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button}>
          <Text style={text}>DECREMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2041',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#68C3D4',
    padding: 20,
    margin: 15,
  },
});

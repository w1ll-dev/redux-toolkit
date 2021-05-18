import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ToolkitType} from '../store/redux-toolkit';
import {increment, decrement} from '../store/redux-toolkit/counter-toolkit';

export function FirstPage() {
  const {container, row, button, text, title, center} = style;

  const counter = useSelector<ToolkitType>(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={container}>
      <Text style={[text, title]}>First Page</Text>
      <View style={center}>
        <Text style={[text, title]}>{`${counter}`}</Text>
        <View style={row}>
          <TouchableOpacity
            style={button}
            onPress={() => dispatch(decrement())}>
            <Text style={text}>DECREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => dispatch(increment())}>
            <Text style={text}>INCREMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1F2041',
  },
  center: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  title: {
    fontSize: 30,
  },
  content: {
    fontSize: 20,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#68C3D4',
    padding: 20,
    margin: 15,
  },
});

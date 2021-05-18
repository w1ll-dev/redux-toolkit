import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DefaultReducerType} from '../store/default-redux';
import {increment, decrement} from '../store/default-redux/actions';

export function DefaultRedux() {
  const {container, row, button, text, title} = style;

  const counter = useSelector<DefaultReducerType>(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={container}>
      <Text style={[text, title]}>{`${counter}`}</Text>
      <View style={row}>
        <TouchableOpacity style={button} onPress={() => dispatch(decrement())}>
          <Text style={text}>DECREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button} onPress={() => dispatch(increment())}>
          <Text style={text}>INCREMENT</Text>
        </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  title: {
    fontSize: 30,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#68C3D4',
    padding: 20,
    margin: 15,
  },
});

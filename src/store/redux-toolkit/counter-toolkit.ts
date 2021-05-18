import {createSlice} from '@reduxjs/toolkit';
import {AppDispatch, AppThunk} from '.';

export const counterSlice = createSlice({
  initialState: {
    counter: 0,
  },
  name: 'counter',
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function asyncReset(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep(1500);
    dispatch(counterSlice.actions.reset());
  };
}

export const {increment, decrement} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

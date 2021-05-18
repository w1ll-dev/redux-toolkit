import {combineReducers, createStore} from 'redux';
import {counterReducer} from './reducer';

const defaultReducer = combineReducers({
  counter: counterReducer,
});

export const defaultStore = createStore(defaultReducer);
export type DefaultReducerType = ReturnType<typeof defaultReducer>;

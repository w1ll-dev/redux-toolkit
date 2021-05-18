import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {counterReducer} from './counter-toolkit';

export const toolkitStore = configureStore({
  reducer: counterReducer,
});

export type ToolkitType = ReturnType<typeof toolkitStore.getState>;

export type AppDispatch = typeof toolkitStore.dispatch;
export type AppThunk = ThunkAction<void, ToolkitType, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

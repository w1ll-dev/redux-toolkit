import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './counter-toolkit';

export const toolkitStore = configureStore({
  reducer: counterReducer,
});

export type ToolkitType = ReturnType<typeof toolkitStore.getState>;

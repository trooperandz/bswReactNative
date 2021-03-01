import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from './types';

const initialState = {
  error: '',
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGlobalError(state: AppState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setGlobalError } = app.actions;

export default app.reducer;

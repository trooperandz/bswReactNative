import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { userAPI } from 'utils';
import { setGlobalError } from 'features/app/appSlice';
import { User, UsersApiResponse, UserState } from './types';

const initialState = {
  users: [],
};

const app = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state: UserState, action: PayloadAction<Array<User>>) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = app.actions;

export const getUsers = (callback?: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      const response: UsersApiResponse = await userAPI.get('/users');

      if (!response?.data) {
        throw new Error('Sorry, the API did not send back any data.');
      }

      dispatch(setUsers(response.data));
      callback && callback();
    } catch (error) {
      dispatch(setGlobalError(error.message));
      callback && callback();
    }
  };
};

export default app.reducer;

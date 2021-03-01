import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { userAPI } from 'utils';
import mockUsersResponse from 'utils/usersResponse.json';
import { AppState } from 'features/app/appSlice/types';
import { User, UsersApiResponse, UserState } from './types';

const initialState = {
  error: '',
  users: [],
};

const app = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setGlobalError(state: AppState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setUsers(state: UserState, action: PayloadAction<Array<User>>) {
      state.users = action.payload;
    },
  },
});

export const { setGlobalError, setUsers } = app.actions;

export const getUsers = (callback?: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      // const response: UsersApiResponse = await userAPI.get('/');
      const response = mockUsersResponse;
      console.log({ response });
      if (!response?.data) {
        throw new Error('Sorry, the API did not send back any data.');
      }
      // This goes away after you use the right one
      dispatch(setUsers(response.data.results));
    } catch (error) {
      dispatch(setGlobalError(error.message));
      callback && callback();
    }
  };
};

export default app.reducer;

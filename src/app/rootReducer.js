import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';
import userReducer from 'features/users/usersSlice';

const rootReducer = combineReducers({
  app: appReducer,
  users: userReducer,
});

export default rootReducer;

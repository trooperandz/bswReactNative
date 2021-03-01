import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);

const initialState = {
  app: { error: '' },
  users: { users: [] },
};

export const renderWithProvider = (
  children: JSX.Element,
  state: { [key: string]: any },
  store?: any,
) => {
  const testStore = { ...initialState, ...state };
  // const store = store || mockStore(testStore);

  return render(
    <Provider store={store || mockStore(testStore)}>{children}</Provider>,
  );
};

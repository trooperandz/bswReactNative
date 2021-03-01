import React from 'react';
import { renderWithProvider } from 'utils/testUtils';

import UsersScreen from '../index';
import userData from 'utils/usersResponse.json';

const renderComponent = (state) => renderWithProvider(<UsersScreen />, state);

describe('UsersScreen', () => {
  it('should show the loading screen if the data has not loaded yet', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('users-loading-view')).toBeDefined();
  });

  it('should render a list of all users if the data has loaded', () => {
    const mockData = userData.data.results;
    const { getAllByTestId } = renderComponent({
      users: {
        users: mockData,
      },
    });

    expect(getAllByTestId('user-card')).toHaveLength(mockData.length);
  });
});

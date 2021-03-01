import React from 'react';
import { renderWithProvider } from 'utils/testUtils';

import UsersScreen, { LOADING_TEST_ID } from '../index';
import { USER_CARD_TEST_ID } from 'features/users/components/UserCard';
import userData from 'utils/mockUsersResponse.json';

const renderComponent = (state) => renderWithProvider(<UsersScreen />, state);

describe('UsersScreen', () => {
  it('should show the loading screen if the data has not loaded yet', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId(LOADING_TEST_ID)).toBeDefined();
  });

  it('should render a list of all users if the data has loaded', () => {
    const mockData = userData.data;
    const { getAllByTestId } = renderComponent({
      users: {
        users: mockData,
      },
    });

    expect(getAllByTestId(USER_CARD_TEST_ID)).toHaveLength(mockData.length);
  });
});

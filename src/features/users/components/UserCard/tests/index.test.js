import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import UserCard, { USER_CARD_TEST_ID } from '../index';
import * as RootNavigation from 'utils/navigation';

jest.mock('utils/navigation');

const defaultProps = {
  user: {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
};

const renderComponent = () => render(<UserCard {...defaultProps} />);

describe('UserCard', () => {
  it("should show the user's name and email", () => {
    const { getByText } = renderComponent();

    expect(getByText(defaultProps.user.name)).toBeDefined();
    expect(getByText(defaultProps.user.email)).toBeDefined();
  });

  it('should navigate to the detail screen if the card is pressed', () => {
    const { getByTestId } = renderComponent();

    fireEvent.press(getByTestId(USER_CARD_TEST_ID));
    expect(RootNavigation.navigate).toHaveBeenCalledWith('UserDetailScreen', {
      user: defaultProps.user,
    });
  });
});

import React from 'react';
import { Linking } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

import UserDetailScreen from '../index';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

// TODO: jest config should have taken care of this
jest.mock('assets/icon-close.svg', () => 'SvgMock');

const user = {
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
  phone: '1234567',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const defaultProps = {
  route: {
    params: {
      user,
    },
  },
};

const renderComponent = () => render(<UserDetailScreen {...defaultProps} />);

describe('UserDetailScreen', () => {
  // Reset Linking mock after each test run to clear out previous params
  afterEach(() => {
    Linking.openURL = jest.fn();
  });

  it('should execute Linking openUrl on the address press', () => {
    const coordinates = `${user.address.geo.lat},${user.address.geo.lng}`;
    const { getByText } = renderComponent();

    fireEvent.press(getByText(user.address.street));
    expect(Linking.openURL).toHaveBeenCalledWith(
      `http://maps.apple.com/?ll=${coordinates}`,
    );
  });

  it('should execute Linking openUrl on the phone number press', () => {
    const { getByText } = renderComponent();

    fireEvent.press(getByText(user.phone));
    expect(Linking.openURL).toHaveBeenCalledWith(
      'telprompt:${' + user.phone + '}',
    );
  });

  it("should open the user's website in the webview modal ", () => {
    const { getByTestId, getByText } = renderComponent();

    fireEvent.press(getByText(user.website));
    expect(getByTestId('user-website-webview-modal')).toBeDefined();
  });
});

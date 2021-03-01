import reducer, { setUsers } from '../index';

import userData from 'utils/mockUsersResponse.json';

describe('appSlice reducers', () => {
  it('should set the user data correctly', () => {
    const state = {
      users: [],
    };
    const nextState = reducer(state, setUsers(userData.data));

    expect(nextState).toEqual({ users: userData.data });
  });
});

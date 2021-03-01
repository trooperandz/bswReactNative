import reducer, { setGlobalError } from '../index';

describe('appSlice reducers', () => {
  it('should set the global error message correctly', () => {
    const state = { error: '' };
    const nextState = reducer(state, setGlobalError('Test error'));

    expect(nextState).toEqual({ error: 'Test error' });
  });
});

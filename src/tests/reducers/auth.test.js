import authReducer from '../../reducers/auth';

test('should setup default values', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should login user by id', () => {
    const uid = '1234'
    const action = {
        type: 'LOGIN',
        uid: uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should log out user', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'foo' }, action);
    expect(state).toEqual({});
});
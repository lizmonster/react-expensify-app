import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount' // default to amount
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'foo' });
    expect(state.text).toBe('foo');
});

test('should set startDate filter', () => {
    const filterStartDate = moment().startOf('month');
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: filterStartDate });
    expect(state.startDate).toEqual(filterStartDate);
});

test('should set endDate filter', () => {
    const filterEndDate = moment().endOf('month');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: filterEndDate });
    expect(state.endDate).toEqual(filterEndDate);
});

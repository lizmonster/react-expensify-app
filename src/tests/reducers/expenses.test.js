import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
    const newExpense = {
        id: '99',
        description: 'Zoidberg',
        note: 'note!',
        amount: 19500,
        createdAt: 0
    };
    const action = { 
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], newExpense]);

});

test('should edit an expense', () => {
    const note = 'This is a new note.';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note);
});

test('should not edit expense if expense not found', () => {
    const note = 'This is a new note.';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const newExpenses = [{
        id: '99',
        description: 'Zoidberg',
        note: 'note!',
        amount: 19500,
        createdAt: 0
    },
    {
        id: '98',
        description: 'Dexter',
        note: 'note!',
        amount: 19600,
        createdAt: 0
    }];
    const action = {
        type: 'SET_EXPENSES',
        expenses: [newExpenses]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([newExpenses]);
    // dispatch an action
    // expenses passed in should equal expenses in state
    // should have some initial expenses
    // new ones for action object
});
// Rendered above filter
// expenseCount prop, expensesTotal prop - connect to store
// both selectors needed

// Tests
// One expense or multiple expenses or none
// Format expense total using numeraljs

// Display should change with filters

import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ numberOfExpenses, totalExpenses }) => {
    
    const expensesWord = numberOfExpenses > 1 ? 'expenses' : 'expense';
    const totalExpensesFormatted = numeral(totalExpenses / 100).format('$0,0.00');

    return (
        <div>
            {
                numberOfExpenses === 0 ? (
                    <h1>Viewing 0 expenses</h1>
                ) :
                    (
                        <h1>Viewing { numberOfExpenses } { expensesWord } totalling { totalExpensesFormatted }</h1>
                    )
            }

        </div>
    )
};

const mapStateToProps = (state) => {
    const allExpenses = selectExpenses(state.expenses, state.filters);

    return {
        numberOfExpenses: allExpenses.length,
        totalExpenses: expensesTotal(allExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

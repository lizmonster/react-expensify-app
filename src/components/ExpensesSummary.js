// Rendered above filter
// expenseCount prop, expensesTotal prop - connect to store
// both selectors needed

// Tests
// One expense or multiple expenses or none
// Format expense total using numeraljs

// Display should change with filters

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ numberOfExpenses, totalExpenses }) => {

    const expensesWord = numberOfExpenses > 1 ? 'expenses' : 'expense';
    const totalExpensesFormatted = numeral(totalExpenses / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                {
                    numberOfExpenses === 0 ? (
                        <h1 className="page-header__title">Viewing <span>0</span> expenses</h1>
                    ) :
                        (
                            <h1 className="page-header__title">Viewing <span>{ numberOfExpenses }</span> {expensesWord} totalling <span>{ totalExpensesFormatted }</span></h1>
                        )
                }
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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

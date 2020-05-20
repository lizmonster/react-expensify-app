import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import RemoveModal from './RemoveModal';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        removingExpense: undefined
    }
    handleRemoveExpense = (expense) => {
        this.setState(() => ({ removingExpense: true }));
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    };
    onRemove = () => {
        this.setState(() => ({
            removingExpense: undefined
        }));
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/dashboard');
    };
    onDismiss = () => {
        this.setState(() => ({
            removingExpense: undefined
        }));
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.handleRemoveExpense}>Remove Expense</button>
                </div>
                <RemoveModal 
                    expenseName={this.props.expense.description}
                    removingExpense={this.state.removingExpense}
                    handleRemove={this.onRemove}
                    onDismiss={this.onDismiss} 
                />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
        removingExpense: state.removingExpense
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

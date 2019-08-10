import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    const {
        expense = { id: '' },
        dispatch,
        history
    } = props;

    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(updatedExpense) => {
                    dispatch(editExpense(expense.id, updatedExpense));
                    history.push('/');
                }}
            />
            <button onClick={() => {
                dispatch(removeExpense(expense));
                history.push('/');
            }}>
                Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(({ id }) => id === props.match.params.id),
    }
};

export default connect(mapStateToProps)(EditExpensePage);
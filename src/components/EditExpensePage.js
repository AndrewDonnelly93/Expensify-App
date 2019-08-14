import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  const {
    expense = { id: '' },
    dispatch,
    history,
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
      <button
        type="button"
        onClick={() => {
          dispatch(removeExpense(expense));
          history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

EditExpensePage.propTypes = {
  expense: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(({ id }) => id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);

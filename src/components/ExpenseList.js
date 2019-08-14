import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  const { expenses } = props;
  return (
    <div>
      <h1>Expense List</h1>
      {expenses.map((expense) => <ExpenseListItem key={expense.id} expense={expense} />)}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseList);

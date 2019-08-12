import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Expense = (props) => {
  const {
    expense: {
      description, amount, createdAt, id,
    },
  } = props;
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount}
        {' '}-{' '}
        {createdAt}
      </p>
    </div>
  );
};

Expense.propTypes = {
  expense: PropTypes.object
};

export default Expense;

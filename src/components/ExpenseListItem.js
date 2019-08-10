import React from 'react';
import { Link } from 'react-router-dom';

const Expense = (props) => {
    const { expense: { description, amount, createdAt, id } } = props;
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>
        </div>
    )
};

export default Expense;
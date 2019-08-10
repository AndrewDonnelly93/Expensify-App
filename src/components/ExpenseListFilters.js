import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
    const { filters: { text, sortBy }, dispatch } = props;

    return (
        <div>
            <input
                type='text'
                value={text}
                onChange={
                    (e) => dispatch(setTextFilter(e.target.value))
                }
            />
            <select
                value={sortBy}
                onChange={(e) => {
                    if (e.target.value === 'date') {
                        dispatch(sortByDate());
                    }
                    if (e.target.value === 'amount') {
                        dispatch(sortByAmount());
                    }
                }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);
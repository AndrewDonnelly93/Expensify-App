import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
    setTextFilter, sortByAmount,
    sortByDate, setStartDate, setEndDate
} from '../actions/filters';

class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        const { dispatch } = this.props;
        dispatch(setStartDate(startDate));
        dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        const {
            filters:
                { text, sortBy, startDate, endDate },
            dispatch
        } = this.props;

        const { calendarFocused } = this.state;

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
                <DateRangePicker
                    startDateId='start_date_input'
                    endDateId='end_date_input'
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);
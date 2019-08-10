import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        const {
            expense = {},
            expense:
                {
                    description = '', note = '', amount = '', createdAt = moment()
                } = {}
        } = props;

        this.state = {
            type: !Object.keys(expense).length ? 'Add' : 'Edit',
            description: description || '',
            note: note || '',
            amount: amount.toString() || '',
            createdAt: moment(createdAt) || moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        // Amount should contain only numbers and
        // optionally two characters after the point
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        createdAt && this.setState(() => ({ createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { description, amount, note, createdAt } = this.state;

        if (!description || !amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description,
                amount: parseFloat(amount),
                createdAt: createdAt.valueOf(),
                note
            });
        }
    };

    render() {
        const {
            type,
            description,
            note,
            amount,
            createdAt,
            calendarFocused,
            error
        } = this.state;

        return (
            <div>
                {error && <p>{error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        value={description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        type='text'
                        value={amount}
                        onChange={this.onAmountChange}
                        placeholder='Amount'
                    />
                    <SingleDatePicker
                        date={createdAt}
                        onDateChange={this.onDateChange}
                        focused={calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense (optional)'
                        value={note}
                        onChange={this.onNoteChange}
                    />
                    <button>{type} Expense</button>
                </form>
            </div>
        )
    }
}
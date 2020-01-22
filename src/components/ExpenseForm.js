import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state = {
        description: "",
        amount: "",
        note: "",
        createdAt: moment(),
        focused: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        this.setState(() => ({amount}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            amount: this.state.amount,
            note: this.state.note,
            createdAt: this.state.createdAt.format('L')
        })
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input type="text" placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}/>
                    <input type="number" placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={date => this.setState({ createdAt: date })} 
                        focused={this.state.focused} 
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        numberOfMonths={1} 
                        isOutsideRange={() => false}/>
                    <textarea placeholder="Add note for expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
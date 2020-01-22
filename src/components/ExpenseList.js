import React from 'react';
import ExpensesListItem from './ExpensesListItem';
import { connect } from 'react-redux';
import filteredData from '../selectors/filteredExpensesData';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpensesListItem {...expense} key={expense.id} />;
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: filteredData(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);


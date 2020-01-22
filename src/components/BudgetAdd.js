import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/ExpenseActions'

const BudgetAdd =(props) => (
    <div>Budget Snob Add
    <ExpenseForm onSubmit={(expense) => {     
        props.dispatch(addExpense(expense));  
        props.history.push('/')      
    }}/>
    </div>
)

export default connect()(BudgetAdd);
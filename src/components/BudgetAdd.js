import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/ExpenseActions'

const BudgetAdd =(props) => (
    <div>Budget Snob Add
    <ExpenseForm onSubmit={(expense) => {     
        props.dispatch(startAddExpense(expense));  
        props.history.push('/dashboard')      
    }}/>
    </div>
)

export default connect()(BudgetAdd);
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilterInput from './ExpenseFilterInput'

const BudgetSnobHome =() => (
    <div>
        <ExpenseFilterInput/>
        <ExpenseList />
    </div>
)

export default BudgetSnobHome;
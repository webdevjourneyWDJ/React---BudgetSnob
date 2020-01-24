import React from 'react';
import{connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/ExpenseActions'

const BudgetEdit =(props) => {
    return (
    <div>Budget Snob Edit
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');              
            }}    
        />
    </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(BudgetEdit);
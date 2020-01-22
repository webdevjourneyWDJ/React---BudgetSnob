import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/ExpenseActions'


const ExpensesListItem = ({id, description, note, amount, createdAt, dispatch}) => (
        <div>
            <h3>{description} - {createdAt}</h3>
            <p>Amount: ${amount}</p>
            {note && <p>Note: {note}</p>}
            <button onClick={() => {
                dispatch(removeExpense({id}))
            }}>Remove</button>
        </div>
    )

export default connect()(ExpensesListItem);
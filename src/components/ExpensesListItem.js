import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startRemoveExpense} from '../actions/ExpenseActions'


const ExpensesListItem = ({id, description, note, amount, createdAt, dispatch}) => (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description} - {createdAt}</h3>
            </Link>
            <p>Amount: ${amount}</p>
            {note && <p>Note: {note}</p>}
            <button onClick={() => {
                dispatch(startRemoveExpense({id}))
            }}>Remove</button>
        </div>
    )

export default connect()(ExpensesListItem);
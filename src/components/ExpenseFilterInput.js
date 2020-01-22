import React from 'react';
import {connect} from 'react-redux';
import {setKeywordFilter, sortByAmount, sortByDate} from '../actions/filterActions'

const ExpenseFilterInput = (props) => (
    <div>
        <input type="text" value={props.filters.keyword} onChange={(e)=>{
            props.dispatch(setKeywordFilter(e.target.value))
        }}/>
        <select value={props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value === 'date'){
                    props.dispatch(sortByDate());
                }else if(e.target.value === 'amount'){
                    props.dispatch(sortByAmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseFilterInput)
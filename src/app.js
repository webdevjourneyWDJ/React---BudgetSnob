import React from 'react';
import ReactDOM from 'react-dom';
import budgetStore from './store/budegetStore';
import {addExpense, removeExpense, editExpense} from './actions/ExpenseActions'
import {setKeywordFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from './actions/filterActions'
import moment from 'moment';
import Routes from './routers/Router';
import "./styles/styles.scss";

const store = budgetStore();

const getFilteredData = (expenses, filters) => {
    return expenses.filter((expense) => {
        const isDateRange = moment(expense.createdAt).isBetween(filters.startDate, filters.endDate)
        const keywordFound = expense.description.toLowerCase().includes(filters.keyword.toLowerCase())

        return isDateRange && keywordFound
    }).sort((a, b) => {
        if(filters.sortBy === "date"){
           return moment(b.createdAt) - moment(a.createdAt)
        }else if( filters.sortBy === "amount"){
            return b.amount < a.amount ? 1 : -1
        }
    })
}

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const data = getFilteredData(state.expenses, state.filters)

    console.log(data);    
})

const ex1 = store.dispatch(addExpense({description: "truck rental", amount: "100", createdAt: moment().add(5, 'day').format('L')}))
const ex2 = store.dispatch(addExpense({description: "Coffee", amount: "16", note: "this is per bag", createdAt: moment().add(9, 'day').format('L')}))

// store.dispatch(removeExpense({id: ex1.expense.id}))

// store.dispatch(editExpense(ex2.expense.id, {amount: 14}))

// store.dispatch(setKeywordFilter('rent'))
// store.dispatch(setKeywordFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(moment().format('L')))
store.dispatch(setEndDate(moment().add(10, 'day').format('L')))

ReactDOM.render(<Routes />, document.getElementById('app'));




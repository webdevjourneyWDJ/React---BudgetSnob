import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import budgetStore from './store/budegetStore';
import {addExpense, removeExpense, editExpense} from './actions/ExpenseActions'
import {setKeywordFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from './actions/filterActions'
import getFilteredData from './selectors/filteredExpensesData'; 
import moment from 'moment';
import Routes from './routers/Router';
import "./styles/styles.scss";

const store = budgetStore();

const ex1 = store.dispatch(addExpense({description: "truck rental", amount: "100", createdAt: moment().add(5, 'day').format('L')}))
const ex2 = store.dispatch(addExpense({description: "Coffee", amount: "16", note: "this is per bag", createdAt: moment().add(9, 'day').format('L')}))

// store.dispatch(removeExpense({id: ex1.expense.id}))

// store.dispatch(editExpense(ex2.expense.id, {amount: 14}))

// store.dispatch(setKeywordFilter('rent'))
// store.dispatch(setKeywordFilter())

// store.dispatch(sortByAmount())
store.dispatch(sortByDate())

store.dispatch(setStartDate(moment().format('L')))
store.dispatch(setEndDate(moment().add(100, 'day').format('L')))

const state = store.getState();
const data = getFilteredData(state.expenses, state.filters)

console.log(data);    

const storeProvider = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(storeProvider, document.getElementById('app'));




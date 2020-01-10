import React from 'react';
import ReactDOM from 'react-dom';
import budgetStore from './store/budegetStore';
import {addExpense, removeExpense, editExpense} from './actions/ExpenseActions'
import {setKeywordFilter} from './actions/filterActions'
import Routes from './routers/Router';
import "./styles/styles.scss";

const store = budgetStore();

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

const ex1 = store.dispatch(addExpense({description: "truck rental", amount: "100"}))
const ex2 = store.dispatch(addExpense({description: "Coffee", amount: "16", note: "this is per bag"}))

store.dispatch(removeExpense({id: ex1.expense.id}))

store.dispatch(editExpense(ex2.expense.id, {amount: 14}))

store.dispatch(setKeywordFilter('coffee'))
store.dispatch(setKeywordFilter())

ReactDOM.render(<Routes />, document.getElementById('app'));




import React from 'react';
import ReactDOM from 'react-dom';
import budgetStore from './store/budegetStore';
import {increment, decrement, reset, set} from './actions/counterActions'
import Routes from './routers/Router';
import "./styles/styles.scss";

const store = budgetStore();

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment({incBy: 10}));

store.dispatch(decrement());

store.dispatch(increment());

store.dispatch(decrement({decBy: 5}));

store.dispatch(reset());

store.dispatch(set({setBy: 100}));

ReactDOM.render(<Routes />, document.getElementById('app'));




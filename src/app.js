import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import budgetStore from './store/budegetStore';
import Routes from './routers/Router';
import {startSetExpenses} from './actions/ExpenseActions';
import "./styles/styles.scss";
import {firebase} from './firebase/firebase';

const store = budgetStore();

const storeProvider = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(<p>Lodaing...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(storeProvider, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('Logged IN');        
    }else{
        console.log('Logged OUT'); 
    }
})


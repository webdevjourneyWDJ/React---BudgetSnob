import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import budgetStore from './store/budegetStore';
import Routes, {history} from './routers/Router';
import {startSetExpenses} from './actions/ExpenseActions';
import {login, logout} from './actions/auth'
import "./styles/styles.scss";
import {firebase} from './firebase/firebase';

const store = budgetStore();

const storeProvider = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(storeProvider, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Lodaing...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });       
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/') 
    }
})


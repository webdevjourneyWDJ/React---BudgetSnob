import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenesesReducer';
import filterReducer from '../reducers/filterReducer';
import authReducer from '../reducers/authReducer';


export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filterReducer,
        auth: authReducer        
    }),
    applyMiddleware(thunk));

    return store
}
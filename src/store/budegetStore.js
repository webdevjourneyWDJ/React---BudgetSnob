import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expenesesReducer';
import filterReducer from '../reducers/filterReducer';
import thunk from 'redux-thunk';


export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filterReducer        
    }),
    applyMiddleware(thunk));

    return store
}
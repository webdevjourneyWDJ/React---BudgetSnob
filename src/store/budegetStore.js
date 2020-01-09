import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenesesReducer';
import filterReducer from '../reducers/filterReducer';

const stateDemo = {
    expenses:[{
        id: '123sdf4sdf231',
        description: 'Rental Truck',
        note: "becuase it was a cyber truck",
        amount: "1",
        createdAt: 0
    }],
    filters: {
        keyword: "rent",
        sortby: "amount",
        startDate: undefined,
        endDate: undefined
    }
}


export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
        
    }));

    return store
}
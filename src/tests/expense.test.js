import {addExpense, editExpense, removeExpense} from '../actions/ExpenseActions';
import moment from 'moment'

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: 'abc123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "abc123"
    })
})

test('Should setup edit expense action object',  () => {
   const action = editExpense('abc123', {note: "jest expense update test"}) ;
   expect(action).toEqual({
       type:'EDIT_EXPENSE',
       id: 'abc123',
       updates: {
        note: "jest expense update test"
       }
   })
})

test('Should setup add expense action object (values provided)',  () => {
    const expenseData = {
        description: "Coffee",
        amount: 100,
        createdAt: moment(),
        note: "Love Coffee"
    }
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
 })

 test('Should setup add expense action object (default values)',  () => {
    const action = addExpense();

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})
 
import {setStartDate, setEndDate, setKeywordFilter, sortByAmount, sortByDate} from '../actions/filterActions';
import moment from 'moment'

test('should generate set start data action object',  ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test('should generate set end data action object',  ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})

test('should generate set keyword data action object',  ()=>{
    const keyword = "this is my keyword"
    const action = setKeywordFilter(keyword);
    expect(action).toEqual({
        type: "SET_KEYWORD_FILTER",
        keyword
    })
})

test('should generate set keyword data action object',  ()=>{
    const keyword = "this is my keyword"
    const action = setKeywordFilter(keyword);
    expect(action).toEqual({
        type: "SET_KEYWORD_FILTER",
        keyword
    })
})

test('should generate set keyword data action object (default value)',  ()=>{
    const action = setKeywordFilter();
    expect(action).toEqual({
        type: "SET_KEYWORD_FILTER",
        keyword: ''
    })
})

test('should generate action object for sort by amount',  ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test('should generate action object for sort by date',  ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})
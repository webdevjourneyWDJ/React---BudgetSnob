export const setKeywordFilter = (keyword = "") => {
    return{
        type: "SET_KEYWORD_FILTER",
        keyword
    }
}

export const sortByAmount = () => {
    return{
        type: "SORT_BY_AMOUNT"
    }
}

export const sortByDate = () => {
    return{
        type: "SORT_BY_DATE"
    }
}

export const setStartDate = (startDate) => {
    return{
        type: "SET_START_DATE",
        startDate
    }
}

export const setEndDate = (endDate) => {
    return{
        type: "SET_END_DATE",
        endDate
    }
}
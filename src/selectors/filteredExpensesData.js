import moment from 'moment'

export default (expenses, filters) => {
    return expenses.filter((expense) => {
        const isDateRange = moment(expense.createdAt).isBetween(filters.startDate, filters.endDate)
        const keywordFound = expense.description.toLowerCase().includes(filters.keyword.toLowerCase())

        if(filters.startDate === null && filters.endDate === null) return keywordFound
        else return isDateRange && keywordFound
    }).sort((a, b) => {
        if(filters.sortBy === "date"){
           return moment(b.createdAt) - moment(a.createdAt)
        }else if( filters.sortBy === "amount"){
            return b.amount < a.amount ? 1 : -1
        }
    })
}
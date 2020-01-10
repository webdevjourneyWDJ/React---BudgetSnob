const filterDefault = {
    keyword: "",
    sortby: "amount",
    startDate: undefined,
    endDate: undefined
}

export default (state = filterDefault, action) => {
    switch(action.type){        
        case "SET_KEY_WORD_FILTER":
              return {
                  ...state,
                  keyword: action.keyword
              }
        default:
            return state
    }
    
}
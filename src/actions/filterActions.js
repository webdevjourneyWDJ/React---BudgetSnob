export const setKeywordFilter = (keyword = "") => {
    return{
        type: "SET_KEY_WORD_FILTER",
        keyword
    }
}
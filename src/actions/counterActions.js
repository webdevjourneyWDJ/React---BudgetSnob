export const increment = ({incBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incBy
    }
}

export const decrement = ({decBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decBy
    }
}

export const set = ({setBy}) => {
    return {
        type: 'SET',
        setBy
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}
const initialState = {
    results: []
}

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_PAYMENT':
            return {...state, results: action.payload}
        default:
            return state
    }
}

export default paymentReducer

let myState = {
    products: []
}

const cartReducer = (state = myState, action) => {
    switch (action.type) {
        case 'ADDITEM': {
            return {
                ...state,
                products: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export default cartReducer;

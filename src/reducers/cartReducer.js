let items = JSON.parse(localStorage.getItem('cart')) || []

let myState = {
    products: JSON.parse(localStorage.getItem('cart')) || [],
    count: items.length
}

const cartReducer = (state = myState, action) => {
    switch (action.type) {

        case 'ADDITEM': {
            return {
                ...state,
                products: action.payload,
                count: action.payload.length
            }
        }

        case 'INCPRODUCTCOUNT': {

            return {
                ...state,
                products: action.payload
            }

        }
        case 'DECPRODUCTCOUNT': {

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

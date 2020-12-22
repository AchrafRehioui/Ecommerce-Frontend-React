let items = JSON.parse(localStorage.getItem('cart')) || []

let myState = {
    products: JSON.parse(localStorage.getItem('cart')) || [],
    count: items.reduce((total, product) => total + product.count, 0)
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
                products: action.payload,
                count: state.count + 1
            }

        }
        case 'DECPRODUCTCOUNT': {

            return {
                ...state,
                products: action.payload,
                count: state.count - 1

            }

        }

        default: {
            return state
        }
    }
}

export default cartReducer;

const initialState = {
    products: {},
};

export const randomProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RANDOM_PRODUCTS": return { ...state, products: action.payload };
        default: return state;
    }
};

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECTED_PRODUCTS": return { ...state, products: action.payload };
        default: return state;
    }
};
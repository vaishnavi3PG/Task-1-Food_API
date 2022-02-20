export const randomProducts = (products) => {
    return {
        type: 'RANDOM_PRODUCTS',
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: 'SELECTED_PRODUCTS',
        payload: product
    }
}
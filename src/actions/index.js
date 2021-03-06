import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const CHANGE_PRICE = 'CHANGE_PRICE';
export const DELETE_ITEM = 'DELETE_ITEM';

const ROOT_URL = 'https://5999735fb11cfa001161a8a2.mockapi.io/';

export function fetchItems() {
    return {
        type: FETCH_ITEMS,
        payload: axios.get(`${ROOT_URL}/cartItem`)
    }
}

export function changePrice(price) {
    return {
        type: CHANGE_PRICE,
        payload: price
    }
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: axios.delete(`${ROOT_URL}/cartItem/${id}`)
    }
}
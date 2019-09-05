import { CHECKOUT, REMOVE_ALL, REMOVE_ONE, ADD_TOCART } from "./action-type";

export function addToCart(payload) {
    return { type: ADD_TOCART, payload }
};
export function removeOne(payload) { return { type: REMOVE_ONE, payload } };
export function removeAll(payload) { return { type: REMOVE_ALL, payload } };
export function checkOut() { return { type: CHECKOUT } };
import { CHECKOUT, REMOVE_ALL, REMOVE_ONE, ADD_TOCART } from "./action-type";

export function addToCart() {
    return { type: ADD_TOCART } 
};
export function removeOne() { return { type: REMOVE_ONE } };
export function removeAll() { return { type: REMOVE_ALL } };
export function checkOut() { return { type: CHECKOUT } };
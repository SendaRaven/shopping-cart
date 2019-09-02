import jsonShopData from "../../shopInventory.json"
import { ADD_TOCART, CHECKOUT, REMOVE_ALL, REMOVE_ONE } from "./action-type"

const initialState = {
    shopData: {
        shopInventory: jsonShopData,
        availableStatus: "Add to cart"
    },
    shoppingCartData: {
        shoppingCartItems: [
            {
                "id": 1,
                "title": "(Test data) iPad 4 Mini",
                "price": 500.01,
                "inventory": 2,
                "count": 5,
            },
            {
                "id": 2,
                "title": "H&M T-Shirt White",
                "price": 10.99,
                "inventory": 10,
                "count": 2,
            },
        ],
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_TOCART:
            return { ...state, ...payload }
        case REMOVE_ONE:
            return { ...state, ...payload }
        case REMOVE_ALL:
            return { ...state, ...payload }
        case CHECKOUT:
            return { ...state, ...payload }

        default:
            return state
    }
}

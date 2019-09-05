import jsonShopData from "../../shopInventory.json"
import { ADD_TOCART, CHECKOUT, REMOVE_ALL, REMOVE_ONE } from "./action-type"

const initialState = {
    shopData: {
        shopInventory: jsonShopData,
    },
    shoppingCartData: {
        shoppingCartItems: [

        ],
    }
};

export default (state = initialState, { type, payload, }) => {

    function updateObjectInShopArray(array, payload) {
        console.log(payload);

        return array.map((item, index) => {
            console.log(index, payload.id - 1);
            console.log(item);

            if (index !== payload.id - 1) {
                // This isn't the item we care about - keep it as-is
                return item
            }
            // Otherwise, this is the one we want - return an updated value
            return {
                ...item,
                ...item.inventory = item.inventory - 1
            }
        })
    }
    function updateObjectInCartArray(array, payload) {
        return (
            array.map((item, index) => {
            if (index !== payload.id - 1) {
                return item
            }
        })

        )
    }

    switch (type) {

        case ADD_TOCART:



            return {
                ...state,
                shopData: {
                    shopInventory: updateObjectInShopArray(state.shopData.shopInventory, ...payload)
                },
                shoppingCartData: {
                    shoppingCartItems: updateObjectInCartArray(state.shoppingCartData.shoppingCartItems, payload)



                }
            };
        case REMOVE_ONE:
            return { ...state, ...payload }
        case REMOVE_ALL:
            return { ...state, ...payload }
        case CHECKOUT:
            return {
                ...state, shoppingCartData: {
                    shoppingCartItems: []
                }
            }

        default:
            return state
    }
}

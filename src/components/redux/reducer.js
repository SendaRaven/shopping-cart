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

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_TOCART:
            
            return { ...state, 
                shopData:{
                shopInventory:[...state.shopData.shopInventory {...state.shopData.shopInventory : state.invetory-1}]
            },
            shoppingCartData:{
                shoppingCartItems:[
                ...state.shoppingCartData.shoppingCartItems, {
                    ...payload, count: (state.count===undefined)? 1 : state.count+1
                }
                 
            ]}};
        case REMOVE_ONE:
            return { ...state, ...payload }
        case REMOVE_ALL:
            return { ...state, ...payload }
        case CHECKOUT:
            return { ...state, shoppingCartData:{
                shoppingCartItems:[]
            } }

        default:
            return state
    }
}

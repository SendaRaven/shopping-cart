import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    state = {
        itemsInShoppingCart: [{
            "id": 1,
            "title": "iPad 4 Mini",
            "price": 500.01,
            "inventory": 2
        }]
    }

    render() {
        return (
            <div className="h-25">
                <h2>ShoppingCart</h2>
                <ul className="h-75 d-flex flex-column justify-content-around unstyled">
                    {this.state.itemsInShoppingCart.map((item, id) =>
                        <li key={id}>
                            <div>{item.title}|${item.price}|x{item.inventory}</div>
                            <input type="button" value="Remove one" className="w-25 border border-secondary rounded " /> <input type="button" value="Remove all" className="w-25 border border-secondary rounded " />
                        </li>
                    )}
                </ul>
                <h3>Total ${}</h3>
                <input type="button" value="Checkout" />
            </div>
        )
    }
}

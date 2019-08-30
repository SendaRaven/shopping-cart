import React, { Component } from 'react'
// import jsonShopData from "./components/shopInventory.json"
// console.log("Original", jsonShopData);


export default class Shop extends Component {
    shopData = [
        {
            "id": 1,
            "title": "iPad 4 Mini",
            "price": 500.01,
            "inventory": 2
        },
        {
            "id": 2,
            "title": "H&M T-Shirt White",
            "price": 10.99,
            "inventory": 10
        },
        {
            "id": 3,
            "title": "Charli XCX - Sucker CD",
            "price": 19.99,
            "inventory": 5
        }
    ];

    render() {
        return (
            <div className="h-50 border-bottom" >
                <h2>Shop</h2>
                <ul className="h-100 d-flex flex-column justify-content-around">
                    {this.shopData.map((item, id) => (


                        <li key={id} className="d-flex flex-column justify-content-between">
                            <div>{item.title}|${item.price}|x{item.inventory}</div>
                            <button/*  onClick={} */ className="min-w-25 border border-secondary rounded ">Add to cart{}</button>
                        </li>)
                    )}
                </ul>
            </div>
        )
    }
}

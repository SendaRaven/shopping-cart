import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from "./redux/action";
import ShopProduct from './ShopProduct';




class Shop extends Component {

    // shopData = [
    //     {
    //         "id": 1,
    //         "title": "iPad 4 Mini",
    //         "price": 500.01,
    //         "inventory": 2
    //     },
    //     {
    //         "id": 2,
    //         "title": "H&M T-Shirt White",
    //         "price": 10.99,
    //         "inventory": 10
    //     },
    //     {
    //         "id": 3,
    //         "title": "Charli XCX - Sucker CD",
    //         "price": 19.99,
    //         "inventory": 5
    //     }
    // ];

    render() {
        return (
            <div className="h-50 border-bottom" >
                <h2>Shop</h2>
                <ul className="h-75 d-flex flex-column justify-content-around">
                    {this.props.shopData.shopInventory.map((item) =>
                        <ShopProduct item={item} key={item.id} addToCart={this.props.addToCart} />
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    shopData: state.shopData,

    // id: state.id,
    // title: state.title,
    // price: state.price,
    // inventory: state.inventory

});

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)

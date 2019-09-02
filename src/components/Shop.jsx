import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from "./redux/action";




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
                    {this.props.shopData.shopInventory.map((item, id) => (


                        <li key={id} className="d-flex flex-column justify-content-between">
                            <div>{item.title}|${item.price}|x{item.inventory}</div>
                            <input type="button" onClick={this.props.addToCart} className="w-auto border border-secondary rounded " value={this.props.shopData.availableStatus}/>
                        </li>)
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
shopData : state.shopData,

// id: state.id,
// title: state.title,
// price: state.price,
// inventory: state.inventory

});

const mapDispatchToProps = (dispatch) => ({
addToCart: () => dispatch(addToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)

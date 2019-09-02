import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeAll, removeOne, checkOut} from "./redux/action";

class ShoppingCart extends Component {


    render() {
        return (
            <div className="h-25">
                <h2>ShoppingCart</h2>
                <ul className="h-75 d-flex flex-column justify-content-around unstyled">
                    {this.props.shoppingCartData.shoppingCartItems.map((item, id) =>
                        <li key={id}>
                            <div>{item.title}|${item.price}|x{item.count}</div>
                            <input type="button" value="Remove one" className="w-25 border border-secondary rounded " onClick={this.props.removeOne}/> <input type="button" value="Remove all" className="w-25 border border-secondary rounded" onClick={this.props.removeAll}/>
                        </li>
                    )}
                </ul>
                <h3>Total ${this.props.shoppingCartData.shoppingCartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0)}</h3>
                <input type="button" className="border rounded border-secondary" onClick={this.props.checkOut} value="Checkout" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    shoppingCartData: state.shoppingCartData,
});

const mapDispatchToProps = (dispatch) => ({
removeOne: () => dispatch(removeOne()),
removeAll: () => dispatch(removeAll()),
checkOut: () => dispatch(checkOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
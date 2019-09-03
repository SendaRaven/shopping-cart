import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeAll, removeOne, checkOut} from "./redux/action";
import CartItem from './CartItem';
import CheckOut from './CheckOut';

class ShoppingCart extends Component {


    render() {
        return (
            <div className="h-25">
                <h2>ShoppingCart</h2>
                <ul className="h-75 d-flex flex-column justify-content-around unstyled">
                    {this.props.shoppingCartData.shoppingCartItems.map((item) =>
                    
                       <CartItem key={item.id} item={item} removeOne={this.props.removeOne} removeAll={this.props.removeAll}/>
                    )}
                </ul>
                <CheckOut shoppingCartData={this.props.shoppingCartData} checkOut={this.props.checkOut}/>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    shoppingCartData: state.shoppingCartData,
});

const mapDispatchToProps = {
removeOne,
removeAll,
checkOut
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
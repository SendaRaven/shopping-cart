import React, { Component, Fragment } from 'react'

export default class CheckOut extends Component {
    render() {
        return (
            <Fragment>
                 <h3>Total ${this.props.shoppingCartData.shoppingCartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0)}</h3>
                <input type="button" className="border rounded border-secondary" onClick={() => this.props.checkOut()} value="Checkout" />
            </Fragment>
        )
    }
}

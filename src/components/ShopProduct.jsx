import React, { Component, Fragment } from 'react'

export default class ShopProduct extends Component {
    render() {
        return (
            <Fragment>
                <li  className="d-flex flex-column justify-content-between">
                    <div>
                        {this.props.item.title}|
                            ${this.props.item.price}|
                            x{this.props.item.inventory}
                    </div>
                    <input
                        type="button"
                        onClick={()=> this.props.addToCart(this.props.item)}
                        className="w-auto border border-secondary rounded"
                        disabled={(this.props.item.inventory === 0)}
                        value={(this.props.item.inventory !== 0) ? "Add too cart" : "Sold out"}
                    />
                </li>
            </Fragment>
        )
    }
}

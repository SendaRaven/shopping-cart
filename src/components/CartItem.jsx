import React, { Component, Fragment } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <Fragment>
                <li>
                    <div>
                        {this.props.item.title}|
                            ${this.props.item.price}|
                            x{this.props.item.count}
                    </div>
                    <input
                        type="button"
                        value="Remove one"
                        className="w-25 border border-secondary rounded"
                        onClick={() => this.props.removeOne(this.props.item)}
                    />
                    <input
                        type="button"
                        value="Remove all"
                        className="w-25 border border-secondary rounded"
                        onClick={() => this.props.removeAll(this.props.item)}
                    />
                </li>
            </Fragment>
        )
    }
}

import React, { Component } from 'react'

export default class CounterGroupSum extends Component {
    render() {
        return (
            <div>
                <p>the sum: {this.props.sum}</p>
            </div>
        )
    }
}

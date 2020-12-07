import React, { Component } from 'react'

export default class CounterGroupSum extends Component {
    constructor(props){
        super(props);
        this.state = {
            sum: 0,
        }
    }
    
    render() {
        return (
            <div>
                <p>the sum: {this.props.sum}</p>
            </div>
        )
    }
}

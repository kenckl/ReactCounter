import React, { Component } from 'react'

export default class CounterGroupSizeGenerator extends Component {

    constructor(props){
        super(props);
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.props.updateCounterSize(event.target.value);
        this.props.reset();
    };
    

    render() {
        return (
            <div>
                <input type="number" onChange={this.onChange} />
            </div>
        )
    }
}

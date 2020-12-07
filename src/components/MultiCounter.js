import React, { Component } from 'react';
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";

export default class MultiCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: 0,
        };
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({size: event.target.value});
    };

    sumOfAll = (valueToAdd) => {
        this.setState((prevNumState) => ({
            sum: prevNumState.sum + valueToAdd
        }))
    };
    
    render() {
        const size = this.state.size;
        
        return (
            <div>
                <input type ="number" value={size} onChange={this.onChange} />
                <CounterGroupSum sum={this.state.sum}/>
                <CounterGroup size={size} sumOfAll={this.sumOfAll} />
            </div>
        );
    }
}

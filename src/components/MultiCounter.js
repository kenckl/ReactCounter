import React, { Component } from 'react';
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";

export default class MultiCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: 0,
            sum: 0
        };
    }

    onChange = (event) => {
        this.setState({size: event.target.value, sum:0});
    };

    sumOfAll = (valueToAdd) => {
        this.setState((prevNumState) => ({
            sum: prevNumState.sum + valueToAdd
        }));
    };
    
    render() {
        const size = this.state.size;
        const sum = this.state.sum;
        
        return (
            <div>
                <input type ="number" value={this.state.size} onChange={this.onChange} />
                <CounterGroupSum sum={this.state.sum}/>
                <CounterGroup size={this.state.size} sumOfAll={this.sumOfAll} />
            </div>
        );
    }
}

import React, { Component } from 'react';
import CounterContainer from "../containers/CounterContainer";

export default class CounterGroup extends Component {
    initArraySize = (size) => {
        const number = parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    };
    
    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(this.props.counterSize);

        return (
            <div>
                {initArraySize.map((value) => ( 
                    <CounterContainer key={value} size={size}/>
                ))}
            </div>
        );
    }
}

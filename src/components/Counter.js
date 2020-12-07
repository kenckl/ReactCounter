import React, { Component } from 'react';

export default class Counter extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            number: 0,
        };
    }

    onIncrease = () => {
        this.setState(prevState => (
            {number: prevState.number+1
            }), () => this.props.sumOfAll(1));
    };

    onDecrease = () => {
        this.setState(prevState => ({number: prevState.number-1
        }), () => this.props.sumOfAll(-1));
    };
    
    render() {
        return (
            <div>
                <input type="button" value="+" onClick={this.onIncrease} />
                {this.state.number}
                <input type="button" value="-" onClick={this.onDecrease} />
            </div>
        );
    }
}

import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    onIncrease = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }))
        this.props.increase();
    }

    onDecrease = () => {
        this.setState((prevState) => ({ number: prevState.number - 1 }))
        this.props.decrease();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.size !== this.props.size) {
          this.setState({ number: 0 });
        }
    }

    render() {
        const { number } = this.state;
        return (
            <div>
                <input type="button" value="+" onClick={this.onIncrease} />
                {number}
                <input type="button" value="-" onClick={this.onDecrease} />
            </div>
        );
    }
}

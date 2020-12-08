import React, { Component } from 'react';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';
import CounterGroupSizeGeneratorContainer from '../containers/CounterGroupSizeGeneratorContainer';

export default class MultiCounter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         size: 0,
    //         sum: 0
    //     };
    // }

    // onChange = (size) => {
    //     this.setState({size:size, sum: 0});
    // }

    // sumOfAll = (valueChange) => {
    //     this.setState((prevNumState) => ({
    //         sum: prevNumState.sum + valueChange
    //     }));
    // };

    render() {
        // const size = this.state.size;
        // const sum = this.state.sum;

        return (
            <div>
                <CounterGroupSizeGeneratorContainer />
                <CounterGroupSumContainer />
                <CounterGroupContainer />
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { updateCounterSize, resetSum } from '../action';
import CounterGroupSizeGenerator from '../components/CounterGroupSizeGenerator';

const mapDispatchToProps = (dispatch) => ({
    updateCounterSize: (size) => dispatch(updateCounterSize(size)),
    reset: () => { dispatch(resetSum()) }
});

const CounterGroupSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterGroupSizeGenerator);

export default CounterGroupSizeGeneratorContainer;
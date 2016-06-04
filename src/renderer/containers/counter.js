import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as counterActionCreators from '../actions/counter';

import CounterViewer from '../components/counterViewer';

class Counter extends Component {
  static get propTypes() {
    return {
      counter: PropTypes.number,
      increment: PropTypes.func,
      decrement: PropTypes.func,
      countdown: PropTypes.func
    };
  }

  render() {
    const {counter, increment, decrement, countdown} = this.props;
    return (
        <div id="counter">
          <CounterViewer counter={counter}/>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
          <button onClick={() => countdown(counter)}>Countdown</button>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counterReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(counterActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {increment, decrement} from '../actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <span>{this.props.state.counterReducer}</span>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
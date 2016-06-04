import React, {Component, PropTypes} from 'react';

export default class CounterViewer extends Component {
  static get propTypes() {
    return {
      counter: PropTypes.number.isRequired
    };
  }

  render() {
    return (
      <div id="counter-viewer">
        <span>
          {this.props.counter}
        </span>
      </div>
    );
  }
}

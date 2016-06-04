import test from 'ava';
import {actionTest} from 'redux-ava';

import * as counterAction from '../../src/renderer/actions/counter';

test('increment', actionTest(counterAction.increment, 1, {
  type: counterAction.INCREMENT,
  payload: 1
}));

test('decrement', actionTest(counterAction.decrement, 1, {
  type: counterAction.DECREMENT,
  payload: 1
}));

test('countdown', actionTest(counterAction.countdown, 5, function(){}));
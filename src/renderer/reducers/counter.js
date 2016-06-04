import {handleActions} from 'redux-actions';
import {INCREMENT, DECREMENT, COUNTDOWN} from '../actions/counter';

const initialState = 0;

export const counterReducer = handleActions({
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state > 0 ? state - 1 : state,
  [COUNTDOWN]: state => state
}, initialState);
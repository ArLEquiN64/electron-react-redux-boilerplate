import {handleActions} from 'redux-actions';
//import {INCREMENT, DECREMENT} from '../actions/counter';

const initialState = 0;

export const counterReducer = handleActions({
  ['INCREMENT']: (state) => state + 1,
  ['DECREMENT']: (state) => state - 1
}, initialState);
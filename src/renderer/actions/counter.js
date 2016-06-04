import {createAction} from 'redux-actions';

// ActionType
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const COUNTDOWN = 'COUNTDOWN';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const countdown = state => dispatch => {
  for (let i = state; i > 0; i--){
    setTimeout(() => dispatch(decrement()), i * 1000);
  }
};

import {createAction} from 'redux-actions';

// ActionType
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
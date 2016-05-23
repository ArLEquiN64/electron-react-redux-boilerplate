import {createAction} from 'redux-actions';

// ActionType
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
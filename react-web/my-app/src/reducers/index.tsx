// src/reducers/index.tsx

import { setTimerCountAction} from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_STARTING_COUNT, DECREMENT_STARTING_COUNT } from '../constants/index';

export function currentCountReducer(state: StoreState, action: setTimerCountAction): StoreState {
    // console.log(state.currentCount); 
    switch (action.type) { 
    case INCREMENT_STARTING_COUNT:
      return { ...state, currentCount: state.currentCount + 1 };
    case DECREMENT_STARTING_COUNT:
      return { ...state, currentCount: Math.max(0, state.currentCount - 1) };
  }
  return state;
}
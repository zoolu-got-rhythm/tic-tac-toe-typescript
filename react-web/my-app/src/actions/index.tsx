import * as constants from '../constants';

// action helpers
export interface Increment_starting_count {
    type: constants.INCREMENT_STARTING_COUNT;
}

export interface decrement_starting_count {
    type: constants.DECREMENT_STARTING_COUNT;
}

export type setTimerCountAction = Increment_starting_count | decrement_starting_count;

export function Increment_starting_count(): Increment_starting_count {
    return {
        type: constants.INCREMENT_STARTING_COUNT
    }
}

export function decrement_starting_count(): decrement_starting_count {
    return {
        type: constants.DECREMENT_STARTING_COUNT
    }
}
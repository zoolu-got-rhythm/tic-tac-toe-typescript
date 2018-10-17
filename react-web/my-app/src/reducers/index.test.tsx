import { currentCountReducer } from ".";
import { StoreState } from '../types';
import { INCREMENT_STARTING_COUNT, DECREMENT_STARTING_COUNT } from '../constants';
// import { stat } from 'fs';




describe("counter reducer test suite", (): void => {
    let mockInitialState: StoreState; 

    beforeEach(() => {
        mockInitialState = {
            currentCount: 5
        }
    }); 

    test('check initial state is correct', () => {
        let state: StoreState = currentCountReducer(mockInitialState, {type: INCREMENT_STARTING_COUNT}); 
        expect(state).toEqual({currentCount: 6});
    }); 
    
    test('check increment works', () => {
        let state: StoreState | null = mockInitialState; 
        for(let i: number = 0; i < 5; i++){
            state = currentCountReducer(
                state, 
                {type: INCREMENT_STARTING_COUNT}
            ); 
        }
            
        expect(state).toEqual({currentCount: 10});
    }); 
    
    test('check decrement works and doesn\'t produce negative numbers', () => {
        let state: StoreState | null = mockInitialState; 
        for(let i: number = 0; i < 20; i++){
            state = currentCountReducer(
                state, 
                {type: DECREMENT_STARTING_COUNT}); 
        }
    
        expect(state).toEqual({currentCount: 0});
    }); 
})


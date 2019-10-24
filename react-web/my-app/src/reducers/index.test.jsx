"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var constants_1 = require("../constants");
// import { stat } from 'fs';
describe("counter reducer test suite", function () {
    var mockInitialState;
    beforeEach(function () {
        mockInitialState = {
            currentCount: 5
        };
    });
    test('check initial state is correct', function () {
        var state = _1.currentCountReducer(mockInitialState, { type: constants_1.INCREMENT_STARTING_COUNT });
        expect(state).toEqual({ currentCount: 6 });
    });
    test('check increment works', function () {
        var state = mockInitialState;
        for (var i = 0; i < 5; i++) {
            state = _1.currentCountReducer(state, { type: constants_1.INCREMENT_STARTING_COUNT });
        }
        expect(state).toEqual({ currentCount: 10 });
    });
    test('check decrement works and doesn\'t produce negative numbers', function () {
        var state = mockInitialState;
        for (var i = 0; i < 20; i++) {
            state = _1.currentCountReducer(state, { type: constants_1.DECREMENT_STARTING_COUNT });
        }
        expect(state).toEqual({ currentCount: 0 });
    });
});
//# sourceMappingURL=index.test.jsx.map
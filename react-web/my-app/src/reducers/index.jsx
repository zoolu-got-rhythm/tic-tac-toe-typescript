"use strict";
// src/reducers/index.tsx
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../constants/index");
function currentCountReducer(state, action) {
    // console.log(state.currentCount); 
    switch (action.type) {
        case index_1.INCREMENT_STARTING_COUNT:
            return __assign({}, state, { currentCount: state.currentCount + 1 });
        case index_1.DECREMENT_STARTING_COUNT:
            return __assign({}, state, { currentCount: Math.max(0, state.currentCount - 1) });
    }
    return state;
}
exports.currentCountReducer = currentCountReducer;
//# sourceMappingURL=index.jsx.map
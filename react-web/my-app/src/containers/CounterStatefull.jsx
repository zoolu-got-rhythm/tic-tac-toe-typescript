"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CounterStatefull_1 = require("../CounterStatefull");
var actions = require("../actions/");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var currentCount = _a.currentCount;
    return {
        startingCount: currentCount,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: function () { return dispatch(actions.Increment_starting_count()); },
        onDecrement: function () { return dispatch(actions.decrement_starting_count()); },
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CounterStatefull_1.default);
//# sourceMappingURL=CounterStatefull.jsx.map
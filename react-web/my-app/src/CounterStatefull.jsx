"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import {Props} from "react";
var React = require("react");
// import {Props} from "react";
var HexGenerator_1 = require("./HexGenerator");
require("./CounterStatefull.css");
var COUNT_UP = "COUNT_UP";
var COUNT_DOWN = "COUNT_DOWN";
var CounterStatefull = /** @class */ (function (_super) {
    __extends(CounterStatefull, _super);
    function CounterStatefull(props) {
        var _this = _super.call(this, props) || this;
        if (props.startingCount !== undefined && props.startingCount < 0)
            throw new Error("starting count can't be a negative number");
        _this.state = {
            startingCount: props.startingCount || 0,
            isCounting: true,
            currentColour: HexGenerator_1.default({ range: 10 })
        };
        _this.timer = window.setInterval(function () {
            _this.setState({
                startingCount: _this.state.startingCount + 1,
                currentColour: HexGenerator_1.default({ range: 10 })
            });
        }, 1000);
        _this.start = _this.start.bind(_this);
        _this.stop = _this.stop.bind(_this);
        _this.changeCounterState = _this.changeCounterState.bind(_this);
        return _this;
    }
    CounterStatefull.prototype.toggleIsCountingState = function () {
        this.setState({ isCounting: !this.state.isCounting });
    };
    CounterStatefull.prototype.start = function () {
        var _this = this;
        if (!this.state.isCounting) {
            this.toggleIsCountingState();
            this.timer = window.setInterval(function () {
                _this.setState({
                    startingCount: _this.state.startingCount + 1,
                    currentColour: HexGenerator_1.default({ range: 10 })
                });
            }, 1000);
        }
    };
    CounterStatefull.prototype.stop = function () {
        if (this.state.isCounting) {
            this.toggleIsCountingState();
            window.clearInterval(this.timer);
        }
    };
    CounterStatefull.prototype.changeCounterState = function (upOrDown) {
        console.log("counting up or down");
        console.log(this.props.onDecrement);
        if (upOrDown === COUNT_UP)
            if (this.props.onIncrement)
                this.props.onIncrement();
        if (upOrDown === COUNT_DOWN)
            if (this.props.onDecrement)
                this.props.onDecrement();
    };
    CounterStatefull.prototype.render = function () {
        var _this = this;
        return (<div className="counterContainer">
                <button onClick={this.start}> start </button>
                <button onClick={this.stop}> stop </button>
                <button onClick={function () { return _this.changeCounterState(COUNT_UP); }}> 
                    + increment redux start count 
                </button> 
                <button onClick={function () { return _this.changeCounterState(COUNT_DOWN); }}> 
                    - increment redux start count 
                </button> 
                <h3 style={{ color: this.state.currentColour }}> {this.state.startingCount} </h3>
            </div>);
    };
    CounterStatefull.prototype.componentDidUpdate = function (prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.startingCount !== prevProps.startingCount) {
            var newCount = this.props.startingCount;
            this.setState({ startingCount: newCount });
        }
    };
    return CounterStatefull;
}(React.Component));
exports.default = CounterStatefull;
//# sourceMappingURL=CounterStatefull.jsx.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var CounterStatefull = /** @class */ (function (_super) {
    __extends(CounterStatefull, _super);
    function CounterStatefull(props) {
        var _this = _super.call(this, props) || this;
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
    CounterStatefull.prototype.render = function () {
        return (<div className="counterContainer">
                <button onClick={this.start}> start </button>
                <button onClick={this.stop}> stop </button>
                <h3 style={{ color: this.state.currentColour }}> {this.state.startingCount} </h3>
            </div>);
    };
    return CounterStatefull;
}(React.Component));
exports.default = CounterStatefull;
//# sourceMappingURL=CounterStatefull.jsx.map
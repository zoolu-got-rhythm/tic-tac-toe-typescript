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
var React = require("react");
require("./App.css");
// import logo from './logo.svg';
var DummyStateless_1 = require("./DummyStateless");
var CounterStatefull_1 = require("./CounterStatefull");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<div className="App">
        
          
          
        
        
          
        
          <DummyStateless_1.default stars={5}/>
          <CounterStatefull_1.default />
      </div>);
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.jsx.map
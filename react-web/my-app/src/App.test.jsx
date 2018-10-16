"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
it('renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(<App_1.default />, div);
    ReactDOM.unmountComponentAtNode(div);
});
//# sourceMappingURL=App.test.jsx.map
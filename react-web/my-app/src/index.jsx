"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
// import App from './App';
require("./index.css");
var registerServiceWorker_1 = require("./registerServiceWorker");
var redux_1 = require("redux");
var index_1 = require("./reducers/index");
// import { StoreState } from './types/index';
var CounterStatefull_1 = require("./containers/CounterStatefull");
var react_redux_1 = require("react-redux");
var store = redux_1.createStore(index_1.currentCountReducer, {
    currentCount: 16
});
ReactDOM.render(<react_redux_1.Provider store={store}>
    <CounterStatefull_1.default />
  </react_redux_1.Provider>, document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.jsx.map
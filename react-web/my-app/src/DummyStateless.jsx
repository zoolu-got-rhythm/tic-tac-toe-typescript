"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// stateless component
function DummyStateless(props) {
    var stars = props.stars;
    // @ts-ignore
    var t = window.setInterval(function () {
        stars++;
        var h2Tag = document.getElementById("stars");
        if (h2Tag != null) {
            h2Tag.innerText = stars.toString();
        }
    }, 1000);
    return (<h2 id="stars"> {stars} </h2>);
}
exports.default = DummyStateless;
tateless;
//# sourceMappingURL=DummyStateless.jsx.map
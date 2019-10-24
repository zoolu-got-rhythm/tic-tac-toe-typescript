"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme = require("enzyme");
var CounterStatefull_1 = require("./CounterStatefull");
// import Count
// import CounterStatefull from './CounterStatefull';
it('test enzyme works properly', function () {
    // const hello = enzyme.shallow(<div/>);
    // const instance = hello.instance() as any;
    // expect(instance.find(".counterContainer").childAt(2).text()).toEqual('0');
    var wrapper = enzyme.shallow(<div>
        <h1>Hello, Enzyme!</h1>
    </div>);
    expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/);
});
it('test CounterStatefull startS at 0', function () {
    // const hello = enzyme.shallow(<div/>);
    // const instance = hello.instance() as any;
    // expect(instance.find(".counterContainer").childAt(2).text()).toEqual('0');
    var wrapper = enzyme.shallow(<CounterStatefull_1.default />);
    // expect(wrapper.find(".counterContainer").first().findWhere(0).text()).toEqual("start");
    // expect(wrapper.first());
    // expect(wrapper.html()).toEqual("<div className=\"counterContainer\">\n" +
    //     "                <button onClick='this.start'> start </button>\n" +
    //     "                <button onClick='this.stop'> stop </button>\n" +
    //     "                <h3 style='color: this.state.currentColour}}> {this.state.startingCount} </h3>\n" +
    //     "            </div>")
    expect(wrapper.isEmpty()).toEqual(false);
    expect(wrapper.childAt(0).exists()).toEqual(true);
    expect(wrapper.childAt(3).exists()).toEqual(false);
    expect(wrapper.childAt(3).exists()).toEqual(false);
    expect(wrapper.childAt(3).exists()).toEqual(false);
    expect(wrapper.childAt(3).exists()).toEqual(false);
    expect(wrapper.childAt(0).text()).toMatch("start");
    expect(wrapper.childAt(1).text()).toMatch("stop");
    console.log("CHECKING TEXT");
    console.log(wrapper.childAt(4).debug());
    expect(wrapper.childAt(4).text()).toMatch(/[0-9]*/);
    // expect(wrapper.childAt(3).exists()).toEqual(true);
});
//# sourceMappingURL=CounterStatefull.test.jsx.map
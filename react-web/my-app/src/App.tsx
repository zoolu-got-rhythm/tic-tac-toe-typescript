import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import DummyStateless from './DummyStateless';
// import CounterStatefull from "./CounterStatefull";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
          <DummyStateless stars={5} />
          {/* <CounterStatefull /> */}
      </div>
    );
  }
}



export default App;

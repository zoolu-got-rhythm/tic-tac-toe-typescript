import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { currentCountReducer} from './reducers/index';
// import { StoreState } from './types/index';

import CounterStatefull from './containers/CounterStatefull'; 
import { Provider } from 'react-redux';

const store = createStore(currentCountReducer, {
  currentCount: 16
});


ReactDOM.render(
  <Provider store={store}>
    <CounterStatefull/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

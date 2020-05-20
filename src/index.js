import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux' // applyMiddleware用来管理中间件
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {counter} from './index.redux'
const reduxDevtools = window.devToolsExtension?window.devToolsExtension(): f=>f

const store = createStore(counter, compose(
  applyMiddleware(thunk), //开启thunk中间件
  reduxDevtools //通过compose把reduxDevtools工具和state结合
)) 

ReactDOM.render(
  <React.StrictMode>
    (<Provider store={store}>
      <App />
    </Provider>)
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
// store.subscribe(render)
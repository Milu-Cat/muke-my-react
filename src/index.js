import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux' // applyMiddleware用来管理中间件
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './index.css';
// import * as serviceWorker from './serviceWorker';
import reducers from './reducer'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authRoute'
const reduxDevtools = window.devToolsExtension?window.devToolsExtension(): f=>f

const store = createStore(reducers, compose(
  applyMiddleware(thunk), //开启thunk中间件
  reduxDevtools //通过compose把reduxDevtools工具和state结合
)) 

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          {/* <Redirect path='/' component={Login}></Redirect> */}
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </div>
      </BrowserRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
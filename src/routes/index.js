import React from 'react';
import {render} from 'react-dom';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';


render(<Router history={hashHistory}>
  <Route path="/" component={App} >
    <IndexRoute component={Chat} />
    <Route path="chat" component={Chat}/>
    <Route path="chat/:channel" component={Chat}/>
    <Route path="login" component={Login} />
  </Route>
</Router>, document.getElementById('container'));

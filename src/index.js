import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

import Login from './components/login/Login';
import Template from './components/Template';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/*' component={Template} />
        </Switch>
    </BrowserRouter> 
    , document.getElementById('root')
);



serviceWorker.unregister();

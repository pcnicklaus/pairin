import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router-3';

import App from './App/App';
import Home from './containers/Home/Home';
import Users from './components/Users/Users';
import NotFound from './components/NotFound/NotFound';
import Signin from './components/Signin/Signin';

import store from './store';

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Signin } />
                <Route path="/users" component={ Users }/>
                <Route path="*" component={ NotFound } />
            </Route>
        </Router>
    </Provider>
    
, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router-3';

import App from './components/App/App';
import Home from './containers/Home/Home';
import Projects from './components/Projects/Projects';

import store from './store';

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Home } />
                <Route path="projects" component={ Projects }/>
            </Route>
        </Router>
    </Provider>
    
, document.getElementById('root'));

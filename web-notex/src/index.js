import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import notexApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './app';
import NoteEditor from './components/NoteEditor';

const loggerMiddleware = createLogger();

const store = createStore(
    notexApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)


render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={NoteEditor} />
                <Route path="notes.html" component={NoteEditor}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('body'));

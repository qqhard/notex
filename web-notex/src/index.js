import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRedirect, IndexRoute, Link, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import notexApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './containers/App';
import Home from './containers/Home';
import NoteShow from './containers/NoteShow';
import NoteEditor from './containers/NoteEditor';
import AuthService from './utils/AuthService';
import Login from './containers/Login';
import Welcome from './components/Welcome';

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__,{
    auth: {
        redirectUrl: 'http://yuanbiji.com/notes.html',
        responseType: 'code',
        params: {
            scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
        }
    },

});

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace('/login.html');
    }
}

const loggerMiddleware = createLogger();

const store = createStore(
    notexApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

document.body.parentNode.style.overflow="hidden";//隐藏且禁用

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} auth={auth}>
                <IndexRedirect to="welcome.html" />
                <Route path="notes.html" component={Home} onEnter={requireAuth}/>
                <Route path="note-:noteId.html" component={NoteShow}/>
                <Route path="noteEditor-:noteId.html" component={NoteEditor}/>
                <Route path="login.html" component={Login}/>
                <Route path="access_token=:token"/>
                <Route path="welcome.html" component={Welcome}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('body'));

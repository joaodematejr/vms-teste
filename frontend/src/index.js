import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Camera from './componentes/Camera';
import { Provider } from 'react-redux';
import { Store } from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/camera" component={Camera} />
            </Switch>
        </ BrowserRouter>
    </Provider>
    , document.getElementById('root'));

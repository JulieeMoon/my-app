import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {Provider} from "react-redux";
import {createStore} from "redux";

ReactDOM.render(
    (
        <Provider store={store}>
        <HelmetProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HelmetProvider>
        </Provider>
    ),
    document.getElementById('root'));


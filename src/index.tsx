import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";

ReactDOM.render(
    (
        <HelmetProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HelmetProvider>
    ),
    document.getElementById('root'));


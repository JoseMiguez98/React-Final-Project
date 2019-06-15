import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GetRoutes from './routes';

ReactDOM.render(
    <BrowserRouter>
        <GetRoutes/>
    </BrowserRouter>,
    document.getElementById('root')
);

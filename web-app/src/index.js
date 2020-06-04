import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-override.scss';
import './css/reset.min.css';
import Intro from './components/intro';

ReactDOM.render(
    <React.StrictMode>
        <Intro />
    </React.StrictMode>,
    document.getElementById('root')
);

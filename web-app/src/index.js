import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-override.scss';
import './css/index.css';
import Intro from './components/intro';

ReactDOM.render(
    <React.StrictMode>
        <Intro />
    </React.StrictMode>,
    document.getElementById('root')
);

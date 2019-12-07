import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import stuff from './STORE';

ReactDOM.render(<App
								store = {stuff}
								/>, document.querySelector('#root'));
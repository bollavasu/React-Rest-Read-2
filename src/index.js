import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CustomerForm from './components/CustomerForm';
import GetCustomersList from './components/GetCustomersList';

//ReactDOM.render(<CustomerForm />, document.getElementById('root'));

ReactDOM.render(<GetCustomersList />, document.getElementById('root'));



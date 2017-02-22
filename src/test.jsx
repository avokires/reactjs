import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Customerlist from './components/Customerlist';
import InvoceList from './components/InvoceList';
import ProductList from './components/ProductList';
import EditInvoce from './components/EditInvoce';


import './styles.sass';

console.log("1");

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App} />
            <Route path='customers' component={Customerlist} />
            <Route path='products' component={ProductList} />
            <Route path='invoices' component={InvoceList} />
        </Route>
    </Router>,

    document.getElementById('root'));

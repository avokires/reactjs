import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Customerlist from './components/Customerlist';
import InvoceList from './components/InvoceList';
import ProductList from './components/ProductList';
import EditInvoce from './components/EditInvoce';

import './styles.sass';

function App(props) {
	return (
		<main>
			<Header />
			<Customerlist title="Customers list" />
			<InvoceList title="Invoces List" />
			<ProductList title="Product List" />
			<EditInvoce title="Edit Invoce" />
		</main>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

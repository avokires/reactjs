import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import Header from './components/Header';
import Customerlist from './components/Customerlist';

import './styles.sass';

// console.log("1");

class App extends React.Component {
	render() {
		return (
			<main>
				<Header />
				{this.props.children}
			</main>
		);
	}
}

export default App;

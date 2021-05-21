import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';

//global styling
import 'aos/src/sass/aos.scss';
import './stylesheets/global.scss';

//components here
import Home from './components/Home ';
import Login from './components/Login';

function App() {
	AOS.init();
	return (
		<Router>
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
}

export default App;

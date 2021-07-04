import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import './utils/api-config';

//global styling
import 'aos/src/sass/aos.scss';
import './stylesheets/global.scss';

//components here
import Home from './components/Home ';
import Login from './components/Login';
import Products from './components/Products';
import Layout from './components/common/Layout';

function App() {
	AOS.init();
	return (
		<Router>
			<Switch>
				<Layout>
					<Route exact path='/products' component={Products} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/' component={Home} />
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;

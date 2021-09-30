import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import './utils/api-config';

//global styling
import 'aos/src/sass/aos.scss';
import './stylesheets/global.scss';

//components here
import Home from './components/Home ';
import Layout from './components/common/Layout';
import Login from './components/Auth/Login';
// import Logout from './components/Auth/Logout';
import Products from './components/Products';
import SignUp from './components/Auth/SignUp'

function App() {
	AOS.init();
	return (
		<Router>
			<Switch>
				<Layout>
					{/* auth */}
					<Route exact path='/auth/login' component={Login} />
					{/* <Route exact path='/auth/logout' component={Logout} /> */}
					<Route exact path='/auth/signup' component={SignUp} />
					{/* normal */}
					<Route exact path='/products' component={Products} />
					<Route exact path='/' component={Home} />
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;

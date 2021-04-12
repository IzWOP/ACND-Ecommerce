import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { withAuthenticator } from '@aws-amplify/ui-react';

//components here
import Home from './components/Home ';
import Login from './components/Login';
import ConfirmSignUp from './components/Login/ConfirmSignUp';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/login/confirm' component={ConfirmSignUp} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
}

export default App;

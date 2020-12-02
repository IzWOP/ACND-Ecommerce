import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components here
import Home from './components/Home';

//routes in this bihh
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
};
export default App;

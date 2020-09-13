import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Import containers */
import Home from './containers/Home';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

/* Import Auth */
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<div>
					<PrivateRoute exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</div>
			</Router>
		</AuthProvider>
	);
};

export default App;

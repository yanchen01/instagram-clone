import React, { useContext, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router';

import firebase from 'firebase';

import { AuthContext } from '../../Auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Container from 'react-bootstrap/Container';

const Login = ({ history }) => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);

	const uiConfig = {
		signInFlow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		]
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
	}, []);

	if (currentUser) {
		return <Redirect to="/" />;
	}

	return (
		<Container>
			<div className="login">
				<h1>Login</h1>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</div>
		</Container>
	);
};

export default withRouter(Login);

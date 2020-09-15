import React, { useContext, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router';

import firebase from 'firebase';
import axios from 'axios';

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

	const seedUserData = (userUID) => {
		const queryUrl = `https://instagram-clone-92627.firebaseio.com/users/${userUID}`;

		// seed user node with following data
		const userProfile = {
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde rem perferendis a debitis. Aut deserunt recusandae id, harum, incidunt dolor possimus nesciunt accusantium, inventore ex ratione iure fugit magnam non?',

			followers: 999,
			following: 562,
			posts: {
				0: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				1: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80',
				2: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
				3: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80'
			}
		};

		axios
			.post(`${queryUrl}.json`, userProfile)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(
		() => {
			firebase.auth().onAuthStateChanged((user) => {
				setCurrentUser(user);
			});
		},
		[ setCurrentUser ]
	);

	if (currentUser) {
		const userUID = currentUser.uid;
		seedUserData(userUID);
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

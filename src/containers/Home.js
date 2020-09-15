import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/Navbar/Navbar';
import firebase from '../firebase';
import { Container } from 'react-bootstrap';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import Posts from '../components/Posts/Posts';

import axios from 'axios';

const Home = (props) => {
	const [ isDataReady, setIsDataReady ] = useState(false);
	const [ profilePic, setProfilePic ] = useState('');
	const [ profileDesc, setProfileDesc ] = useState('');
	const [ followers, setFollowers ] = useState(0);
	const [ following, setFollowing ] = useState(0);
	const [ posts, setPosts ] = useState([]);
	const [ name, setName ] = useState('');

	const getUserData = async () => {
		const currentUser = firebase.auth().currentUser;
		const currentUserUID = currentUser.uid;
		const queryUrl = `https://instagram-clone-92627.firebaseio.com/users/${currentUserUID}`;

		setName(currentUser.providerData[0].displayName);
		setProfilePic(firebase.auth().currentUser.photoURL);

		axios
			.get(`${queryUrl}.json`)
			.then((result) => {
				setIsDataReady(true);
				if (result.data) {
					const userProfile = Object.values(result.data)[0];
					setProfileDesc(userProfile['description']);
					setFollowers(userProfile['followers']);
					setFollowing(userProfile['following']);
					setPosts(userProfile['posts']);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(
		() => {
			getUserData();
		},
		[ isDataReady ]
	);

	return (
		<React.Fragment>
			<NavigationBar />
			<Container>
				{console.log('Render')}

				<ProfileHeader
					name={name}
					profilePic={profilePic}
					profileDesc={profileDesc}
					postsCount={posts ? posts.length : 0}
					followers={followers}
					following={following}
				/>
				<hr />
				<Posts posts={posts} />
			</Container>
		</React.Fragment>
	);
};

export default Home;

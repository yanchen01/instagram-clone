import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/Navbar/Navbar';
import firebase from '../firebase';
import { Container } from 'react-bootstrap';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import Posts from '../components/Posts/Posts';

import axios from 'axios';

const Home = (props) => {
	const [ profilePic, setProfilePic ] = useState('');
	const [ profileDesc, setProfileDesc ] = useState('');
	const [ followers, setFollowers ] = useState(0);
	const [ following, setFollowing ] = useState(0);
	const [ posts, setPosts ] = useState([]);
	const [ name, setName ] = useState('');

	const getUserData = () => {
		const currentUser = firebase.auth().currentUser;
		const currentUserUID = currentUser.uid;
		const queryUrl = `https://instagram-clone-92627.firebaseio.com/users/${currentUserUID}`;

		setName(currentUser.providerData[0].displayName);
		setProfilePic(firebase.auth().currentUser.photoURL);

		axios
			.get(`${queryUrl}/description.json`)
			.then((result) => {
				setProfileDesc(result.data);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(`${queryUrl}/followers.json`)
			.then((result) => {
				setFollowers(result.data);
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.get(`${queryUrl}/following.json`)
			.then((result) => {
				console.log('Here');
				console.log(result.data);
				setFollowing(result.data);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(`${queryUrl}/posts.json`)
			.then((result) => {
				setPosts(result.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<React.Fragment>
			<NavigationBar />
			<Container>
				<ProfileHeader
					name={name}
					profilePic={profilePic}
					profileDesc={profileDesc}
					postsCount={posts.length}
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

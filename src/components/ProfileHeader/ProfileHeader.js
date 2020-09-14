import React from 'react';

/* Bootstrap Imports */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Settings from '../Settings/Settings';

const ProfileHeader = (props) => {
	return (
		<Container className="profile-header">
			<Row>
				<Col lg="4">
					<Image className="profile-pic" src={props.profilePic} roundedCircle />
				</Col>
				<Col lg="8">
					<div className="profile-details">
						<div className="profile-account">
							<p className="profile-name">{props.name}</p>
							<Settings />
						</div>
						<div className="profile-status">
							<p>
								<span className="bold">{props.postsCount}</span> posts
							</p>
							<p>
								<span className="bold">{props.followers}</span> followers
							</p>
							<p>
								<span className="bold">{props.following}</span> following
							</p>
						</div>
						<div className="profile-desc">
							<p>{props.profileDesc}</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ProfileHeader;

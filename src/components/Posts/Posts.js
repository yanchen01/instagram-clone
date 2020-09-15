import React from 'react';

import Post from './Post/Post';

const Posts = (props) => {
	let Posts = null;

	if (props.posts) {
		Posts = props.posts.map((post) => {
			return <Post img={post} key={post} />;
		});
	}

	return <div className="posts">{Posts}</div>;
};

export default Posts;

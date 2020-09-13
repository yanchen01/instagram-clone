import React from 'react';

import Post from './Post/Post';

const Posts = (props) => {
	return (
		<div className="posts">
			{props.posts.map((post, index) => {
				return <Post img={post} />;
			})}
		</div>
	);
};

export default Posts;

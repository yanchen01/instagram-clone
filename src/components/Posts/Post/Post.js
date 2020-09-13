import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import Modal from 'react-bootstrap/Modal';

const Post = (props) => {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Card className="bg-dark text-white post">
			<Card.Img src={props.img} alt={props.img} onClick={handleShow} />

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton />
				<Modal.Body>
					<Card className="bg-dark text-white">
						<Card.Img src={props.img} alt="Card image" />
					</Card>
				</Modal.Body>
				<Modal.Footer>
					<div className="post-likes">
						<FavoriteOutlinedIcon className="like-icon" fontSize="large" />
						<span className="likes-number">14</span>
					</div>
				</Modal.Footer>
			</Modal>
		</Card>
	);
};

export default Post;

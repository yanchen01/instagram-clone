import React, { useState } from 'react';
import firebase from 'firebase';
import Dropdown from 'react-bootstrap/Dropdown';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const Settings = () => {
	const [ value, setValue ] = useState('');

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<a
			className="nav-icons"
			href=""
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			<SettingsOutlinedIcon className="nav-icons" />
			{children}
		</a>
	));

	const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
		return (
			<div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
				<ul className="list-unstyled">
					{React.Children
						.toArray(children)
						.filter((child) => !value || child.props.children.toLowerCase().startsWith(value))}
				</ul>
			</div>
		);
	});

	return (
		<Dropdown>
			<Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

			<Dropdown.Menu as={CustomMenu}>
				<Dropdown.Item
					eventKey="1"
					onClick={() => {
						firebase.auth().signOut();
					}}
				>
					Sign Out
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Settings;

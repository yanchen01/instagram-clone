import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Logo from '../../assets/images/logo.png';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const NavigationBar = () => (
	<Navbar expand="lg">
		<Container>
			<Navbar.Brand href="/">
				<img className="brand-img" src={Logo} style={{ margin: '5px 5px' }} alt={Logo}/>
			</Navbar.Brand>

			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="nav">
					<Nav.Link href="/">
						<HomeOutlinedIcon className="nav-icons" />
					</Nav.Link>
					<Nav.Link href="#send">
						<SendOutlinedIcon className="nav-icons" />
					</Nav.Link>
					<Nav.Link href="#explore">
						<ExploreOutlinedIcon className="nav-icons" />
					</Nav.Link>
					<Nav.Link href="#heart">
						<FavoriteBorderOutlinedIcon className="nav-icons" />
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default NavigationBar;

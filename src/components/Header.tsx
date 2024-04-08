import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AppBar, Button, ButtonGroup, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyCloakService from '../utils/keyCloak';
import Login from './Login';
import Profile from './Profile';
function Header() {
	const [accountOn, setAccount] = useState(false);
	const isLoggedIn = KeyCloakService.CheckAuth();
	const accountClicked = () => {
		setAccount((prev) => !prev);
	};
	return (
		<CssBaseline>
			<AppBar position="fixed" sx={{ width: '100vw' }}>
				<Toolbar color="primary" sx={{ width: '100vw' }}>
					<Link to="/">
						<Button>
							<Typography variant="h3" gutterBottom>
								Asset Store
							</Typography>
						</Button>
					</Link>
					<Container sx={{ position: 'absolute', right: '-400px' }}>
						<ButtonGroup variant="outlined" color="primary">
							<Link to="/products">
								<Button>
									<Typography variant="h6" align="center">
										Products
									</Typography>
								</Button>
							</Link>
							<Link to="/faq">
								<Button>
									<Typography variant="h6" align="center">
										FAQ
									</Typography>
								</Button>
							</Link>
							<Link to="/contact">
								<Button>
									<Typography variant="h6" align="center">
										Contact Us
									</Typography>
								</Button>
							</Link>
							<IconButton onClick={accountClicked}>
								<AccountBoxIcon sx={{ position: 'absolute', marginLeft: '50px' }} />
							</IconButton>
						</ButtonGroup>
						{accountOn && !isLoggedIn && <Login accountClicked={accountClicked} />}
						{accountOn && isLoggedIn && <Profile accountClicked={accountClicked} />}
					</Container>
				</Toolbar>
			</AppBar>
		</CssBaseline>
	);
}
export default Header;

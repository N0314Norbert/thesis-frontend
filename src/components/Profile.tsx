import CloseIcon from '@mui/icons-material/Close';
import { Button, Container, CssBaseline, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyCloakService from '../utils/keyCloak';

function Profile(props: any) {
	const handleLogout = async (event: any) => {
		event.preventDefault();
		KeyCloakService.Logout();
	};
	return (
		<Container className="profile">
			<IconButton onClick={props.accountClicked} className="profile-button">
				<CloseIcon className="profile-button-icon" />
			</IconButton>
			<CssBaseline>
				<div className="profile-content">
					<Typography variant="h6">{KeyCloakService.GetUserName()}</Typography>
					<Link to="/cart">
						<Button type="submit" fullWidth color="secondary" variant="contained" className="profile-content-button">
							Check Cart
						</Button>
					</Link>
					<Link to="/downloads">
						<Button type="submit" fullWidth color="secondary" variant="contained" className="profile-content-button">
							Downloads
						</Button>
					</Link>
					<Button
						onClick={handleLogout}
						type="submit"
						fullWidth
						color="secondary"
						variant="contained"
						className="profile-content-button"
					>
						Logout
					</Button>
				</div>
			</CssBaseline>
		</Container>
	);
}
export default Profile;

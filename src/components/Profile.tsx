import CloseIcon from '@mui/icons-material/Close';
import { Button, Container, CssBaseline, IconButton, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import KeyCloakService from '../utils/keyCloak';

function Profile(props: any) {
	const user = useSelector((state: RootState) => state.authReducer.user);

	const handleLogout = async (event: any) => {
		event.preventDefault();
		Cookies.remove('Token');
		Cookies.remove('Email');
		KeyCloakService.Logout();
	};
	return (
		<Container className="profile">
			<IconButton onClick={props.accountClicked} className="profile-button">
				<CloseIcon className="profile-button-icon" />
			</IconButton>
			<CssBaseline>
				<div className="profile-content">
					<Typography variant="h6">{user}</Typography>
					<Link to="/cart">
						<Button type="submit" fullWidth color="secondary" variant="contained" className="profile-content-button">
							Check Cart
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

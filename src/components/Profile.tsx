import { Box, Button, Container, CssBaseline, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { sendLogout } from '../utils/apihandlers';
import { logout } from '../store/loginReducer';

function Profile(props: any) {
	const user = useSelector((state) => state?.LoginReducer?.user);
	const dispatch = useDispatch();

	const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const res = await sendLogout();
		if (res) {
			dispatch(logout());
		}
	};
	return (
		<Container
			sx={{ width: '400px', height: '220px', position: 'absolute', right: '450px', top: '80px', border: 'solid 1px' }}
		>
			<IconButton onClick={props.accountClicked} sx={{ position: 'absolute', right: '10px', marginTop: '8px' }}>
				<CloseIcon sx={{ width: '20px', height: '20px' }} />
			</IconButton>
			<CssBaseline>
				<Box
					sx={{
						marginTop: 5,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography variant="h6">{user}</Typography>
					<Button type="submit" fullWidth color="secondary" variant="contained" sx={{ mt: 3 }}>
						Check Cart
					</Button>
					<Button onClick={handleLogout} type="submit" fullWidth color="secondary" variant="contained" sx={{ mt: 3 }}>
						Logout
					</Button>
				</Box>
			</CssBaseline>
		</Container>
	);
}
export default Profile;

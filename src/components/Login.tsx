import CloseIcon from '@mui/icons-material/Close';
import { Button, Container, CssBaseline, IconButton } from '@mui/material';
import KeyCloakService from '../utils/keyCloak';
function Login(props: any) {
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		KeyCloakService.Login();
	};
	return (
		<Container
			sx={{ width: '400px', height: '100px', position: 'absolute', right: '450px', top: '80px', border: 'solid 1px' }}
		>
			<IconButton onClick={props.accountClicked} sx={{ position: 'absolute', right: '10px', marginTop: '8px' }}>
				<CloseIcon sx={{ width: '20px', height: '20px' }} />
			</IconButton>
			<CssBaseline>
				<div className="login">
					<Button type="submit" fullWidth color="secondary" variant="contained" sx={{ mt: 5 }} onClick={handleSubmit}>
						Sign In
					</Button>
				</div>
			</CssBaseline>
		</Container>
	);
}

export default Login;

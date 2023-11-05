import { Container, CssBaseline, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { sendLogin } from '../utils/apihandlers';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/loginReducer';
function Login(props: any) {
	const emailRef = useRef('');
	const passwordRef = useRef('');
	const dispatch = useDispatch();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const res = await sendLogin(email, password);
		if (res) {
			dispatch(login(email));
			emailRef.current.value = '';
			passwordRef.current.value = '';
		}
	};

	return (
		<Container
			sx={{ width: '400px', height: '340px', position: 'absolute', right: '450px', top: '80px', border: 'solid 1px' }}
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
					<Typography variant="h5">Sign in</Typography>
					<Box component="form" onSubmit={handleSubmit}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							variant="filled"
							inputRef={emailRef}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							variant="filled"
							inputRef={passwordRef}
						/>
						<Button type="submit" fullWidth color="secondary" variant="contained" sx={{ mt: 3 }}>
							Sign In
						</Button>
					</Box>
				</Box>
			</CssBaseline>
		</Container>
	);
}
export default Login;

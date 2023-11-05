import { Backdrop, Box, Button, Container, CssBaseline, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ConnectEmail(props: any) {
	return (
		<div>
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={props.overlay}>
				<Container
					sx={{
						width: '600px',
						position: 'fixed',
						border: 'solid 1px',
						textAlign: 'center',
					}}
				>
					<IconButton onClick={props.setOverlay} sx={{ position: 'absolute', right: '10px', marginTop: '8px' }}>
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
							<Typography variant="h5"> Please summarize your issue</Typography>
							<Box component="form">
								<TextField
									margin="normal"
									required
									fullWidth
									id="email"
									label="Your email address"
									name="email"
									autoComplete="email"
									autoFocus
									variant="filled"
								/>
								<TextField
									margin="normal"
									required
									fullWidth
									name="message"
									label="message"
									id="message"
									variant="filled"
									multiline
									rows={15}
								/>
								<Button type="submit" fullWidth color="secondary" variant="contained" sx={{ mt: 3, mb: 2 }}>
									Send
								</Button>
							</Box>
						</Box>
					</CssBaseline>
				</Container>
			</Backdrop>
		</div>
	);
}
export default ConnectEmail;

import { AppBar, CssBaseline, Toolbar } from '@mui/material';

function Footer() {
	return (
		<CssBaseline>
			<AppBar color="primary" position="relative" sx={{ height: '15vh', width: '100vw', bottom: '0px' }}>
				<Toolbar></Toolbar>
			</AppBar>
		</CssBaseline>
	);
}
export default Footer;

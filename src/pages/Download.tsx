import { Container, CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import DownloadTable from '../components/DownloadItems';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KeyCloakService from '../utils/keyCloak';

function Download() {
	useEffect(() => {
		if (!KeyCloakService.CheckAuth()) {
			window.location.replace(window.location.protocol + '//' + window.location.host);
		}
	}, []);
	return (
		<CssBaseline>
			<Header />
			<Container maxWidth="xl" className="container">
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'row',
						paddingTop: 20,
						background: '#444444',
					}}
				>
					<DownloadTable />
				</Container>
			</Container>
			<Footer />
		</CssBaseline>
	);
}

export default Download;

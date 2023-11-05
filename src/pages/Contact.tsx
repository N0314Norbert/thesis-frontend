import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Card, CardContent, CardHeader, Container, CssBaseline, IconButton, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CardActions } from '@material-ui/core';
import Help from '@mui/icons-material/Help';
import { useState } from 'react';
import ConnectEmail from '../components/ConnectEmail';

function Contact() {
	const [overlay, setOverlay] = useState(false);
	const handleOverlay = () => {
		setOverlay((prev) => !prev);
	};
	return (
		<CssBaseline>
			<Header></Header>
			{overlay && <ConnectEmail setOverlay={handleOverlay} overlay={overlay} />}
			<Container maxWidth="xl" sx={{ minHeight: '90vh', background: '#444444' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingTop: 20,
					}}
				>
					<Typography variant="h2"> Contact Us!</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						paddingTop: 15,
						marginLeft: '7vw',
					}}
				>
					<Card sx={{ maxWidth: 360, textAlign: 'center' }}>
						<CardHeader avatar={<ShoppingBasketIcon />} title={<Typography variant="h4">Sales</Typography>} />
						<CardContent>
							<Typography>
								TestTestTestTestTestT estTestTestTestTestTestTestTest TestTestTestTestTestTestTestTest
								TestTestTestTestTestTestTestTest
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="Contact" onClick={handleOverlay}>
								<NavigateNextIcon />
							</IconButton>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 360, textAlign: 'center' }}>
						<CardHeader avatar={<SupportAgentIcon />} title={<Typography variant="h4">Technical Issues</Typography>} />
						<CardContent>
							<Typography>
								TestTestTestTestTestT estTestTestTestTestTestTestTest TestTestTestTestTestTestTestTest
								TestTestTestTestTestTestTestTest
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="Contact" onClick={handleOverlay}>
								<NavigateNextIcon />
							</IconButton>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 360, textAlign: 'center' }}>
						<CardHeader avatar={<Help />} title={<Typography variant="h4">General Issues</Typography>} />
						<CardContent>
							<Typography>
								TestTestTestTestTestT estTestTestTestTestTestTestTest TestTestTestTestTestTestTestTest
								TestTestTestTestTestTestTestTest
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="Contact" onClick={handleOverlay}>
								<NavigateNextIcon />
							</IconButton>
						</CardActions>
					</Card>
				</Box>
			</Container>
			<Footer></Footer>
		</CssBaseline>
	);
}
export default Contact;

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, Container, CssBaseline, IconButton, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CardActions } from '@material-ui/core';
import Help from '@mui/icons-material/Help';
import { useState } from 'react';
import ConnectEmail from '../components/ConnectEmail';
import '../assets/styles/Contacts.css';

function Contact() {
	const [overlay, setOverlay] = useState(false);
	const handleOverlay = () => {
		setOverlay((prev) => !prev);
	};
	return (
		<CssBaseline>
			<Header></Header>
			{overlay && <ConnectEmail setOverlay={handleOverlay} overlay={overlay} />}
			<Container maxWidth="xl" className="container">
				<div className="contacts-title">
					<Typography variant="h2"> Contact Us!</Typography>
				</div>
				<div className="contacts-options">
					<Card className="contacts-options-card">
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
					<Card className="contacts-options-card">
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
					<Card className="contacts-options-card">
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
				</div>
			</Container>
			<Footer></Footer>
		</CssBaseline>
	);
}
export default Contact;

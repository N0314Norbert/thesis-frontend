import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, CssBaseline, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Faq() {
	return (
		<CssBaseline>
			<Header></Header>
			<Container maxWidth="xl" sx={{ height: '90vh', background: '#444444' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingTop: 20,
					}}
				>
					<Accordion TransitionProps={{ unmountOnExit: true }}>
						<AccordionSummary aria-controls="panel1a-content" expandIcon={<AddIcon />}>
							<Typography>Test</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
								blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion TransitionProps={{ unmountOnExit: true }}>
						<AccordionSummary aria-controls="panel1a-content" expandIcon={<AddIcon />}>
							<Typography>Test2</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
								blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion TransitionProps={{ unmountOnExit: true }}>
						<AccordionSummary aria-controls="panel1a-content" expandIcon={<AddIcon />}>
							<Typography>Test3</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
								blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Container>
			<Footer></Footer>
		</CssBaseline>
	);
}
export default Faq;

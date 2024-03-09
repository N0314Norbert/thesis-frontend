import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionDetails, AccordionSummary, Container, CssBaseline, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../assets/styles/Faq.css';

function Faq() {
	return (
		<CssBaseline>
			<Header></Header>
			<Container maxWidth="xl" className="container">
				<div className="faq">
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
				</div>
			</Container>
			<Footer></Footer>
		</CssBaseline>
	);
}
export default Faq;

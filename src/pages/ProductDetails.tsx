import {
	Box,
	Button,
	Container,
	CssBaseline,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from '@mui/material';
import wall from '../assets/WallFinished.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Product() {
	const product = {
		title: 'Test',
		img: wall,
		description: 'Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test',
		format: '.obj',
		price: '10$',
	};
	return (
		<CssBaseline>
			<Header></Header>
			<Container maxWidth="xl" sx={{ minHeight: '90vh', background: '#444444', textAlign: 'center' }}>
				<Typography variant="h2" sx={{ paddingTop: 15 }}>
					{product.title}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						textAlign: 'center',
						position: 'relative',
						marginLeft: '9vw',
						marginTop: 3,
					}}
				>
					<Box sx={{ marginTop: '100px' }}>
						<img src={wall} height="250px" />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flexWrap: 'wrap',
							textAlign: 'center',
							position: 'relative',
							margin: '100px',
						}}
					>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="details_table">
								<TableBody>
									<TableRow>
										<TableCell>Description</TableCell>
										<TableCell>{product.description}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>File format</TableCell>
										<TableCell>{product.format}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Price</TableCell>
										<TableCell>{product.price}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap',
								marginTop: 10,
							}}
						>
							<Button variant="contained" sx={{ width: '200px', marginLeft: 10 }}>
								Add to Cart
							</Button>
							<Link to="/productviewer">
								<Button variant="contained" sx={{ width: '200px', marginLeft: 5 }}>
									View in 3D
								</Button>
							</Link>
						</Box>
					</Box>
				</Box>
			</Container>
			<Footer></Footer>
		</CssBaseline>
	);
}
export default Product;

import Header from '../components/Header';
import Footer from '../components/Footer';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	CssBaseline,
	IconButton,
	Typography,
} from '@mui/material';
import wall from '../assets/WallFinished.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Products() {
	const product = {
		title: 'Test',
		img: wall,
		description: 'Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test',
		price: '10$',
	};
	let products = [product, product, product, product, product, product, product, product, product];
	return (
		<CssBaseline>
			<Header></Header>
			<Container maxWidth="xl" sx={{ minHeight: '90vh', background: '#444444' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						paddingTop: 20,
						textAlign: 'center',
						position: 'relative',
						marginLeft: '9vw',
					}}
				>
					{products.map((item) => {
						return (
							<Card sx={{ maxWidth: 360, textAlign: 'center', marginBottom: '50px' }}>
								<CardMedia component="img" height="194" image={item.img} alt="Paella dish" />
								<CardContent>
									<Link to="/details">
										<Button variant="text">
											<Typography variant="h4">{item.title}</Typography>
										</Button>
									</Link>
									<Typography>{item.description}</Typography>
								</CardContent>
								<CardActions disableSpacing>
									<Typography variant="h4">{item.price}</Typography>
									<IconButton aria-label="to-cart" sx={{ position: 'relative', marginLeft: '210px !important' }}>
										<AddShoppingCartIcon />
									</IconButton>
								</CardActions>
							</Card>
						);
					})}
				</Box>
			</Container>
			<Footer></Footer>
		</CssBaseline>
	);
}
export default Products;

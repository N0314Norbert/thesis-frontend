import {
	Button,
	Container,
	CssBaseline,
	Paper,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from '@mui/material';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/styles/ProductDetails.css';
import TransitionAlert from '../components/Alert';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useLazyProductApi from '../hooks/useLazyProductApi';
import KeyCloakService from '../utils/keyCloak';
function ProductDetails() {
	const { id } = useParams<{ id: any }>();

	const { data, isLoading } = useLazyProductApi(id);
	const [alert, setAlert] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const handleToCart = (event: any, key: string) => {
		event.preventDefault();

		if (KeyCloakService.CheckAuth()) {
			const retrievedArray: string[] = JSON.parse(Cookies.get('Cart') || '[]');
			Cookies.set('Cart', JSON.stringify(retrievedArray.concat(key)), { expires: 7 });
			return;
		}
		setAlert(true);
	};
	return (
		<CssBaseline>
			<Header />
			<Container maxWidth="xl" className="container">
				<Typography variant="h2" sx={{ paddingTop: 15 }}>
					{isLoading ? <Skeleton width={350} height={50} /> : data[0]?.data.Title}
				</Typography>
				<div className="productDetails">
					<div className="productDetails-productImage">
						{isLoading ? <Skeleton height={250} width={350} /> : <img src={data[0]?.image} height="250px" />}
					</div>
					<div className="productDetails-description">
						{isLoading ? (
							<Skeleton width={650} height={300} />
						) : (
							<TableContainer component={Paper}>
								<Table className="productDetails-description-table" aria-label="details_table">
									<TableBody>
										<TableRow>
											<TableCell>Description</TableCell>
											<TableCell>{data[0]?.data.Description}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>File format</TableCell>
											<TableCell>{data[0]?.data.Format}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Price</TableCell>
											<TableCell>{data[0]?.data.Price}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						)}
						<div className="productDetails-description-buttons">
							<Button
								onClick={(event: any) => {
									handleToCart(event, data[0]?.data.rowKey);
								}}
								variant="contained"
								sx={{ width: '200px', marginLeft: 10 }}
							>
								Add to Cart
							</Button>
							<Link to={`/productviewer/${data[0]?.data.File}`}>
								<Button variant="contained" sx={{ width: '200px', marginLeft: 5 }}>
									View in 3D
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</Container>
			<TransitionAlert open={alert} setOpen={setAlert} type={'error'} text={'Please login!'} />
			<TransitionAlert open={success} setOpen={setSuccess} type={'success'} text={'Item added to cart'} />

			<Footer />
		</CssBaseline>
	);
}
export default ProductDetails;

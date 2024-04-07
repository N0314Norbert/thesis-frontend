import { Button, Container, CssBaseline, Skeleton } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductData } from '../@types/types';
import CartItems from '../components/CartItems';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useGetCartItems from '../hooks/useGetCartItems';
import KeyCloakService from '../utils/keyCloak';

function Cart() {
	const [length, setLength] = useState(JSON.parse(Cookies.get('Cart') || '[]').length);
	const { products, isLoading } = useGetCartItems(length);
	useEffect(() => {
		if (!KeyCloakService.CheckAuth()) {
			window.location.replace(window.location.protocol + '//' + window.location.host);
		}
	}, []);

	useEffect(() => {
		let prodSum: number = 0;
		products.forEach((item: ProductData) => {
			prodSum += +item.Price;
		});
	}, [products]);

	const removeItem = (id: string) => {
		const retrievedArray: string[] = JSON.parse(Cookies.get('Cart') || '[]');
		const itemIndex = retrievedArray.indexOf(id);
		if (itemIndex > -1) {
			retrievedArray.splice(itemIndex, 1);
		}
		Cookies.set('Cart', JSON.stringify(retrievedArray), { expires: 7 });
		setLength(retrievedArray.length);
	};
	return (
		<CssBaseline>
			<Header />
			<Container maxWidth="xl" className="container">
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'row',
						paddingTop: 20,
					}}
				>
					{isLoading ? (
						<Skeleton variant="rectangular" width={800} height={350} />
					) : (
						<>
							{' '}
							<CartItems cartItems={products} removeItem={removeItem} />
							<Link to={'/payment'}>
								<Button variant="contained" className="PayButton">
									Pay
								</Button>
							</Link>
						</>
					)}
				</Container>
			</Container>
			<Footer />
		</CssBaseline>
	);
}

export default Cart;

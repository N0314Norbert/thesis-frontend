import { Container, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductData } from '../@types/types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PayPalComponent from '../components/PayPal';
import useGetCartItems from '../hooks/useGetCartItems';
import KeyCloakService from '../utils/keyCloak';

function Payment() {
	const [total, setTotal] = useState<number>(0);
	const { products } = useGetCartItems(0);
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
		setTotal(prodSum);
	}, [products]);
	return (
		<CssBaseline>
			<Header />
			<Container maxWidth="xl" className="container">
				{products.length > 0 && (
					<Container sx={{ ml: '25vw', width: '500px', paddingTop: '100px' }}>
						<PayPalComponent products={products} total={total} />
					</Container>
				)}
			</Container>
			<Footer />
		</CssBaseline>
	);
}

export default Payment;

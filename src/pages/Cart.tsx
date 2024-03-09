import { Container, CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PayPalComponent from '../components/PayPal';
import { remove } from '../store/cartReducer';
import KeyCloakService from '../utils/keyCloak';

function Cart() {
	const cart = useSelector((state: any) => state?.CartReducer?.cart);
	useEffect(() => {
		if (!KeyCloakService.CheckAuth()) {
			window.location.replace(window.location.protocol + '//' + window.location.host);
		}
	}, []);
	const dispatch = useDispatch();
	const removeItem = (index: number) => {
		dispatch(remove(index));
	};
	return (
		<CssBaseline>
			<Header></Header>
			<Container maxWidth="xl" className="container">
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'row',
						paddingTop: 20,
					}}
				>
					<CartItems cartItems={cart} removeItem={removeItem}></CartItems>
					<Container sx={{ ml: '25vw' }}>
						<PayPalComponent />
					</Container>
				</Container>
			</Container>
			<Footer></Footer>
		</CssBaseline>
	);
}

export default Cart;

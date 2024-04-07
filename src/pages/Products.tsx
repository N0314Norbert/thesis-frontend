import { Container, CssBaseline } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { ProductData } from '../@types/types';
import '../assets/styles/Products.css';
import TransitionAlert from '../components/Alert';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import useProductCount from '../hooks/useProductCount';
import useProductData from '../hooks/useProductData';
import KeyCloakService from '../utils/keyCloak';
function Products() {
	const [alert, setAlert] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [success, setSuccess] = useState<boolean>(false);

	const productNumber = useProductCount();
	const data = useProductData(1 + (page - 1) * 9, page * 9, page);

	const handleToCart = (event: any, key: string) => {
		event.preventDefault();

		if (KeyCloakService.CheckAuth()) {
			const retrievedArray: string[] = JSON.parse(Cookies.get('Cart') || '[]');
			Cookies.set('Cart', JSON.stringify(retrievedArray.concat(key)), { expires: 7 });
			setSuccess(true);
			return;
		}
		setAlert(true);
	};

	const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};
	return (
		<CssBaseline>
			<Header />
			<Container maxWidth="xl" className="products">
				<div>
					<div className="products-productList">
						{data.map((item: ProductData) => {
							return <ProductCard item={item} handleToCart={handleToCart} />;
						})}
					</div>
				</div>
				<Pagination
					count={Math.ceil(productNumber / 9)}
					page={page}
					onChange={handleChange}
					className="products-pagination"
				/>
			</Container>
			<TransitionAlert open={alert} setOpen={setAlert} type={'error'} text={'Please login!'} />
			<TransitionAlert open={success} setOpen={setSuccess} type={'success'} text={'Item added to cart'} />
			<Footer />
		</CssBaseline>
	);
}
export default Products;

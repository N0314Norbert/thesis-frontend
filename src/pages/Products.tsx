import { Container, CssBaseline } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductData } from '../@types/types';
import '../assets/styles/Products.css';
import TransitionAlert from '../components/Alert';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import useProductCount from '../hooks/useProductCount';
import useProductData from '../hooks/useProductData';
import { RootState } from '../store/store';

function Products() {
	const [alert, setAlert] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);

	const productNumber = useProductCount();
	const data = useProductData(1 + (page - 1) * 9, page * 9, page);
	const isLoggedIn = useSelector((state: RootState) => state.authReducer.isLoggedIn);

	const handleToCart = (event: any) => {
		event.preventDefault();
		if (isLoggedIn) {
			return;
		}
		setAlert(true);
	};

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
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
			<TransitionAlert open={alert} setOpen={setAlert} />
			<Footer />
		</CssBaseline>
	);
}
export default Products;

import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { ProductData } from '../@types/types';

function useGetCartItems(condition: any) {
	const [products, setProducts] = useState<ProductData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const retrievedArray: string[] = JSON.parse(Cookies.get('Cart') || '[]');
			const temp: ProductData[] = [];
			await Promise.all(
				retrievedArray.map(async (item) => {
					try {
						const response = await axios.get<ProductData[]>(import.meta.env.VITE_ENDPOINT + '/productdata', {
							params: { id: item },
						});
						if (response.status === 200) {
							temp.push(response.data[0]);
						} else {
							console.log(response.data);
						}
					} catch (error) {
						console.error(error);
					}
				}),
			);
			setProducts(temp);
			setIsLoading(false);
		};
		fetchData();
	}, [condition]);
	return { products: products, isLoading: isLoading };
}

export default useGetCartItems;

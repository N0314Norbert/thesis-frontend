import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product, ProductData } from '../@types/types';

function useLazyProductApi(id: string | number) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<Product[]>([]);
	useEffect(() => {
		setData([]);
		const fetchData = async () => {
			const response = await axios.get<ProductData[]>(import.meta.env.VITE_ENDPOINT + '/productdata', {
				params: { id: id },
			});
			if (response.status === 200) {
				response.data.map(async (item) => {
					const imageResponse = await axios.get(import.meta.env.VITE_ENDPOINT + '/productimage', {
						params: { id: item.Image },
						responseType: 'arraybuffer',
					});
					if (response.status === 200) {
						const blob = new Blob([imageResponse.data], { type: 'image/png' });
						const newItem = { image: URL.createObjectURL(blob), data: item };
						if (data.length <= response.data.length) {
							setData((prev) => [...prev, newItem]);
						}
					} else {
						console.log(imageResponse.data);
					}
				});
			} else {
				console.log(response.data);
			}
			setIsLoading(false);
		};
		console.log(data);
		fetchData();
	}, []);
	return { data: data, isLoading: isLoading };
}
export default useLazyProductApi;

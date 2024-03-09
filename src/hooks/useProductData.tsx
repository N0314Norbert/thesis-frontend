import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductData } from '../@types/types';

function useProductData(min: string | number, max: undefined | number, condition: any) {
	const [data, setData] = useState<ProductData[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get<ProductData[]>(import.meta.env.VITE_ENDPOINT + '/productvector', {
				params: { min: min, max: max },
			});
			if (response.status === 200) {
				setData(response.data);
			} else {
				console.log(response.data);
			}
		};
		fetchData();
	}, [condition]);
	return data;
}
export default useProductData;

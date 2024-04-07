import axios from 'axios';
import { useEffect, useState } from 'react';
import { BoughtProduct, Invoice } from '../@types/types';
import KeyCloakService from '../utils/keyCloak';

function useGetBoughtItems(condition: any) {
	const [products, setProducts] = useState<BoughtProduct[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const temp: BoughtProduct[] = [];

			try {
				const response = await axios.get<Invoice[]>(import.meta.env.VITE_ENDPOINT + '/boughtproducts', {
					params: { id: KeyCloakService.GetUserName() },
					headers: { Authorization: `Bearer ${await KeyCloakService.GetToken()}` },
				});
				if (response.status === 200) {
					await Promise.all(
						response.data.map(async (item: Invoice) => {
							const glb = await axios.get(import.meta.env.VITE_ENDPOINT + '/fetchglb', {
								params: { blobId: item.file },
								responseType: 'blob',
							});
							if (glb.status == 200) {
								const blob = new Blob([glb.data], { type: 'application/octet-stream' });
								const objectURL = URL.createObjectURL(blob);
								temp.push({ file: objectURL, data: item });
								return;
							}
							throw new Error('Internal server error');
						}),
					);
				} else {
					console.log(response);
				}
			} catch (error) {
				console.error(error);
			}

			setProducts(temp);
			setIsLoading(false);
		};
		fetchData();
	}, [condition]);
	return { products: products, isLoading: isLoading };
}

export default useGetBoughtItems;

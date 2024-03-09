import axios from 'axios';
import { useEffect, useState } from 'react';

function useLazyImage(id: string) {
	const [isLoading, setIsLoading] = useState(true);
	const [image, setImage] = useState<string | undefined>();
	useEffect(() => {
		console.log(id);
		const fetchData = async () => {
			const imageResponse = await axios.get(import.meta.env.VITE_ENDPOINT + '/productimage', {
				params: { id: id },
				responseType: 'arraybuffer',
			});
			if (imageResponse.status === 200) {
				const blob = new Blob([imageResponse.data], { type: 'image/png' });
				setImage(URL.createObjectURL(blob));
				setIsLoading(false);
			} else {
				console.log(imageResponse.data);
			}
		};
		if (id) {
			fetchData();
		}
	}, [id]);
	return { image: image, isLoading: isLoading };
}
export default useLazyImage;

import axios from 'axios';
import { useEffect, useState } from 'react';

function useProductCount(): number {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(import.meta.env.VITE_ENDPOINT + '/productcount');
			if (response.status === 200) {
				setCount(response.data.count);
			} else {
				console.log(response.data);
			}
		};
		fetchData();
	});
	return count;
}
export default useProductCount;

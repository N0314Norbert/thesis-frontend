import axios from 'axios';
import Cookies from 'universal-cookie';

export const sendLogin = async (email: string, password: string): Promise<boolean> => {
	const body = {
		email: email,
		password: password,
	};
	const response = await axios.post('http://localhost:3000/login', body, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.status == 200) {
		const cookies = new Cookies();
		cookies.set('accessToken', response.data.accessToken, { path: '/' });
		cookies.set('refreshToken', response.data.refreshToken, { path: '/' });
		return true;
	}
	return false;
};

export const sendLogout = async (): Promise<boolean> => {
	const response = await axios.delete('http://localhost:3000/logout');
	if (response.status == 204) {
		const cookies = new Cookies();
		cookies.remove('accessToken');
		cookies.remove('refreshToken');
		return true;
	}
	return false;
};

import axios from 'axios';
import { Invoice } from '../@types/types';
import KeyCloakService from './keyCloak';

export const uploadDataToTableStorage = async (invoices: Invoice[]) => {
	const config = {
		url: import.meta.env.VITE_ENDPOINT + '/uploadinvoice',
		method: 'post',
		headers: { Authorization: `Bearer ${await KeyCloakService.GetToken()}` },
		data: invoices,
	};
	axios.request(config);
};

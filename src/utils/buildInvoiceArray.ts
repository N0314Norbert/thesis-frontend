import { Invoice, ProductData } from '../@types/types';

const buildInvoiceArray = (user: string, id: string, products: ProductData[]) => {
	let invoices: Invoice[] = [];
	products.forEach((item: ProductData, index) => {
		invoices.push({
			partitionKey: 'invoices',
			rowKey: id + index.toString(),
			user: user,
			file: item.File,
			title: item.Title,
		});
	});
	return invoices;
};

export default buildInvoiceArray;

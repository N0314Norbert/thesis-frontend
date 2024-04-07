export type ProductData = {
	rowKey: string;
	partitionKey: string;
	Price: string;
	Currency: string;
	etag: string;
	timestamp: string;
	Title: string;
	Description: string;
	Format: string;
	Image: string;
	File: string;
};

export type Product = {
	data: ProductData;
	image: any;
};

export type Invoice = {
	partitionKey: string;
	rowKey: string;
	user: string;
	file: string;
	title: string;
};
export type BoughtProduct = {
	file: any;
	data: Invoice;
};

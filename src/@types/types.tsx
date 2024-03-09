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
};

export type Product = {
	data: ProductData;
	image: any;
};

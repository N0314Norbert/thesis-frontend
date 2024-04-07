import {
	Button,
	Paper,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { BoughtProduct } from '../@types/types';
import useGetBoughtItems from '../hooks/useGetBoughtItems';

function DownloadTable() {
	const { products, isLoading } = useGetBoughtItems(0);
	return (
		<div>
			<TableContainer component={Paper} sx={{ width: '30vw', ml: '15vw' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Product Name</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.map((item: BoughtProduct) => {
							return isLoading ? (
								<Skeleton width={800} height={300} />
							) : (
								<TableRow>
									<TableCell>{item.data.title}</TableCell>
									<TableCell>
										<a href={item.file} download={item.data.file}>
											<Button variant="contained">Download</Button>
										</a>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default DownloadTable;

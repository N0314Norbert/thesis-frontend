import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function CartTable(props: any) {
	return (
		<div>
			<TableContainer component={Paper} sx={{ width: '30vw' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Product Name</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props?.cartItems?.map((item: any) => {
							return (
								<TableRow>
									<TableCell>{item.Title}</TableCell>
									<TableCell>€{item.Price}</TableCell>
									<TableCell>
										<Button onClick={() => props.removeItem(item.rowKey)} variant="contained">
											Remove
										</Button>
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

export default CartTable;

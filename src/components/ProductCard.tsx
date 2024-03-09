import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardActions, CardContent, CardMedia, IconButton, Skeleton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useLazyImage from '../hooks/useLazyImage';

function ProductCard(props: any) {
	const image = useLazyImage(props.item.Image);
	return (
		<>
			{image.isLoading ? (
				<Skeleton variant="rectangular" width={330} height={350} className="products-productList-card" />
			) : (
				<Card className="products-productList-card">
					<CardMedia component="img" height="194" image={image.image} />
					<CardContent>
						<Link to={`/details/${props.item.rowKey}`}>
							<Button variant="text">
								<Typography variant="h4">{props.item.Title}</Typography>
							</Button>
						</Link>
						<Typography>{props.item.Description}</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<Typography variant="h4">{props.item.Price}</Typography>
						<IconButton onClick={props.handleToCart} className="products-productList-card-button">
							<AddShoppingCartIcon />
						</IconButton>
					</CardActions>
				</Card>
			)}
		</>
	);
}
export default ProductCard;

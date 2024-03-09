import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Html } from '@react-three/drei';

function Loading() {
	return (
		<Html>
			<div className="loading">
				<CircularProgress />
				<Typography>Please wait...</Typography>
			</div>
		</Html>
	);
}
export default Loading;

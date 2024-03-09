import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function TransitionAlert({ open, setOpen }: { open: boolean; setOpen: any }) {
	return (
		<Collapse className="alert" in={open} sx={{ zIndex: 500, width: '100%' }}>
			<Alert
				variant="filled"
				severity="error"
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				Please log in!
			</Alert>
		</Collapse>
	);
}

export default TransitionAlert;

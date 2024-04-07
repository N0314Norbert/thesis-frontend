import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

function TransitionAlert({ open, setOpen, type, text }: { open: boolean; setOpen: any; type: any; text: string }) {
	return (
		<Collapse className="alert" in={open} sx={{ zIndex: 500, width: '100%' }}>
			<Alert
				variant="filled"
				severity={type}
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
				{text}
			</Alert>
		</Collapse>
	);
}

export default TransitionAlert;

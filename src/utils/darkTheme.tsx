import { createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';

const darkTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	typography: {
		fontFamily: 'roboto',
	},
	palette: {
		primary: {
			main: '#333333',
		},
		secondary: {
			main: '#FFFFFF',
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					background: '#333333',
					borderRadius: '3px',
				},
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					width: '55px',
					height: '55px',
					color: '#FFFFFF',
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: '#FFFFFF',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					background: '#FFFFFF',
					borderRadius: '3px',
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					background: '#333333',
					width: '45vw',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					background: '#222222',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					background: '#333333',
					marginLeft: '20px',
					marginRight: '20px',
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					background: '#333333',
					color: '#fff',
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					color: '#fff',
				},
			},
		},
	},
});
export default darkTheme;

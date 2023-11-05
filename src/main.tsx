import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material';
import darkTheme from './utils/darkTheme';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ProductView from './pages/ProductView';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
					<Routes>
						<Route path="/faq" element={<Faq />} />
					</Routes>
					<Routes>
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<Routes>
						<Route path="/products" element={<Products />} />
					</Routes>
					<Routes>
						<Route path="/details" element={<ProductDetails />} />
					</Routes>
					<Routes>
						<Route path="/productviewer" element={<ProductView />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);

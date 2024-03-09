import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import CookiePrompt from './components/CookiePrompt';
import './index.css';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductView from './pages/ProductView';
import Products from './pages/Products';
import store from './store/store';
import darkTheme from './utils/darkTheme';
import KeyCloakService from './utils/keyCloak';

function App() {
	return (
		<Provider store={store}>
			<StyledEngineProvider injectFirst>
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
							<Route path="/details/:id" element={<ProductDetails />} />
						</Routes>
						<Routes>
							<Route path="/productviewer" element={<ProductView />} />
						</Routes>
						<Routes>
							<Route path="/cart" element={<Cart />} />
						</Routes>
					</BrowserRouter>
					<CookiePrompt />
				</ThemeProvider>
			</StyledEngineProvider>
		</Provider>
	);
}
KeyCloakService.Initialize(App);
export default App;

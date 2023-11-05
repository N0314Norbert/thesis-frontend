import Header from '../components/Header';
import background from '../assets/backgrounds/backgroundTest.gif';
import Footer from '../components/Footer';

function Home() {
	return (
		<>
			<Header></Header>
			<img src={background} style={{ marginBottom: -10 }}></img>
			<Footer></Footer>
		</>
	);
}
export default Home;

import { Suspense, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Header from '../components/Header';
import { Container, CssBaseline } from '@mui/material';
import Footer from '../components/Footer';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function ProductView() {
	const glb = useLoader(GLTFLoader, '../../public/Wall.glb');
	const modelRef: any = useRef();

	return (
		<>
			<Header></Header>
			<CssBaseline>
				<Container maxWidth="xl" sx={{ minHeight: '90vh', background: '#444444' }}>
					<Canvas camera={{ position: [0, 0, 5] }} style={{ height: '80vh', paddingTop: '10vh' }}>
						<Suspense fallback={null}>
							<ambientLight intensity={0.5} />
							<pointLight position={[10, 10, 10]} />
							<mesh ref={modelRef} scale={0.8}>
								<primitive object={glb.scene} />
							</mesh>
							<OrbitControls />
						</Suspense>
					</Canvas>
				</Container>
			</CssBaseline>
			<Footer></Footer>
		</>
	);
}
export default ProductView;

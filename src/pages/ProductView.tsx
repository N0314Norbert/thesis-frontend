import { Container, CssBaseline } from '@mui/material';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
function ProductView() {
	const Model = () => {
		const gltf = useLoader(GLTFLoader, 'http://localhost:3000/fetchglb?blobId=Wall.glb');

		return <primitive object={gltf.scene} />;
	};
	const modelRef: any = useRef();
	return (
		<>
			<Header />
			<CssBaseline>
				<Container maxWidth="xl" className="container">
					<Canvas camera={{ position: [0, 0, 5] }} style={{ height: '80vh', paddingTop: '10vh' }}>
						<ambientLight intensity={0.5} />
						<pointLight position={[10, 10, 10]} />
						<mesh ref={modelRef} scale={0.8}>
							<Suspense fallback={<Loading />}>
								<Model />
							</Suspense>
						</mesh>
						<OrbitControls />
					</Canvas>
				</Container>
			</CssBaseline>
			<Footer />
		</>
	);
}
export default ProductView;

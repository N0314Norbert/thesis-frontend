import { Container, CssBaseline } from '@mui/material';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
function ProductView() {
	const { id } = useParams<{ id: any }>();
	const Model = () => {
		const gltf = useLoader(GLTFLoader, `${import.meta.env.VITE_ENDPOINT}/fetchglb?blobId=${id}`);

		return <primitive object={gltf.scene} />;
	};
	const modelRef: any = useRef();
	return (
		<>
			<Header />
			<CssBaseline>
				<Container maxWidth="xl" className="container">
					<Canvas camera={{ position: [0, 0, 5] }} style={{ height: '80vh', paddingTop: '10vh' }}>
						<directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
						<ambientLight intensity={1} />
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

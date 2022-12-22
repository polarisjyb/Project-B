import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
// import { SpaceDust } from './SpaceDust';

const Sphere = (props) => {
  const mesh = useRef();
  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.y = mesh.current.rotation.z += 0.02

  });

  
  // draw the sphere
  return (
    <mesh {...props} ref={mesh}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="#f2f" />
    </mesh>
  );

}

export default function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere position={[2, 0, 0]}/>
      <OrbitControls target={[0, 0, 5]} enableDamping={true} autoRotate autoRotateSpeed={10} />
    </>
    // <>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <Box position={[0, 0, 0]} />
    //   <OrbitControls autoRotate autoRotateSpeed={5} />
    // </>
  );
}
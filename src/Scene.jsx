import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useHelper, Svg } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import Effects from "./Effects";

const Scene = () => {
  const sunShine = useRef();
  const rotationAxisSol = useRef();
  const rotationAxisMercury = useRef();
  const rotationAxisVenus = useRef();
  const rotationAxisEarth = useRef();
  const rotationAxisMars = useRef();
  const rotationAxisJupiter = useRef();
  const rotationAxisSaturn = useRef();
  const rotationAxisUranus = useRef();
  const rotationAxisNeptune = useRef();
  const lightRef = useRef();
  const mercuryOrbit = useRef();
  const venusOrbit = useRef();
  const earthOrbit = useRef();
  const marsOrbit = useRef();
  const jupiterOrbit = useRef();
  const saturnOrbit = useRef();
  const uranusOrbit = useRef();
  const neptuneOrbit = useRef();
  // useHelper(lightRef, THREE.PointLightHelper, 12);

  // ---loading of assets---
  const sol = useLoader(THREE.TextureLoader, "/sunmap.jpg");
  const mercury = useLoader(THREE.TextureLoader, "/mercurymap.jpg");
  const venus = useLoader(THREE.TextureLoader, "./venusmap.jpg");
  const earth = useLoader(THREE.TextureLoader, "/earthmap.jpg");
  const mars = useLoader(THREE.TextureLoader, "/marsmap.jpg");
  const jupiter = useLoader(THREE.TextureLoader, "/jupitermap.jpg");
  const saturn = useLoader(THREE.TextureLoader, "/saturnmap.jpg");
  const saturnRings = useLoader(THREE.TextureLoader, "/saturn-ring.png");
  const uranus = useLoader(THREE.TextureLoader, "/uranusmap.jpg");
  const uranusRings = useLoader(THREE.TextureLoader, "/uranus-ring.png");
  const neptune = useLoader(THREE.TextureLoader, "/neptunemap.jpg");

  // ---3d model movements---
  useFrame(() => {
    // ---rotation on axis---
    rotationAxisSol.current.rotation.y += 0.05;
    rotationAxisMercury.current.rotation.y += 0.004;
    rotationAxisVenus.current.rotation.y += 0.02;
    rotationAxisEarth.current.rotation.y += 0.2;
    rotationAxisMars.current.rotation.y += 0.18;
    rotationAxisJupiter.current.rotation.y += 0.04;
    rotationAxisSaturn.current.rotation.y += 0.038;
    rotationAxisUranus.current.rotation.y += 0.03;
    rotationAxisNeptune.current.rotation.y += 0.032;

    // ---orbit around the sun---
    mercuryOrbit.current.rotation.y += 0.04;
    venusOrbit.current.rotation.y += 0.015;
    earthOrbit.current.rotation.y += 0.01;
    marsOrbit.current.rotation.y += 0.008;
    jupiterOrbit.current.rotation.y += 0.002;
    saturnOrbit.current.rotation.y += 0.0009;
    uranusOrbit.current.rotation.y += 0.0004;
    neptuneOrbit.current.rotation.y += 0.0001;
  });

  return (
    <>
      {/* <Physics> */}
      <OrbitControls />

      <Effects ref={sunShine} />

      <pointLight
        position={[0, 0, 0]}
        intensity={3000}
        color="#fff"
        ref={lightRef}
        // shadow-mapSize-height={1024}
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={2048}
        // shadow-mapSize-width={2048}
        shadow-mapSize-height={4096}
        shadow-mapSize-width={4096}
        castShadow
      />

      {/* <ambientLight /> */}
      {/* <gridHelper args={[200, 200, "cyan"]} /> */}
      {/* <axesHelper args={[13]} /> */}

      <Environment background files={"/hiptyc_2020_4k_gal.exr"} />

      {/* ---sol--- */}
      <mesh ref={rotationAxisSol}>
        <mesh ref={sunShine}>
          <sphereGeometry args={[10, 64, 64]} />
          <meshBasicMaterial map={sol} color="orange" />
        </mesh>
      </mesh>

      {/* ---Mercury--- */}
      <mesh ref={mercuryOrbit} rotation-y={Math.PI / 2}>
        <mesh ref={rotationAxisMercury} position-z={12} castShadow>
          <sphereGeometry args={[0.17, 64, 64]} />
          <meshStandardMaterial map={mercury} />
        </mesh>
      </mesh>

      {/* ---Venus--- */}
      <mesh ref={venusOrbit} rotation-y={Math.PI / -3}>
        <mesh
          ref={rotationAxisVenus}
          position-z={14.62}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[0.45, 64, 64]} />
          <meshStandardMaterial map={venus} />
        </mesh>
      </mesh>

      {/* ---Earth--- */}
      <mesh ref={earthOrbit} rotation-y={Math.PI / 1.25}>
        <mesh
          ref={rotationAxisEarth}
          rotation-x={Math.PI * -0.125}
          position-z={17.62}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[0.5, 64, 64]} />
          <meshStandardMaterial map={earth} />
        </mesh>
      </mesh>

      {/* ---Mars--- */}
      <mesh ref={marsOrbit} rotation-y={Math.PI / 1.5}>
        <mesh
          ref={rotationAxisMars}
          position-z={20.42}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[0.25, 64, 64]} />
          <meshStandardMaterial map={mars} />
        </mesh>
      </mesh>

      {/* ---Jupiter--- */}

      <mesh ref={jupiterOrbit}>
        <mesh
          ref={rotationAxisJupiter}
          position-z={28.25}
          castShadow
          receiveShadow
        >
          {/* <axesHelper args={[13]} /> */}
          <sphereGeometry args={[5.5, 64, 64]} />
          <meshStandardMaterial map={jupiter} />
        </mesh>
      </mesh>

      {/* ---Saturn--- */}
      <mesh ref={saturnOrbit} rotation-y={Math.PI / -1.125}>
        <mesh
          ref={rotationAxisSaturn}
          rotation-x={Math.PI * -0.064}
          position-z={40.26}
          castShadow
          receiveShadow
        >
          {/* <axesHelper args={[13]} /> */}
          <sphereGeometry args={[4.5, 64, 64]} />
          <meshStandardMaterial map={saturn} />
          <mesh rotation-x={Math.PI * -0.5} castShadow receiveShadow>
            <ringGeometry args={[5, 7, 64, 64]} />
            <meshStandardMaterial
              map={saturnRings}
              side={THREE.DoubleSide}
              transparent
            />
          </mesh>
        </mesh>
      </mesh>

      {/* ---Uranus--- */}
      <mesh ref={uranusOrbit} rotation-y={Math.PI / -1.25}>
        <mesh
          ref={rotationAxisUranus}
          position-z={48.76}
          rotation-x={Math.PI * -0.064}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial map={uranus} />
          <mesh rotation-x={Math.PI * -0.5} castShadow receiveShadow>
            <ringGeometry args={[2.3, 3.2, 64, 64]} />
            <meshStandardMaterial
              map={uranusRings}
              side={THREE.DoubleSide}
              transparent
            />
          </mesh>
        </mesh>
      </mesh>

      {/* ---Neptune--- */}
      <mesh ref={neptuneOrbit} rotation-y={Math.PI / 1.5}>
        <mesh
          ref={rotationAxisNeptune}
          position-z={54.75}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[1.9, 64, 64]} />
          <meshStandardMaterial map={neptune} />
        </mesh>
      </mesh>
      {/* </Physics> */}
    </>
  );
};

export default Scene;

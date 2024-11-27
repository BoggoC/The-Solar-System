import { createRoot } from "react-dom/client";
import "./styles.css";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.01,
        far: 2000,
        // position: [1, 1, 40],
        // -behind Jupiter-
        // position: [0, 1, 37],
        // -behind Uranus-
        // position: [-0.5, -0.25, 52],
        // -behind Neptune-
        position: [-1.2, 0.25, 58],
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
    <Loader />
  </>
);

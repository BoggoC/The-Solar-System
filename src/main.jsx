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
        near: 0.1,
        far: 100,
        // position: [1, 1, 40],
        position: [0, 1, 37],
        // position: [-0.5, -0.25, 52],
      }}
    >
      <Scene />
    </Canvas>
  </>
);

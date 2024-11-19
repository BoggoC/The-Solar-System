import { EffectComposer, GodRays } from "@react-three/postprocessing";
import * as THREE from "three";
import { Mesh, MeshBasicMaterial } from "three";

let mesh = new Mesh(
  new THREE.SphereGeometry(10, 64, 64),
  new MeshBasicMaterial({
    color: "orange",
    transparent: true,
    opacity: 1,
  })
);

const Effects = () => {
  return (
    <EffectComposer>
      <GodRays sun={mesh} />
    </EffectComposer>
  );
};

export default Effects;

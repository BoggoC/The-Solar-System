import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { forwardRef, Suspense, useEffect } from "react";

const Effects = forwardRef((props, ref) => {
  return (
    <EffectComposer>
      {ref.current && (
        <GodRays sun={ref.current} samples={60} density={0.96} blur={true} />
      )}
    </EffectComposer>
  );
});

export default Effects;

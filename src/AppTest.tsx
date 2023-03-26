import {
  Canvas,
  useThree,
  useFrame,
  useLoader,
  MeshProps,
} from "@react-three/fiber";
import { TextureLoader } from "three";
import { Vector3 } from "three";
import { useRef, useState, useMemo } from "react";
import Drawings from "./assets/drawings/drawings-exports";
import Card from "./components/three-elements/card";
import { OrbitControls } from "@react-three/drei";

function AppTest() {
  const [freeze, setFreeze] = useState<boolean>(true);
  return (
    <div
      style={{
        width: "400px",
        height: "400px", 
      }}
    >
      <Canvas
        onPointerEnter={() => setFreeze(false)}
        onPointerLeave={() => setFreeze(true)}
      >
        <Card
          freeze={freeze}
          meshArgs={{ position: [0, 0, 0] }}
          img={Drawings.bee}
        />
      </Canvas>
    </div>
  );
}

export default AppTest;

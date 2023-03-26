import { useFrame, useLoader, MeshProps } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Vector3 } from "three";
import { useRef } from "react";
import { clamp } from "three/src/math/MathUtils";

type Props = {
  freeze?: boolean;
  meshArgs?: { [key: string]: string };
  img: string;
  helper: boolean;
};

function Card(props: Props) {
  const { freeze, meshArgs, img, helper } = props;

  const texture = useLoader(TextureLoader, img);
  const mesh = useRef<MeshProps>();
  const lastPosition = useRef<Vector3>(new Vector3(0, 0, 1));

  useFrame(({ pointer }) => {
    if (freeze) {
      mesh.current?.lookAt(lastPosition.current);

      const xClamp =
        lastPosition.current.x > 0
          ? clamp(lastPosition.current.x - 0.03, 0, lastPosition.current.x)
          : clamp(lastPosition.current.x + 0.03, lastPosition.current.x, 0);
      const yClamp =
        lastPosition.current.y > 0
          ? clamp(lastPosition.current.y - 0.03, 0, lastPosition.current.y)
          : clamp(lastPosition.current.y + 0.03, lastPosition.current.y, 0);

      lastPosition.current.x = xClamp;
      lastPosition.current.y = yClamp;
    } else {
      let x = pointer.x;
      let y = pointer.y;

      x = clamp(x, -0.2, 0.2);
      y = clamp(y, -0.1, 0.1);

      lastPosition.current.x = x;
      lastPosition.current.y = y;
      mesh.current?.lookAt(x, y, 1);
    }
  });
  return (
    <mesh {...meshArgs} ref={mesh}>
      {helper && <arrowHelper />}
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Card;

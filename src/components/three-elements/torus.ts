import { TorusGeometry, MeshBasicMaterial, Mesh } from "three";

const geometry = new TorusGeometry(10, 3, 16, 100);
const material = new MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});
export const torus = new Mesh(geometry, material);

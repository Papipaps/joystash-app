import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import Fighters from "../assets/characters/fighter-exports";
import CharactersGrid, { Character } from "./characters-grid";
import { SelectionContext, SelectionProvider } from "./selection-provider";
import Card from "./three-elements/card";

function Tekken() {
  const characters: Character[] = [
    {id:1, name: "Kazuya", img: Fighters.fighter11 },
    {id:2, name: "Jin", img: Fighters.fighter12 },
    {id:3, name: "Heihachi", img: Fighters.fighter13 },
    {id:4, name: "Nina", img: Fighters.fighter14 },
    {id:5, name: "Paul", img: Fighters.fighter15 },
    {id:6, name: "Law", img: Fighters.fighter16 },
    {id:7, name: "King", img: Fighters.fighter17 },
    {id:8, name: "Yoshimitsu", img: Fighters.fighter18 },
    {id:9, name: "Lei", img: Fighters.fighter19 },
    {id:10, name: "Anna", img: Fighters.fighter20 },
  ];
  const { selected } = useContext(SelectionContext);

  const nb_cols: number = 4;
  const nb_rows: number = Math.ceil(characters.length / nb_cols);
  const iconSize: number = 150;
  const previewHeight: number = nb_rows * (iconSize !== 0 ? iconSize : 100);

  return (
    <div>
      <h1>Tekken Selection Grid</h1>
      <div style={{ display: "flex"}}>
           <CharactersGrid
            style={1}
            iconSize={iconSize}
            cols={nb_cols}
            rows={nb_rows}
            characters={characters}
          />
          <Canvas
            style={{height: `${previewHeight}px` }}
          >
            {
              <Card img={characters?.find(({ id }) => id === selected)?.img} />
            }
          </Canvas>
       </div>
    </div>
  );
}

export default Tekken;

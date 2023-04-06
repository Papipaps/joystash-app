import { useContext } from "react";
import Fighters from "../assets/characters/fighter-exports";
import CharactersGrid, { Character } from "./characters-grid";
import { SelectionContext } from "./selection-provider";

function UNIB() {
  const { selected } = useContext(SelectionContext);
  const characters = [
    { id: 1, name: "Huh-Long", img: Fighters.fighter1 },
    { id: 2, name: "Tara", img: Fighters.fighter2 },
    { id: 3, name: "Charlie", img: Fighters.fighter3 },
    { id: 4, name: "Grace", img: Fighters.fighter4 },
    { id: 5, name: "Kaitlyn", img: Fighters.fighter5 },
    { id: 6, name: "Taliyah", img: Fighters.fighter6 },
    { id: 7, name: "Grace", img: Fighters.fighter7 },
    { id: 8, name: "Hery", img: Fighters.fighter8 },
    { id: 9, name: "Isabelle", img: Fighters.fighter9 },
    { id: 10, name: "Jade Hu", img: Fighters.fighter10 },
    { id: 11, name: "Bordannov", img: Fighters.fighter11 },
    { id: 12, name: "Aedenh", img: Fighters.fighter12 },
    { id: 13, name: "Mia", img: Fighters.fighter13 },
    { id: 14, name: "Nathan", img: Fighters.fighter14 },
    { id: 15, name: "Oliver", img: Fighters.fighter15 },
    { id: 16, name: "Rivaï", img: Fighters.fighter16 },
    { id: 17, name: "Rick", img: Fighters.fighter17 },
    { id: 18, name: "Neewa", img: Fighters.fighter18 },
    { id: 19, name: "Ildia", img: Fighters.fighter19 },
    { id: 20, name: "Sarros", img: Fighters.fighter20},
  ];
  
   const character: Character | undefined = characters.find(
    ({ id }) => id === selected
  );
  return (
    <div>
      <h1>Sélection de personnage</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            border: "1px solid black",
          }}
        >
          <p
            style={{
              zIndex: "10",
              color: "white",
              position: "absolute",
              bottom:'0',
              textAlign: "center",
              fontSize: "3.5rem",
              background:'rgba(0,0,0,0.7)'
            }}
          >
            {character?.name}
          </p>
          <img src={character?.img} />
        </div>
        <CharactersGrid characters={characters} />
      </div>
    </div>
  );
}

export default UNIB;

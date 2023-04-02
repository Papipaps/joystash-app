import { useContext } from "react";
import Fighters from "../assets/characters/fighter-exports";
import CharactersGrid, { Character } from "./characters-grid";
import { SelectionContext } from "./selection-provider";

function UNIB() {
  const { selected } = useContext(SelectionContext);
  const characters: Character[] = [
    { id: 1, name: "Kazuya", img: Fighters.fighter11 },
    { id: 2, name: "Jin", img: Fighters.fighter12 },
    { id: 3, name: "Heihachi", img: Fighters.fighter13 },
    { id: 4, name: "Nina", img: Fighters.fighter14 },
    { id: 5, name: "Paul", img: Fighters.fighter15 },
    { id: 6, name: "Law", img: Fighters.fighter16 },
    { id: 7, name: "King", img: Fighters.fighter17 },
    { id: 8, name: "Yoshimitsu", img: Fighters.fighter18 },
    { id: 9, name: "Lei", img: Fighters.fighter19 },
    { id: 10, name: "Anna", img: Fighters.fighter20 },
  ];
  console.log(characters?.find(({ id }) => id === selected));
  return (
    <div>
      <h1> Under Night In-Birth character select</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="img-wrapper">
          <img src={characters?.find(({ id }) => id === selected)?.img} />
        </div>
        <CharactersGrid characters={characters} style={2} />
      </div>
    </div>
  );
}

export default UNIB;

import { useContext, useEffect, useRef, useState } from "react";
import { SelectionContext } from "../selection-provider";
import "../../styles/UNIB.css";
import audio from "../../assets/audio/FunkyOne.mp3";
import { characters } from "../../assets/characters/fighters";
import CharactersGrid, { Character } from "../organisms/CharactersGrid";

function UNIB() {
  const { selected } = useContext(SelectionContext);
  const audioRef = useRef<HTMLAudioElement>(null);

  const character: Character | undefined = characters.find(
    ({ id }) => id === selected
  );

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current?.play();
    }
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <main className="selection-background">
      <audio
        style={{ position: "fixed" }}
        src={audio}
        ref={audioRef}
        controls
      ></audio>
      <h1 style={{ color: "white" }}>Sélection de personnage</h1>
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
          }}
        >
          <p
            style={{
              zIndex: "10",
              color: "white",
              position: "absolute",
              bottom: "0",
              textAlign: "center",
              fontSize: "3rem",
              background: "rgba(0,0,0,0.7)",
            }}
          >
            {character?.name}
          </p>
          <img style={{ width: "350px" }} src={character?.img} />
        </div>
        <CharactersGrid characters={characters} />
      </div>
    </main>
  );
}

export default UNIB;

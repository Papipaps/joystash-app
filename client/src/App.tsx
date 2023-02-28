import { Compteur, Message } from "./components/Test";
import { createTRPCProxyClient, httpBatchLink, httpLink } from "@trpc/client";
import { AppRouter } from "../../server/server";
import { text } from "stream/consumers";
import { useState } from "react";
import { Game } from "./types-aliases/TypeGame";
import { GameResponseObject } from "./types-aliases/gameResultObject";
import React from "react";
const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

function App() {
  const [previewMessage, setPreviewMessage] = useState<string>("");
  const [gameList, setGameList] = useState<Array<Game> | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9);

  React.useEffect(() => {
    getGameList();  
  }, []); 

  function getGameList() {
    client.game.list
      .query({ page, pageSize })
      .then((response: GameResponseObject) => {
        setGameList(response.results.map(({ ...Game }) => ({ ...Game })));
      });
  }

  function previewInput(e: React.FormEvent<HTMLInputElement>) {
    setPreviewMessage(e.currentTarget.value);
  }

  return (
    <div> 
      <button onClick={getGameList}>FETCH GAME</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {gameList?.map((game) => (
          <div
            style={{
              width: "600px",
            }}
          >
            <h2>{game.name}</h2>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={game.background_image}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

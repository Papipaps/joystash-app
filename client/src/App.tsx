import { Compteur, Message } from "./components/Test";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
 import { AppRouter } from "../../server/server";
import { text } from "stream/consumers";
import { useState } from "react";
const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});




function App() {
  const [previewMessage,setPreviewMessage]=useState<string>("")
  async function main(e:React.SyntheticEvent) {
    e.preventDefault();
    const res = await client.greeting.query();
    console.log(res); 
    const resMessage = await client.testInput.mutate(previewMessage);
    console.log(resMessage);  
  }
  function previewInput(e:React.FormEvent<HTMLInputElement>){
    setPreviewMessage(e.currentTarget.value)
  }
  return (
    <div>
      <Compteur />
      <Message message="Coucou les gens" />
      
      <form onSubmit={main}>

      <label>Message <input type="text" onChange={previewInput}/></label>
      <p>preview : {previewMessage}</p>
      <button type="submit">envoyer</button>
      </form>
    </div>
  );
}

export default App;

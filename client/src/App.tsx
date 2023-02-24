import { Compteur, Message } from "./components/Test";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
 import { AppRouter } from "../../joystash-server/server";
const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  const res = await client.sayHi.query();
  console.log(res);
  const res2 = await client.logToServer.mutate("Hi from client")
  console.log(res2)
  const res3 = await client.users.getGame.query();
  console.log(res);
}
main();

function App() {
  return (
    <div>
      <Compteur />
      <Message message="Coucou les gens" />
    </div>
  );
}

export default App;

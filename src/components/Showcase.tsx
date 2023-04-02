import Navbar from "./Navbar";
import { SelectionProvider } from "./selection-provider";
import Tekken from "./tekken";
import UNIB from "./UNIB";
import "../styles/Showcase.css"

function Showcase() {
  return (
    <main >
      <Navbar/>
      <SelectionProvider>
        <Tekken />
        <UNIB />
      </SelectionProvider>
    </main>
  );
}

export default Showcase;

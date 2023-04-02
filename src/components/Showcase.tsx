import Navbar from "./Navbar";
import { SelectionProvider } from "./selection-provider";
import UNIB from "./UNIB";
import "../styles/Showcase.css";

function Showcase() {
  return (
    <main>
      <Navbar />
      <SelectionProvider>
        <UNIB />
      </SelectionProvider>
    </main>
  );
}

export default Showcase;

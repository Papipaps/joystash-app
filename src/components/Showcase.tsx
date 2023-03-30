import { SelectionProvider } from "./selection-provider";
import Tekken from "./tekken";
import UNIB from "./UNIB";

function Showcase() {
  return (
    <div >
      <SelectionProvider>
        <Tekken />
        <UNIB />
      </SelectionProvider>
    </div>
  );
}

export default Showcase;

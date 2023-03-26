import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/showcase"}>1</Link>
        </li>
        <li>
          <Link to={"/home"}>2</Link>
        </li>
        <li>
          <Link to={"/contact"}>3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

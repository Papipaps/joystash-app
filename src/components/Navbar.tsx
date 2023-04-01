import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [opened, setOpened] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  function toggleMenu() {
    setOpened((prevState) => !prevState);
  }
  useEffect(() => {
    const handleExit = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggleMenu();
      }
    };
    document.addEventListener("mousedown", handleExit);

    return () => {
      document.removeEventListener("mousedown", handleExit);
    };
  }, []);

  return (
    <nav>
      <div className="menu-wrapper">
        <h3 onClick={toggleMenu} className="burger-menu">
          PAPIPAPS
        </h3>
        <ul className="mobile-menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/showcase"}>Showcase</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        {opened && (
          <ul ref={wrapperRef} className="menu-overlay">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/showcase"}>Showcase</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

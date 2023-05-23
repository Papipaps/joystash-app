import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useRef, useState } from "react";

function Navbar() {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    first
  
    return () => {
      second
    };
  }, [third])
  function handleMouseHover(e:MouseEvent){
    
  }

  function Tabs() {
    const location = useLocation();
    console.log(location.pathname);
    return (
      <ul className={styles.tabs}>
        <li className={`${location.pathname === "/" && styles.active}`}>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={`${location.pathname === "/showcase" && styles.active}`}>
          <Link to={"/showcase"}>Showcase</Link>
        </li>
        <li className={`${location.pathname === "/contact" && styles.active}`}>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    );
  }

  return (
    <nav onMouseEnter={handleMouseHover} className={styles.wrapper}>
      <div ref={titleRef} className={styles.titleWrapper}>
        <h3  className={styles.title}>
          PAPIPAPS
        </h3>
      </div>
      <Tabs />
    </nav>
  );
}

export default Navbar;

import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useLayoutEffect, useRef, useState } from "react";

function Navbar() {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    return () => {};
  }, []);
  // function handleMouseHover(e: MouseEvent) {}

  function Tabs() {
    const location = useLocation();
    return (
      <ul className={styles.tabs}>
        <li
          className={[
            styles.item,
            location.pathname === "/" && styles.active,
          ].join(" ")}
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={[
            styles.item,
            location.pathname === "/showcase" && styles.active,
          ].join(" ")}
        >
          <Link to={"/showcase"}>Showcase</Link>
        </li>
        <li
          className={[
            styles.item,
            location.pathname === "/contact" && styles.active,
          ].join(" ")}
        >
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className={styles.wrapper}>
      <div ref={titleRef} className={styles.titleWrapper}>
        <h3 className={styles.title}>PAPIPAPS</h3>
      </div>
      <Tabs />
    </nav>
  );
}

export default Navbar;

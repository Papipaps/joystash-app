import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

function Navbar() {
  const wrapperRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <div className="menu-wrapper">
        <Button onClick={handleClick} className="burger-menu">
          <MenuIcon />
          PAPIPAPS
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          ref={wrapperRef}
          className="menu-overlay"
        >
          <MenuItem>
            <Link to={"/"}>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/showcase"}>Showcase</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/contact"}>Contact</Link>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;

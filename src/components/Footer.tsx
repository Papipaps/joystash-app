import { Divider } from "@mui/material";
import "../styles/Footer.css"
import Drawings from "../assets/drawings/drawings-exports";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <>
      <Divider />
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Footer</p>
        <div
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
          <LinkedInIcon className="icon" />
          <GitHubIcon className="icon" />
          <InstagramIcon className="icon" />
        </div>
      </footer>
    </>
  );
}

export default Footer;

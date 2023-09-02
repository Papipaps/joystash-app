import { Divider } from "@mui/material";
import "../styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="icons-list">
          <LinkedInIcon className="icon" />
          <GitHubIcon className="icon" />
          <InstagramIcon className="icon" />
        </div>
        <p>@Papipaps</p>
      </footer>
    </>
  );
}

export default Footer;

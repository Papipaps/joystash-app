import { Divider } from "@mui/material";
import "../../styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <>
      <Divider />
      <footer className="footer-container">
        <p>Footer</p>
        <div className="icons-list">
          <LinkedInIcon className="icon" />
          <GitHubIcon className="icon" />
          <InstagramIcon className="icon" />
        </div>
      </footer>
    </>
  );
}

export default Footer;

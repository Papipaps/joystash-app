import "../styles/Home.css";
import Carousel from "./Carrousel";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TechIcons from "../assets/tech/techimages-export";
import BulletList from "./BulletList";
import Testimony from "./Testimony";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const techSkills = [
  {
    name: "Java",
    imageUrl: TechIcons.java,
    description:
      "Mon langage de coeur, la majorité de mes projets sont fait en Java et mon but est de maitriser ce langage qui est robuste et très polivalent",
  },
  { name: "Springboot", imageUrl: TechIcons.spring, description: "" },
  { name: "React", imageUrl: TechIcons.react, description: "" },
  { name: "Typescript", imageUrl: TechIcons.ts, description: "" },
  { name: "Docker", imageUrl: TechIcons.docker, description: "" },
  { name: "Jenkins", imageUrl: TechIcons.jenkins, description: "" },
  { name: "Mongodb", imageUrl: TechIcons.mongodb, description: "" },
  {
    name: "Elasticsearch",
    imageUrl: TechIcons.elasticsearch,
    description: "",
  },
  { name: "Postgresql", imageUrl: TechIcons.pgsql, description: "" },
  { name: "Neo4j", imageUrl: TechIcons.neo4j, description: "" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <div className="background" />
      <header>
        <Navbar />
        <div className="container">
          <div className="hero">
            <div className="hero-left">
              <div className="hero-message">
                <h1>Salut à tous !</h1>
                <p>
                  Je suis un développeur web, mais aussi un créatif et je
                  profite de mes compétences pour vous proposer ce portfolio
                  écrit en React avec Typescript.
                </p>
              </div>
            </div>
            <div className="hero-right">
              <Carousel
                images={[
                  "/images/m_1.png",
                  "/images/m_2.png",
                  "/images/m_3.png",
                  "/images/m_4.png",
                  "/images/m_5.png",
                ]}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="testimony-wrapper">
        <div>
          <Testimony />
        </div>
      </div>
      <div className="about-wrapper">
        <About />
      </div>
      <BulletList items={techSkills} />
      <div className="showcase-btn">
        <h2>Allez vers la gallerie</h2>
        <button onClick={() => navigate("/showcase")}>Suivant</button>
      </div>

      <Divider />
      <Footer />
    </main>
  );
};

export default Home;

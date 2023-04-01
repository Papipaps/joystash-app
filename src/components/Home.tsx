import "../styles/Home.css";
import Carousel from "./Carrousel";
import Drawings from "../assets/drawings/drawings-exports";
import About from "./About";
import Footer from "./Footer";
import { useRef, useState } from "react";
import Navbar from "./Navbar";
import TechIcons from "../assets/tech/techimages-export";
import BulletList from "./BulletList";
import { fakeTestimonials } from "../assets/Celebrities/celeb-export";
import Testimony from "./Testimony";

const Home = () => {
  const [active, setActive] = useState<boolean>(false);
  const [timeline, SetTimeline1] = useState<gsap.core.Timeline>();
  const [testimonyIndex, SetTestimonyIndex] = useState<number>(0);

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

  return (
    <>
      <main className="home-container">
        <div className="background" />
        <header>
          <Navbar />
          <div className="container">
            <div className="hero">
              <div className="hero-left">
                <div className="hero-message">
                  <p>
                    Salut ! Je suis un développeur web, mais aussi un créatif et
                    je profite de mes compétences en web pour vous proposer ce
                    portfolio écrit en React avec Typescript. 😊👍
                  </p>
                </div>
              </div>
              <div className="hero-right">
                <Carousel
                  images={[Drawings.jojo, Drawings.beach, Drawings.baseball]}
                />
              </div>
            </div>
          </div>
        </header>
        <div className="testimony-wrapper">
          <div className="testimony-selector-wrapper">
            {fakeTestimonials.map((e, index) => (
              <div
                className="testimony-selector"
                onClick={() => SetTestimonyIndex(index)}
              />
            ))}
          </div>
          {<Testimony testimony={fakeTestimonials[testimonyIndex]} />}
        </div>
        <div className="about-wrapper">
          <About />
        </div>
        <div className="bullet-wrapper">
          <BulletList items={techSkills} />
        </div>
        <div className="showcase-btn">
          <h2>Allez vers la gallerie</h2>
          <button>Suivant</button>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;

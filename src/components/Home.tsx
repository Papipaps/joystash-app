import "../styles/Home.css";
import Carousel from "./Carrousel";
import Drawings from "../assets/drawings/drawings-exports";
import { Avatar } from "@mui/material";
import About from "./About";
import Footer from "./Footer";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import EditIcon from "@mui/icons-material/Edit";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import GroupIcon from "@mui/icons-material/Group";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import TechIcons from "../assets/tech/techimages-export";
import BulletList from "./BulletList";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const [timeline, SetTimeline1] = useState<gsap.core.Timeline>();

  const toggleActive = () => setActive((prevState) => !prevState);

  const softSkills = [
    { name: "Curiosité", icon: <PsychologyAltIcon /> },
    { name: "Sens du collectif", icon: <GroupIcon /> },
    { name: "Autonomie", icon: <LinkOffIcon /> },
    { name: "Créativité", icon: <EditIcon /> },
  ];
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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      SetTimeline1(tl);
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const heroText = heroTextRef.current;
    if (timeline) {
      timeline.to(hero, {
        duration: 0.3,
        ease: "power1.out",
        left: "20%",
      });
      timeline.fromTo(
        heroText,
        {
          position: "absolute",
          opacity: 0,
        },
        {
          duration: 0.1,
          ease: "power1.out",
          position: "static",
          opacity: 1,
        }
      );
    }
  }, [timeline]);

  useLayoutEffect(() => {
    timeline && timeline.reversed(!active);
  }, [active, timeline]);

  return (
    <>
      <Navbar />
      <main className="home-container">
        <header>
          <h1 className="home-btn">BIENVENUE</h1>
          <div className="container">
            <div className="avatar-wrapper">
              <div onClick={toggleActive} ref={heroRef} className="avatar">
                <Avatar
                  src={Drawings.jojo}
                  className="header-avatar"
                  alt="avatar de papipaps"
                  sx={{ width: 125, height: 125 }}
                />
                <p ref={heroTextRef}>easter egg</p>
              </div>
            </div>
            <div className="hero">
              <div className="hero-left">
                <div>
                  <h2>TITLE</h2>
                  <p>
                    Salut ! Je suis un développeur web, mais aussi un créatif et
                    je profite de mes compétences en web pour vous proposer ce
                    portfolio écrit en React avec Typescript. 😊👍
                  </p>
                </div>
                <p>
                  Description : Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat natus quam ut voluptatum adipisci
                  temporibus tempora eligendi doloremque optio. Iure rerum
                  asperiores earum corrupti similique, totam quam consectetur
                  quod modi.
                </p>
              </div>
              <div className="hero-right">
                <Carousel
                  images={[Drawings.bee, Drawings.couki, Drawings.bunny]}
                />
              </div>
            </div>
          </div>
        </header>
        <div className="about-wrapper">
          <About />
        </div>
        <div className="bullet-wrapper">
          <BulletList title="Compétences techniques" items={techSkills} />
          {/* <BulletPoint title="Qualités personnelles" items={softSkills} /> */}
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

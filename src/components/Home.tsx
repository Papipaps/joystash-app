import "../styles/Home.css";
import Carousel from "./Carrousel";
import Drawings from "../assets/drawings/drawings-exports";
import { Avatar, Divider } from "@mui/material";
import About from "./About";
import Footer from "./Footer";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const [timeline, SetTimeline1] = useState<gsap.core.Timeline>();

  const toggleActive = () => setActive((prevState) => !prevState);

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
          <h1>BIENVENUE</h1>
          <div onClick={toggleActive} className="hero-wrapper">
            <div ref={heroRef} className="hero">
              <Avatar
                className="header-avatar"
                alt="Jordan P"
                sx={{ width: 125, height: 125 }}
                sizes="100px"
              />
              <p ref={heroTextRef}>Bonjour</p>
            </div>
          </div>
        </header>
        <p>
          Salut ! Je suis un développeur web, mais aussi un créatif et je
          profite de mes compétences en web pour vous proposer ce portfolio
          écrit en React avec Typescript. 😊👍
        </p>
        <div className="home-carousel-wrapper">
          <Carousel images={[Drawings.bee, Drawings.couki, Drawings.bunny]} />
        </div>
        <About />
        <Footer />
      </main>
    </>
  );
};

export default Home;

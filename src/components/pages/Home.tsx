import "../../styles/Home.css";
import Carousel from "../molecules/Carrousel";
import Drawings from "../../assets/drawings/drawings-exports";
import About from "../molecules/About";
import Footer from "../organisms/Footer";
import { useLayoutEffect, useRef, useState } from "react";
import Navbar from "../organisms/Navigation/Navbar";
import BulletList from "../molecules/BulletList";
import { fakeTestimonials } from "../../assets/fake-reviews/review-export";
import Testimony from "../molecules/Testimony";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { undrawSVG } from "../../assets/drawings/svg-exports";
import { techSkills } from "../../assets/tech/tech";

/* <TODO>
responsive de la section ABOUT, le design du choix des qualités
</TODO> */

const Home = () => {
  const [testimonyIndex, SetTestimonyIndex] = useState<number>(0);
  const testimonyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        testimonyRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      );
    });

    return () => ctx.revert();
  }, [testimonyIndex]);

  return (
    <main className="home-container">
      <div className="background" />
      <header>
        <Navbar />
        <div className="container">
          <div className="hero">
            <div className="hero-left">
              <div className="hero-message">
                <h1>Salut à tous ! 👋</h1>
                <p>
                  Je suis un développeur web, mais aussi un créatif et je
                  profite de mes compétences pour vous proposer ce portfolio
                  écrit en React avec Typescript. 😊👍
                </p>
              </div>
            </div>
            <div className="hero-right">
              <Carousel
                images={[Drawings.jojo, Drawings.running, Drawings.baseball]}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="testimony-wrapper">
        <div className="testimony-selector-wrapper">
          {fakeTestimonials.map((e, index) => (
            <div
              className={`testimony-selector ${
                testimonyIndex === index && "selector-active"
              }`}
              onClick={() => SetTestimonyIndex(index)}
            />
          ))}
        </div>
        <div ref={testimonyRef}>
          <Testimony testimony={fakeTestimonials[testimonyIndex]} />
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
      <Footer />
    </main>
  );
};

export default Home;

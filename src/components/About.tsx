import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles/About.css";
import Card from "./Card";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { undrawSVG } from "../assets/drawings/svg-exports";

gsap.registerPlugin(ScrollTrigger);

type SkillType = {
  id: number;
  name: string;
  description: string;
  color?: string;
};

const softSkills: SkillType[] = [
  {
    id: 1,
    name: "Curiosité",
    description:
      "Toujours avide de nouvelles connaissances, je cherche à développer mes compétences en informatique, montage vidéo/photo, illustration, musique, modélisation 2D, etc.",
    color: "#FD8A8A",
  },
  {
    id: 4,
    name: "Sens du collectif",
    description:
      "J'aime travailler en groupe pour confronter les idées et atteindre les objectifs ensemble",
    color: "rgb(106, 255, 241)",
  },
  {
    id: 2,
    name: "Autonomie",
    description:
      "Grâce à ma capacité d'apprentissage autonome, je peux être efficace dans un groupe ou travailler en solo.",
    color: "rgb(131, 219, 91)",
  },
  {
    id: 3,
    name: "Créativité",
    description:
      "Passionné par l'innovation, je suis constamment à la recherche de nouvelles idées créatives pour apporter une touche unique à mes projets.",
    color: "#9EA1D4",
  },
];
function About() {
  const [selected, setSelected] = useState<SkillType>();
  const app = useRef()
  const imagesRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const leftSide = leftRef.current;
  const images = imagesRef.current;

  const slideFromRight = (elem: HTMLDivElement, index: number) => {
    gsap.from(elem.children[index], {
      scrollTrigger: {
        start: "20px 80%",
        trigger: images,
        toggleActions: "restart none none none",
      },
      left: "200%",
      delay: (index + 1) * 0.2,
      duration: 1,
    });
  };
  const slideFromLeft = (elem: HTMLDivElement) => {
    gsap.fromTo(
      elem,
      {
        x: "-200%",
      },
      {
        scrollTrigger: {
          trigger: images, 
          toggleActions: "restart none none none",
        },
        x: "0",
        duration: 0.6,
      }
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (images && leftSide) {
        for (let i = 0; i < softSkills.length; i++) {
          slideFromRight(images, i);
        }
        slideFromLeft(leftSide);
      }
    }, app);
    return ()=> ctx.revert();
  }, []);

  return (
    <section className="about-container">
      <div ref={leftRef} className="about-left">
        <h2>Mes qualités</h2>
        <p>
          Parce qu’un dev n’est pas seulement un mangeur de code, mais aussi un
          humain. <br />
          Voici mes qualités :
        </p>
        <ol>
          {softSkills
            .sort((a, b) => {
              const numA = a.id;
              const numB = b.id;
              if (numA < numB) {
                return -1;
              }
              if (numA > numB) {
                return 1;
              }
              return 0;
            })
            .map((skill) => (
              <li
                key={skill.id}
                style={{
                  textAlign: "center",
                  marginBottom: "5px",
                  border: `1px solid ${skill.color}`,
                  background: `${
                    selected?.id === skill.id ? selected.color : "white"
                  }`,
                }}
                onClick={() => setSelected(skill)}
              >
                {skill.name}
              </li>
            ))}
        </ol>
        <span>
          {selected && selected?.name + " : " + selected?.description}
        </span>
      </div>
      <div ref={imagesRef} className="about-images">
        <div
          style={{
            background: `${selected?.id === 3 ? selected.color : "white"}`,
          }}
          className="box1"
        >
          {undrawSVG.makin_art}
        </div>
        <div
          style={{
            background: `${selected?.id === 2 ? selected.color : "white"}`,
          }}
          className="box2"
        >
          {undrawSVG.coding}
        </div>
        <div
          style={{
            background: `${selected?.id === 1 ? selected.color : "white"}`,
          }}
          className="box3"
        >
          {undrawSVG.searching}
        </div>
        <div
          style={{
            background: `${selected?.id === 4 ? selected.color : "white"}`,
          }}
          className="box4"
        >
          {undrawSVG.team}
        </div>
      </div>
      <div className="cards-wrapper">
        {softSkills.map((skill) => (
          <Card title={skill.name} description={skill.description} />
        ))}
      </div>
    </section>
  );
}

export default About;

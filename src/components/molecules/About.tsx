import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../../styles/About.css";
import Card from "./Card/Card";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { undrawSVG } from "../../assets/drawings/svg-exports";
import { SkillType, softSkills } from "../../assets/softSkills";

function About() {
  const [selected, setSelected] = useState<SkillType>(softSkills[0]);
  const app = useRef();
  const imagesRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const slideFromRight = (elem: HTMLDivElement, index: number) => {
    gsap.from(elem.children[index], {
      scrollTrigger: {
        start: "20px 80%",
        trigger: leftRef.current,
        toggleActions: "play none none none",
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
          trigger: leftRef.current,
          toggleActions: "play none none none",
        },
        x: "0",
        duration: 0.6,
      }
    );
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (imagesRef.current && leftRef.current && cardRef.current) {
        for (let i = 0; i < softSkills.length; i++) {
          slideFromRight(imagesRef.current, i);
          slideFromRight(cardRef.current, i);
        }
        slideFromLeft(leftRef.current);
      }
    }, app);
    return () => ctx.revert();
  }, [imagesRef, leftRef]);

  return (
    <section className="about-container">
      <div ref={leftRef} className="about-left">
        <h2>MES QUALITÉS</h2>
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
                  border: `3px solid ${skill.color}`,
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
      <div ref={cardRef} className="cards-wrapper">
        {softSkills.map((skill) => (
          <Card title={skill.name} description={skill.description} />
        ))}
      </div>
    </section>
  );
}

export default About;
import { useState } from "react";
import "../styles/About.css";
import Card from "./Card";
import { undrawSVG } from "../assets/drawings/svg-exports";

const softSkills = [
  {
    name: "Curiosité",
    description:
      "Toujours avide de nouvelles connaissances, je cherche à développer mes compétences en informatique, montage vidéo/photo, illustration, musique, modélisation 2D, etc.",
  },
  {
    name: "Sens du collectif",
    description:
      "J'aime travailler en groupe pour confronter les idées et atteindre les objectifs ensemble",
  },
  {
    name: "Autonomie",
    description:
      "Grâce à ma capacité d'apprentissage autonome, je peux être efficace dans un groupe ou travailler en solo.",
  },
  {
    name: "Créativité",
    description:
      "Passionné par l'innovation, je suis constamment à la recherche de nouvelles idées créatives pour apporter une touche unique à mes projets.",
  },
];
function About() {
  const [selected, setSelected] = useState<{
    name: string;
    description: string;
  }>();
  return (
    <section className="about-container">
      <div className="about-left">
        <h2>Mes qualités</h2>
        <p>
          Parce qu’un dev n’est pas seulement un mangeur de code, mais aussi un
          humain. <br/>Voici mes qualités :
        </p>
        <ul>
          {softSkills.map((skill) => (
            <li onClick={() => setSelected(skill)}>{skill.name}</li>
          ))}
        </ul>
        <span>
          {selected && selected?.name + " : " + selected?.description}
        </span>
      </div>
        <div className="about-images">
          <div className="box1">{undrawSVG.makin_art}</div>
          <div className="box2">{undrawSVG.coding}</div>
          <div className="box3">{undrawSVG.searching}</div>
          <div className="box4">{undrawSVG.team}</div>
        </div>
      <div className="cards-wrapper">
      {softSkills.map((skill) => (
        <Card title={skill.name} description={skill.description}/>
          ))}
      </div>
    </section>
  );
}

export default About;

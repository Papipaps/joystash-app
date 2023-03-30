import "../styles/About.css";
import Card from "./Card";

function About() {
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
  return (
    <section>
      <h2 className="about-title">Mes qualités</h2>
      <div className="cards-wrapper">
        {softSkills.map((skill) => (
          <Card title={skill.name} description={skill.description} />
        ))}
      </div>
    </section>
  );
}

export default About;

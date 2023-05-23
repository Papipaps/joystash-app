export interface SkillType {
    id: number;
    name: string;
    description: string;
    color?: string;
  };
  
  export const softSkills: SkillType[] = [
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
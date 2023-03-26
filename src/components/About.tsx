import React from "react";
import Drawings from "../assets/drawings/drawings-exports";
import BulletPoint from "./BulletPoint";
import "../styles/About.css";
import EditIcon from "@mui/icons-material/Edit";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import GroupIcon from "@mui/icons-material/Group";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import TechIcons from "../assets/tech/techimages-export";
const softSkills = [
  { name: "Curiosité", icon: <PsychologyAltIcon /> },
  { name: "Sens du collectif", icon: <GroupIcon /> },
  { name: "Autonomie", icon: <LinkOffIcon /> },
  { name: "Créativité", icon: <EditIcon /> },
];
const techSkills = [
  { name: "Java", imageUrl: TechIcons.java },
  { name: "Springboot", imageUrl: TechIcons.spring },
  { name: "React", imageUrl: TechIcons.react },
  { name: "Typescript", imageUrl: TechIcons.ts },
  { name: "Docker", imageUrl: TechIcons.docker },
  { name: "Jenkins", imageUrl: TechIcons.jenkins },
  { name: "Mongodb", imageUrl: TechIcons.mongodb },
  { name: "Elasticsearch", imageUrl: TechIcons.elasticsearch },
  { name: "Postgresql", imageUrl: TechIcons.pgsql },
  { name: "Neo4j", imageUrl: TechIcons.neo4j },
];
function About() {
  return (
    <section>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id quae
        ut, minus harum quidem libero culpa, distinctio voluptatum dignissimos
        tenetur ipsam laborum corporis assumenda rerum iure deleniti! Corporis,
        distinctio?
      </p>
      <div className="bullets-wrapper">
        <BulletPoint title="Compétences techniques" items={techSkills} />
        <BulletPoint title="Qualités personnelles" items={softSkills} />
      </div>
    </section>
  );
}

export default About;

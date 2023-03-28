import "../styles/About.css";
import Card from "./Card";

function About() {
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem asperiores, odio ab exercitationem, quasi et consectetur dolorum illum nesciunt rerum fuga perferendis quisquam aspernatur doloribus eum laboriosam molestiae assumenda natus.";
  return (
    <section>
      <div className="cards-wrapper">
        <Card title="Illustration" description={description} />
        <Card title="Illustration" description={description} />
        <Card title="Illustration" description={description} />
      </div>
    </section>
  );
}

export default About;

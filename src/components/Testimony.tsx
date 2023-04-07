import { undrawSVG } from "../assets/drawings/svg-exports";
import { TestimonyType } from "../assets/fake-reviews/review-export";
import "../styles/Testimony.css";

type Props = {
  testimony: TestimonyType;
};

function Testimony({ testimony }: Props) {
  const { message, celebrity, job } = testimony;
  return (
    <div className="testimony-container">
      <div className="svg-background">{undrawSVG.join}</div>
      <div className="testimony-message">{message}</div>
      <div className="testimony-celebrity">
        {celebrity}
        <span className="testimony-job">{job}</span>
      </div>
    </div>
  );
}

export default Testimony;

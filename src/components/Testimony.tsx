import { useState, useRef, useLayoutEffect } from "react";
import { undrawSVG } from "../assets/drawings/svg-exports";
import {
  TestimonyType,
  fakeTestimonials,
} from "../assets/fake-reviews/review-export";
import "../styles/Testimony.css";
import { gsap } from "gsap/gsap-core";

type Props = {
  testimony: TestimonyType;
};

function Testimony() {
  const [testimonyIndex, SetTestimonyIndex] = useState<number>(0);
  const { message, celebrity, job } = fakeTestimonials[testimonyIndex];
  const testimonyRef = useRef<HTMLDivElement>(null);

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
    <div className="testimony-container">
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
      <div ref={testimonyRef} className="testimony-quote">
        <div className="testimony-message">{message}</div>
        <div className="testimony-celebrity">
          {celebrity}
          {" - "}
          <span className="testimony-job">{job}</span>
        </div>
      </div>
      <div className="svg-background">{undrawSVG.join}</div>
    </div>
  );
}

export default Testimony;

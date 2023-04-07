import { SelectionProvider } from "./selection-provider";
import UNIB from "./UNIB";
import "../styles/Showcase.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { gsap } from "gsap";
import Navbar from "./Navbar";

type ComponentType = {
  name: string;
  component: JSX.Element;
};

const components: ComponentType[] = [
  {
    name: "Combat",
    component: (
      <SelectionProvider>
        <UNIB />
      </SelectionProvider>
    ),
  },
];

function Showcase() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType>();

  const circleLeftRef = useRef(null);
  const circleRightRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const wrapperRef = useRef(null);

  const comp = useRef();
  useLayoutEffect(() => {
    if (
      (circleLeftRef.current && circleRightRef.current,
      textRef.current,
      textRef2.current)
    ) {
      const duration = 0.5;
      let ctx = gsap.context(() => {
        gsap.from(textRef.current, {
          ease: "power4.out",
          duration: duration,
          x: "-2000%",
        });
        gsap.from(textRef2.current, {
          ease: "power4.out",
          duration: duration,
          x: "2000%",
        });
        gsap.to(textRef.current, {
          ease: "power4.in",
          duration: duration,
          delay: 1,
          x: "1000%",
        });
        gsap.to(textRef2.current, {
          ease: "power4.in",
          duration: duration,
          delay: 1,
          x: "-1000%",
        });
        gsap.to(wrapperRef.current, {
          opacity: 0,
          duration: 1,
          delay: 1.5,
          display: "none",
        });
      }, comp);
      return () => ctx.revert();
    }
  }, [selectedComponent]);

  const handleButtonClick = (component: ComponentType) => {
    setSelectedComponent(component);
  };

  const handleBackButtonClick = () => {
    setSelectedComponent(undefined);
  };

  if (!selectedComponent) {
    return (
      <>
        <div ref={wrapperRef} className="animation-mask">
          <div className="animation-wrapper">
            <div className="animation-container">
              <div ref={circleLeftRef} className="circle1" />
              <div ref={circleRightRef} className="circle2" />
              <h2 ref={textRef} className="showcase-text1">
                Bienvenue dans
              </h2>
              <h2 ref={textRef2} className="showcase-text2">
                Le Showcase
              </h2>
            </div>
          </div>
        </div>
        <main className="showcase-container">
          <Navbar />
          <h1>Selectionnez un composant</h1>
          <p>Le <span>Showcase</span> me sert d'expérimentation, c'est ici que je mets les tests. J'en rajouterai au fur et à mesure. </p>
          <div className="buttons">
            {components.map((component) => (
              <button
                key={component.name}
                onClick={() => handleButtonClick(component)}
                className="btn"
              >
                <span></span>
                <p data-text="GO !" data-title={component.name}></p>
              </button>
            ))}
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <div className="back-button">
        <Button onClick={handleBackButtonClick}>Back</Button>
      </div>
      <main>{selectedComponent.component}</main>
    </>
  );
}

export default Showcase;

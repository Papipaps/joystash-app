import "../styles/banner.css";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { height } from "@mui/system";
import Drawings from "../assets/drawings/drawings-exports";

type Props = {
  blur?: number;
  height?: number;
  items: {
    title: string;
    description?: string;
    img?: string;
  }[];
};

const Banner = (props: Props) => {
  const divRefs = useRef([]);
  const imgRef = useRef(null);

  const [selected, setSelected] = useState<number>(999999999999999);

  const { blur = 2, height = 400, items } = props;
  const options = {
    filter: `blur(${blur}px)`,
    width: "25%",
    duration: 0.2,
    flex: 1,
    overflow: "hidden",
    height: "100%",
    backgroundColor: `white`,
    transition: "width 0.5s",
    opacity: 0.8,
  };

  const handleMouseEnter = (index) => {
    setSelected(index);
    gsap.to(divRefs.current[index], {
      filter: "blur(0)",
      width: "100%",
      duration: 0.1,
      flex: 5,
      opacity: 1,
    });
  };

  const handleMouseLeave = (index) => {
    setSelected(999999999);
    gsap.to(divRefs.current[index], {
      ...options,
    });
  };

  return (
    <nav
      style={{
        display: "flex",
        height: height,
        width: "100%",
      }}
    >
      {items?.map((item, index) => (
        <a
          key={index}
          ref={(ref) => (divRefs.current[index] = ref)}
          className="wrapper"
          style={{
            ...options,
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img
            ref={imgRef}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={item.img}
          />
          {selected == index && (
            <div className="banner-overlay">
              {item.title && (
                <div className="title">
                  <h1>{item.title}</h1>
                </div>
              )}
              {item.description && (
                <div className="description">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          )}
        </a>
      ))}
    </nav>
  );
};

export default Banner;

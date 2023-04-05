import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  useRef,
  useContext,
  useLayoutEffect,
  useEffect,
  useState,
} from "react";
import "../styles/characters-grid.css";
import { SelectionContext } from "./selection-provider";

export type Character = {
  id: number;
  name: string;
  img: string;
};

type Props = {
  characters: Character[];
};

function randomDuration(index: number) {
  return Math.random() + 0.2 * index;
}

function CharactersGrid(props: Props) {
  gsap.registerPlugin(ScrollTrigger);
  const [isHovering, setIsHovering] = useState<boolean>();
  const { selected, setSelected } = useContext(SelectionContext);
  const { characters } = props;

  const leftIconsRef = useRef<HTMLDivElement>(null);
  const middleIconRef = useRef<HTMLDivElement>(null);
  const randomIconRef = useRef<HTMLImageElement>(null);
  const rightIconsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const comp = useRef();

  const half = Math.ceil(characters.length / 2);
  const firstHalf = characters.slice(0, half);
  const secondHalf = characters.slice(half);

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  function animateLeftAndRight() {
    if (leftIconsRef.current && rightIconsRef.current) {
      for (let i = 0; i <= characters.length + 1; i++) {
        gsap.fromTo(
          leftIconsRef?.current?.children[i],
          { left: -9999 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              toggleActions: "restart none none none",
            },
            left: 0,
            duration: randomDuration(i),
          }
        );
        gsap.fromTo(
          rightIconsRef?.current?.children[i],
          { right: -9999 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              toggleActions: "restart none none none",
            },
            right: 0,
            duration: randomDuration(i),
          }
        );
      }
    }
  }

  function animateMiddle() {
    gsap.fromTo(
      middleIconRef.current,
      { bottom: -9999, opacity: 0 },
      {
        scrollTrigger: {
          trigger: gridRef.current,
          toggleActions: "restart none none none",
        },
        bottom: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.in",
      }
    );
  }

  useEffect(() => {
    let interval: number;
    let index: number;
    if (isHovering && randomIconRef.current) {
      interval = setInterval(() => {
        index = Math.floor(Math.random() * characters.length);
        randomIconRef.current?.setAttribute("src", characters[index].img);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  useLayoutEffect(() => {
    if (
      leftIconsRef.current &&
      middleIconRef.current &&
      rightIconsRef.current &&
      gridRef.current
    ) {
      let ctx = gsap.context(() => {
        animateLeftAndRight();
        animateMiddle();
      }, comp);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={gridRef} className="grid-2">
      <div ref={leftIconsRef} className="grid-left">
        {firstHalf.map(
          (character) =>
            character && (
              <div
                onClick={() => setSelected(character.id)}
                className="grid-icon"
              >
                <img src={character.img} />
              </div>
            )
        )}
      </div>
      <div
        ref={middleIconRef}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleHover}
        onClick={() =>
          setSelected(Math.ceil(Math.random() * characters.length))
        }
        className="grid-middle"
      >
        <img src={characters[0].img} ref={randomIconRef} />
      </div>
      <div ref={rightIconsRef} className="grid-right">
        {secondHalf.map(
          (character) =>
            character && (
              <div
                onClick={() => {
                  setSelected(character.id);
                }}
                className="grid-icon"
              >
                <img src={character.img} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default CharactersGrid;

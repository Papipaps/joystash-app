import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  useRef,
  useContext,
  useLayoutEffect,
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
  rows?: number;
  cols?: number;
  iconSize?: number;
  style: number;
};

function CharactersGrid(props: Props) {
  gsap.registerPlugin(ScrollTrigger);
  const { setSelected } = useContext(SelectionContext);
  const { style = 2, characters } = props;

  function styleSelector(value: number) {
    switch (value) {
      case 2:
        const leftIconsRef = useRef<HTMLDivElement>(null);
        const middleIconRef = useRef<HTMLDivElement>(null);
        const rightIconsRef = useRef<HTMLDivElement>(null);
        const gridRef = useRef<HTMLDivElement>(null);
        const comp = useRef();

        const half = Math.ceil(characters.length / 2);
        const firstHalf = characters.slice(0, half);
        const secondHalf = characters.slice(half);
        const leftIcons = leftIconsRef.current;
        const middleIcon = middleIconRef.current;
        const rightIcons = rightIconsRef.current;
        const grid = gridRef.current;

        useLayoutEffect(() => {
          if (leftIcons && middleIcon && rightIcons && grid) {
            let ctx = gsap.context(() => {
              for (let i = 0; i <= characters.length + 1; i++) {
                gsap.fromTo(
                  leftIcons.children[i],
                  { left: -9999 },
                  {
                    scrollTrigger: {
                      trigger: grid,
                      toggleActions: "restart none none none",
                    },
                    left: 0,
                    duration: Math.random() + 0.2 * (1.05 * i),
                  }
                );
                gsap.fromTo(
                  rightIcons.children[i],
                  { right: -9999 },
                  {
                    scrollTrigger: {
                      trigger: grid,
                      toggleActions: "restart none none none",
                    },
                    right: 0,
                    duration: Math.random() + 0.2 * (1.05 * i),
                  }
                );
              }
              gsap.fromTo(
                middleIcon,
                { bottom: -9999, opacity: 0 },
                {
                  scrollTrigger: {
                    trigger: grid,
                    toggleActions: "restart none none none",
                  },
                  bottom: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power4.in",
                }
              );
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
                      className="icon"
                    >
                      <img src={character.img} />
                    </div>
                  )
              )}
            </div>
            <div
              ref={middleIconRef}
              onClick={() =>
                setSelected(Math.ceil(Math.random() * characters.length))
              }
              className="grid-middle"
            ></div>
            <div ref={rightIconsRef} className="grid-right">
              {secondHalf.map(
                (character) =>
                  character && (
                    <div
                      onClick={() => {
                        setSelected(character.id);
                      }}
                      className="icon"
                    >
                      <img src={character.img} />
                    </div>
                  )
              )}
            </div>
          </div>
        );
      default:
        break;
    }
  }

  return <div>{styleSelector(style)}</div>;
}

export default CharactersGrid;

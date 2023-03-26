import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  CSSProperties,
  useState,
  useRef,
  useContext,
  useLayoutEffect,
} from "react";
import "../styles/characters-grid.css";
import CharacterIcon from "./character-icon";
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
  const { style = 1, rows = 8, cols = 8, iconSize = 100, characters } = props;
  const cells = rows * cols;
  const emptyCells = cells - characters.length;

  const cellsArray = characters.concat(Array(emptyCells).fill(null));

  function styleSelector(value: number) {
    switch (value) {
      case 1:
        return (
          <div
            className="grid"
            style={
              {
                "--column_number": cols,
                "--icon-size": iconSize + "px",
              } as CSSProperties
            }
          >
            {cellsArray.map((character, index) => (
              <div
                onClick={() => setSelected(character.id)}
                className={`grid-icon ${!character && "grid-empty"}`}
              >
                {character && <CharacterIcon img={character.img} />}
              </div>
            ))}
          </div>
        );
      case 2:
        const leftIcons = useRef<HTMLDivElement>(null);
        const middleIcon = useRef<HTMLDivElement>(null);
        const rightIcons = useRef<HTMLDivElement>(null);
        const grid = useRef<HTMLDivElement>(null);
        const comp = useRef();

        const half = Math.ceil(characters.length / 2);
        const firstHalf = characters.slice(0, half);
        const secondHalf = characters.slice(half);

        useLayoutEffect(() => {
          let ctx = gsap.context(() => {
            for (let i = 0; i <= characters.length + 1; i++) {
              gsap.fromTo(
                leftIcons.current?.children[i],
                { left: -9999 },
                {
                  scrollTrigger: {
                    trigger: grid.current,
                    toggleActions: "restart none none none",
                  },
                  left: 0,
                  duration: Math.random() + 0.2 * (1.05 * i),
                }
              );
              gsap.fromTo(
                rightIcons.current?.children[i],
                { right: -9999 },
                {
                  scrollTrigger: {
                    trigger: grid.current,
                    toggleActions: "restart none none none",
                  },
                  right: 0,
                  duration: Math.random() + 0.2 * (1.05 * i),
                }
              );
            }
            gsap.fromTo(
              middleIcon.current,
              { bottom: -9999, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: grid.current,
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
        }, []);
        return (
          <div ref={grid} className="grid-2">
            <div ref={leftIcons} className="grid-left">
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
              ref={middleIcon}
              onClick={() =>
                setSelected(Math.ceil(Math.random() * characters.length))
              }
              className="grid-middle"
            ></div>
            <div ref={rightIcons} className="grid-right">
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

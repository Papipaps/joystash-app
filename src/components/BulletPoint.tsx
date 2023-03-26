import { SvgIconProps } from "@mui/material";
import React, { useEffect, useState } from "react";
import { clamp } from "three/src/math/MathUtils";
import "../styles/BulletPoint.css";

type Props = {
  title: string;
  items: BulletItem[];
};

type BulletItem = {
  name: string;
  imageUrl?: string;
  icon?: SvgIconProps;
};

function generateColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function isDarkColor(color: string) {
  if (color) {
    const rgb = color
      .substring(4, color.length - 1)
      .split(",")
      .map((c) => parseInt(c.trim()));
    const brightness = Math.round(
      (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
    );
    return brightness < 128;
  }
}

const BulletPoint: React.FC<Props> = ({ title, items }) => {
  const [selected, setSelected] = useState<BulletItem>(items[0]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    items.forEach(() => {
      let colorList: string[] = [];
      items.forEach(() => colorList.push(generateColor()));
      setColors(colorList);
    });
    console.log(colors, items);
  }, []);

  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <div className="card-content">
        <div className="left-column">
          <ul className="item-list">
            {items.map((item, index) => (
              <li
                style={{
                  background: colors[index],
                  color: isDarkColor(colors[index]) ? "white" : "black",
                }}
                onClick={() => setSelected(item)}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-column">
          {selected.imageUrl ? (
            <img src={selected?.imageUrl} alt="Card" />
          ) : (
            selected?.icon
          )}
        </div>
      </div>
    </div>
  );
};

export default BulletPoint;

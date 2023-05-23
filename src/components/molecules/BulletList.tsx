import React, { useState } from "react";
import "../../styles/BulletList.css";

type Props = {
  items: BulletItem[];
};

type BulletItem = {
  name: string;
  imageUrl?: string;
  description?: string;
};

const BulletPoint: React.FC<Props> = ({ items }) => {
  const [selected, setSelected] = useState<BulletItem>(items[0]);

  return (
    <section className="bullet-wrapper">
      <div className="bullet-container">
        <div className="bullet">
          <div className="bullet-image">
            <img
              src={selected.imageUrl}
              alt={selected.name}
              className="image"
            />
          </div>
        </div>
        <ul className="bullet-list">
          {items.map((item) => (
            <li onClick={() => setSelected(item)}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="bullet-detail">
        <h2 className="bullet-title">{selected.name}</h2>
        <p className="bullet-description">
          {selected.description || "Ah.. J'ai rien à dire dessus apparemment."}
        </p>
      </div>
    </section>
  );
};

export default BulletPoint;

import React, { useState } from "react";
import "../styles/BulletList.css";

type Props = {  
  items: BulletItem[];
};

type BulletItem = {
  name: string;
  imageUrl?: string;
  description?: string;
};

const BulletPoint: React.FC<Props> = ({items}) => {
  const [selected, setSelected] = useState<BulletItem>(items[0]);

  return (
    <div className="bullet-container">
      <div className="bullet">
        <div className="bullet-image">
          <img src={selected.imageUrl} alt={selected.name} className="image" />
        </div>
        <h2 className="title">{selected.name}</h2>
        <div className="description">{selected.description || "Ah.. J'ai rien à dire dessus apparemment."}</div>
      </div>
      <ul className="item-list">
        {items.map((item) => (
          <li onClick={() => setSelected(item)}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoint;

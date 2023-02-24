import { useState } from "react";

type Props = {
  message: string;
  // [key: string]: string | number;
}

export const Message: React.FC<Props> = ({message}) => {
  return <div>{message}</div>;
};

export const Compteur = () => {
  const [compteur, setCompteur] = useState<number>(0);
  return (
    <div>
      <p>
        Compteur : <span>{compteur}</span>
      </p>
      <button onClick={() => setCompteur((n) => n + 1)}>Augmenter</button>
    </div>
  );
};

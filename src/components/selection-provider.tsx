import React, { createContext, useState } from "react";

// On définit le type pour notre contexte
interface IContextProps {
  selected: number;
  setSelected: (value: number) => void;
}

interface IProviderProps {
  children?: any;
}

const defaultValue = {
  selected: 1,
  setSelected: (value: number) => {},
}

// On crée notre contexte avec une valeur initiale
export const SelectionContext = createContext<IContextProps>(defaultValue);

// On crée notre fournisseur de contexte
export const SelectionProvider = (props: IProviderProps) => {
  const [selected, setSelected] = useState<number>(defaultValue.selected);

  return (
    <SelectionContext.Provider value={{ selected, setSelected }}>
      {props.children}
    </SelectionContext.Provider>
  );
};

import styles from "./typo.module.css";

export type TypoProps = {
  tag: "h1" | "h2" | "h3" | "p" | "span" | "i";
  children: React.ReactNode;
  className?: string;
} & (
  | {
      font?: undefined;
      styleVariation: "information";
    }
  | {
      font?: undefined;
      styleVariation: "text";
    }
  | {
      font?: "bold" | "semibold";
      styleVariation: "heading2";
    }
  | {
      font?: "semibold" | "normal";
      styleVariation: "heading3";
    }
);

function Typo({
  tag,
  children,
  className,
  styleVariation: styleVariations,
  font,
}: TypoProps) {
  const Tag = tag || "p";
  const typoClassname = styles[styleVariations];
  const fontClassname = styles[font || "normal"];
  return (
    <Tag className={`${typoClassname} ${fontClassname} ${className}`}>
      {children}
    </Tag>
  );
}

export default Typo;

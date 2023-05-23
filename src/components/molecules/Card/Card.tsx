import { ReactNode, SyntheticEvent } from "react";
import { Button } from "../../atoms/Button/Button";
import styles from "./card.module.css";
interface BtnProps {
  label: string;
  callback: () => void;
}

export type CardProps = {
  title: string;
  description: string;
  info?: string;
  children?: React.ReactNode;
  svgPath?: string;
  cancel?: BtnProps;
  action?: BtnProps;
  actionsPosition?: "left" | "right" | "middle";
  exitable?: boolean;
  close: () => void;
};

function Card({
  title,
  description,
  svgPath,
  cancel,
  action,
  info,
  actionsPosition,
  children,
  exitable = true,
  close,
}: CardProps) {
  const handleOutsideClick = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const isSelf = target === event.currentTarget;

    if (isSelf && exitable) {
      close();
    }
  };
  return (
    <div onClick={handleOutsideClick} className={styles.backdrop}>
      <div className={styles.card}>
        {svgPath && <img src={svgPath} />}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div>{children}</div>
        <div className={[styles.actions, styles[actionsPosition]].join(" ")}>
          {cancel && (
            <Button label={cancel.label} onClick={cancel.callback}></Button>
          )}
          {action && (
            <Button
              primary={true}
              label={action.label}
              onClick={action.callback}
            ></Button>
          )}
        </div>
        {info}
      </div>
    </div>
  );
}

export default Card;

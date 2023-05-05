import { ReactNode } from "react";

type Props = {
  css?: String;
  children: ReactNode;
};

const Card = ({ children, css }: Props) => {
  return <div className={`card ${css}`}>{children}</div>;
};

export default Card;

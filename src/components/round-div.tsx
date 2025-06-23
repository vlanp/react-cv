import type { ReactNode } from "react";
import "./round-div.css";

const RoundDiv = ({
  children,
  hideRound,
}: {
  children: ReactNode;
  hideRound?: boolean;
}) => {
  return (
    <div className="round-div">
      <div className="round-container">
        <span className={hideRound ? "hidden-round" : "round"} />
      </div>
      <div className="round-children">{children}</div>
    </div>
  );
};

export default RoundDiv;

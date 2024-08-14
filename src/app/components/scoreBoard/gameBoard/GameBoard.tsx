import RockIcon from "@/../public/icon-rock.svg";
import PaperIcon from "@/../public/icon-paper.svg";
import ScissorsIcon from "@/../public/icon-scissors.svg";
import TriangleIcon from "@/../public/bg-triangle.svg";
import styles from "../../../page.module.scss";
import Icon from "../icon/Icon";
import React from "react";

// prettier-ignore
interface GameBoardProps { onChoice: (choice: string) => void; }

const iconPaths = {
  rock: "/icon-rock.svg",
  paper: "/icon-paper.svg",
  scissors: "/icon-scissors.svg",
};

const GameBoard: React.FC<GameBoardProps> = ({ onChoice }) => {
  const iconProps = {
    rock: { src: iconPaths.rock, alt: "rock", buttonClass: styles.rock, value: "rock", onClick: onChoice },
    paper: { src: iconPaths.paper, alt: "paper", buttonClass: styles.paper, value: "paper", onClick: onChoice },
    scissors: { src: iconPaths.scissors, alt: "scissors", buttonClass: styles.scissors, value: "scissors", onClick: onChoice },
  };

  return (
    <div className={styles.gameBoard}>
      <div className={styles.topChoices}>
        <Icon {...iconProps.paper} />
        <Icon {...iconProps.scissors} />
      </div>
      <Icon {...iconProps.rock} />
      <div className={styles.svgContainer}>
        <img src="/bg-triangle.svg" />
      </div>
    </div>
  );
};

export default GameBoard;

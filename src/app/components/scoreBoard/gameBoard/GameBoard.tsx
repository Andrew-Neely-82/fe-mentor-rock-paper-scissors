import RockIcon from "@/../public/icon-rock.svg";
import PaperIcon from "@/../public/icon-paper.svg";
import ScissorsIcon from "@/../public/icon-scissors.svg";
import TriangleIcon from "@/../public/bg-triangle.svg";
import styles from "../../../page.module.scss";
import Icon from "../icon/Icon";
import React from "react";

// prettier-ignore
interface GameBoardProps { onChoice: (choice: string) => void; }

const GameBoard: React.FC<GameBoardProps> = ({ onChoice }) => {
  const iconProps = {
    paper: { src: PaperIcon, alt: "paper", buttonClass: styles.paper, value: "paper", onClick: onChoice },
    scissors: { src: ScissorsIcon, alt: "scissors", buttonClass: styles.scissors, value: "scissors", onClick: onChoice },
    rock: { src: RockIcon, alt: "rock", buttonClass: styles.rock, value: "rock", onClick: onChoice },
  };

  return (
    <div className={styles.gameBoard}>
      <div className={styles.topChoices}>
        <Icon {...iconProps.paper} />
        <Icon {...iconProps.scissors} />
      </div>
      <Icon {...iconProps.rock} />
      <div className={styles.svgContainer}>
        <TriangleIcon />
      </div>
    </div>
  );
};

export default GameBoard;

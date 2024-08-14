import styles from "../../../page.module.scss";
import Icon from "../icon/Icon";
import React from "react";

// prettier-ignore
interface GameBoardProps { onChoice: (choice: string) => void; }

const GameBoard: React.FC<GameBoardProps> = ({ onChoice }) => {
  const iconImg = {
    paperSrc: "/icon-paper.svg",
    scissorsSrc: `/icon-scissors.svg`,
    rockSrc: `/icon-rock.svg`,
    triangleSrc: `/bg-triangle.svg`,
  };

  const iconProps = {
    paper: { src: iconImg.paperSrc, alt: "paper", buttonClass: styles.paper, value: "paper", onClick: onChoice },
    scissors: { src: iconImg.scissorsSrc, alt: "scissors", buttonClass: styles.scissors, value: "scissors", onClick: onChoice },
    rock: { src: iconImg.rockSrc, alt: "rock", buttonClass: styles.rock, value: "rock", onClick: onChoice },
  };

  return (
    <div className={styles.gameBoard}>
      <div className={styles.topChoices}>
        <Icon {...iconProps.paper} />
        <Icon {...iconProps.scissors} />
      </div>
      <Icon {...iconProps.rock} />
      <div className={styles.svgContainer}>
        <img src={iconImg.triangleSrc} alt="triangle" />
      </div>
    </div>
  );
};

export default GameBoard;

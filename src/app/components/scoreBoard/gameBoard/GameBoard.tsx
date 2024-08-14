import RockIcon from "@/../public/icon-rock.svg";
import PaperIcon from "@/../public/icon-paper.svg";
import ScissorsIcon from "@/../public/icon-scissors.svg";
import styles from "../../../page.module.scss";
import Icon from "../icon/Icon";
import React from "react";
import Image from "next/image";

// prettier-ignore
interface GameBoardProps { onChoice: (choice: string) => void; }

const GameBoard: React.FC<GameBoardProps> = ({ onChoice }) => {
  const iconProps = {
    paper: { src: '/icon-paper.svg', alt: "paper", buttonClass: styles.paper, value: "paper", onClick: onChoice },
    scissors: { src: '/icon-scissors.svg', alt: "scissors", buttonClass: styles.scissors, value: "scissors", onClick: onChoice },
    rock: { src: '/icon-rock.svg', alt: "rock", buttonClass: styles.rock, value: "rock", onClick: onChoice },
  };

  return (
    <div className={styles.gameBoard}>
      <div className={styles.topChoices}>
        <Icon {...iconProps.paper} />
        <Icon {...iconProps.scissors} />
      </div>
      <Icon {...iconProps.rock} />
      <div className={styles.svgContainer}>
        {/* <TriangleIcon aria-label="triangle" />  */}
        <Image unoptimized src={"/bg-triangle.svg"} width={500} height={500} alt="" />
      </div>
    </div>
  );
};

export default GameBoard;

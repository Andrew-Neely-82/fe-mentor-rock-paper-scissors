import { Scissors, Triangle, Paper, Rock } from "../../../../../public/svg/export";
import styles from "@/app/styles/page.module.scss";
import React from "react";
import Icon from "../icon/Icon";

// prettier-ignore
interface GameBoardProps { onChoice: (choice: string) => void; }

const GameBoard: React.FC<GameBoardProps> = ({ onChoice }) => {
  const iconProps = {
    paper: { src: Paper, alt: "paper", buttonClass: styles.paper, value: "paper", onClick: onChoice },
    scissors: { src: Scissors, alt: "scissors", buttonClass: styles.scissors, value: "scissors", onClick: onChoice },
    rock: { src: Rock, alt: "rock", buttonClass: styles.rock, value: "rock", onClick: onChoice },
  };

  const TriangleBg = (props: React.SVGProps<SVGSVGElement>) => <Triangle />;

  return (
    <div className={styles.gameBoard}>
      <div className={styles.topChoices}>
        <Icon {...iconProps.paper} />
        <Icon {...iconProps.scissors} />
      </div>
      <Icon {...iconProps.rock} />
      <div className={styles.svgContainer}>
        <TriangleBg className={styles.test} />
      </div>
    </div>
  );
};

export default GameBoard;

import Scissors from "../../../../../public/svg/icon-scissors.svg";
import Triangle from "../../../../../public/svg/bg-triangle.svg";
import Paper from "../../../../../public/svg/icon-paper.svg";
import Rock from "../../../../../public/svg/icon-rock.svg";
import styles from "../../../page.module.scss";
import React from "react";
import Icon from "../icon/Icon";
import classNames from "classnames";
// prettier-ignore
interface GameBoardProps { onChoice: (choice: string) => void; }

const GameBoard: React.FC<GameBoardProps> = ({ onChoice }) => {
  return (
    <div className={styles.gameBoard}>
      <div className={styles.topChoices}>
        <Icon src={Paper} alt="paper" buttonClass={styles.paper} value="paper" onClick={onChoice} />
        <Icon src={Scissors} alt="scissors" buttonClass={styles.scissors} value="scissors" onClick={onChoice} />
      </div>
      <Icon src={Rock} alt="rock" iconClass={styles.rock} value="rock" onClick={onChoice} />
      <div className={styles.svgContainer}>
        <Triangle />
      </div>
    </div>
  );
};

export default GameBoard;

import Scissors from "../../../../../public/svg/icon-scissors.svg";
import Triangle from "../../../../../public/svg/bg-triangle.svg";
import Paper from "../../../../../public/svg/icon-paper.svg";
import Rock from "../../../../../public/svg/icon-rock.svg";
import styles from "../../../page.module.scss";
import React from "react";
import Icon from "../icon/Icon";
import classNames from "classnames";
// prettier-ignore
interface GameBoardProps {  }

const GameBoard: React.FC<GameBoardProps> = ({}) => {
  return (
    <div className={styles.gameBoard}>
      <div className={styles.topChoices}>
        <Icon src={Paper} alt="paper" buttonClass={styles.paper} />
        <Icon src={Scissors} alt="scissors" buttonClass={styles.scissors} />
      </div>
      <Icon src={Rock} alt="rock" iconClass={styles.rock} />
      <div className={styles.svgContainer}>
        <Triangle />
      </div>
    </div>
  );
};

export default GameBoard;

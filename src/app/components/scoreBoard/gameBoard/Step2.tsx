import { Paper, Rock, Scissors } from "../../../../../public/svg/export";
import styles from "@/app/styles/page.module.scss";
import Icon from "../icon/Icon";
import React from "react";
import classNames from "classnames";

interface Step2Props {
  player: string | null;
  house: string | null;
  result: string | null;
  onClick: () => void;
}

const Step2: React.FC<Step2Props> = ({ player, house, result, onClick }) => {
  const icons: any = {
    rock: { src: Rock, alt: "rock", buttonClass: styles.rock },
    paper: { src: Paper, alt: "paper", buttonClass: styles.paper },
    scissors: { src: Scissors, alt: "scissors", buttonClass: styles.scissors },
  };

  const propsPicker = (str: string | null) => icons[str ?? ""] || { src: Rock, alt: "default" };

  return (
    <div className={styles.comparison}>
      <div className={classNames(styles.youPicked, result === "YOU WIN" ? styles.win : "")}>
        <span>YOU PICKED</span>
        <Icon {...propsPicker(player)} className={styles.first} />
        <div className={styles.iconBg}></div>
      </div>
      <div className={styles.playAgain}>
        <span>{result}</span>
        <button style={{ width: "fit-content" }} onClick={onClick}>
          PLAY AGAIN
        </button>
      </div>
      <div className={classNames(styles.housePicked, result === "YOU LOSE" ? styles.lose : "")}>
        <span>THE HOUSE PICKED</span>
        <Icon {...propsPicker(house)} className={styles.second} />
        <div className={styles.iconBg}></div>
      </div>
    </div>
  );
};

export default Step2;

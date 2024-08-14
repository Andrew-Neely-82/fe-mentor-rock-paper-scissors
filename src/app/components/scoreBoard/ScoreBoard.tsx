import styles from "../../page.module.scss";
import React from "react";

// prettier-ignore
interface ScoreBoardProps { score: number; }

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className={styles.scoreboardContainer}>
      <h1 className={styles.title}>ROCK PAPER SCISSORS</h1>
      <div className={styles.scoreContainer}>
        <span className={styles.scoreText}>SCORE</span>
        <span className={styles.scoreTally}>{score}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;

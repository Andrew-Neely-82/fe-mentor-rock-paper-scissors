import styles from "../../page.module.scss";
import React from "react";

interface ScoreBoardProps {
  score: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className={styles.scoreboardContainer}>
      <h1 className={styles.title}>ROCK PAPER SCISSORS</h1>
      <div>
        <span>SCORE</span>
        {/* change with a useState in page.tsx */}
        <span>{score}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;

import styles from "@/app/styles/scoreboard.module.scss";
import { LogoSVG } from "@/../public/svg/export";
import React from "react";

// prettier-ignore
interface ScoreBoardProps { score: number; }

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  const Logo = (props: React.SVGProps<SVGSVGElement>) => <LogoSVG />;

  return (
    <div className={styles.scoreboardContainer}>
      <Logo>ROCK PAPER SCISSORS</Logo>
      <div className={styles.scoreContainer}>
        <span className={styles.scoreText}>SCORE</span>
        <span className={styles.scoreTally}>{score}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;

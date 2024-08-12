"use client";

import ScoreBoard from "./components/scoreBoard/ScoreBoard";
import styles from "./page.module.scss";
import { useState } from "react";

const Home = () => {
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const updateScore = (win: boolean) => {
    setScore((prev) => {
      return win ? prev + 1 : prev > 0 ? prev - 1 : prev;
    });
  };

  const isWinner = (player1: string, player2: string) => {
    // prettier-ignore
    interface Choices { [key: string]: string; }
    const choices: Choices = { rock: "rock", paper: "paper", scissors: "scissors" };

    const winningOptions: [string, string][] = [
      [choices.rock, choices.scissors],
      [choices.scissors, choices.paper],
      [choices.paper, choices.rock],
    ];

    if (player1 === player2) return setResult("DRAW");

    const isPlayer1Winner = winningOptions.some(([winner, loser]) => player1 === winner && player2 === loser);
    updateScore(isPlayer1Winner);

    const winner = isPlayer1Winner ? player1 : player2;
    isPlayer1Winner ? setResult("YOU WIN") : setResult("YOU LOSE");

    return winner;
  };

  const handleWin = () => isWinner("rock", "scissors");
  const handleLose = () => isWinner("scissors", "rock");
  const handleDraw = () => isWinner("rock", "rock");
  const handleResetScore = () => setScore(0);

  return (
    <main className={styles.main}>
      <ScoreBoard score={score} />
      <p>{result}</p>
      {/* <div>
        <button onClick={handleWin}>Win Test</button>
        <button onClick={handleDraw}>Draw Test</button>
        <button onClick={handleLose}>Lose Test</button>
        <button onClick={handleResetScore}>Reset Test</button>
      </div> */}
      

      <footer className={styles.footer}>
        <button className={styles.footerButton}>RULES</button>
      </footer>
    </main>
  );
};

export default Home;

"use client";

import ScoreBoard from "./components/scoreBoard/ScoreBoard";
import styles from "./page.module.scss";
import { useState } from "react";

const Home = () => {
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const updateScore = (win: boolean) => {
    setScore((prev) => {
      const newScore = win ? prev + 1 : prev > 0 ? prev - 1 : prev;
      return newScore;
    });
  };

  const isWinner = (player1: string, player2: string) => {
    interface Choices {
      [key: string]: string;
    }
    const choices: Choices = { rock: "rock", paper: "paper", scissors: "scissors" };

    const winningOptions: [string, string][] = [
      [choices.rock, choices.scissors],
      [choices.scissors, choices.paper],
      [choices.paper, choices.rock],
    ];

    if (player1 === player2) {
      setResult("DRAW");
      return "Draw";
    }

    const isPlayer1Winner = winningOptions.some(([winner, loser]) => player1 === winner && player2 === loser);

    const winner = isPlayer1Winner ? player1 : player2;
    const resultMessage = isPlayer1Winner ? "YOU WIN" : "YOU LOSE";

    updateScore(isPlayer1Winner);
    setResult(resultMessage);

    return winner;
  };

  const handleWin = () => {
    const player1 = "rock";
    const player2 = "scissors";
    const winner = isWinner(player1, player2);
  };

  const handleLose = () => {
    const player1 = "rock";
    const player2 = "scissors";
    const winner = isWinner(player2, player1);
  };

  const handleDraw = () => {
    const player1 = "rock";
    const player2 = "scissors";
    const winner = isWinner(player1, player1);
  };

  return (
    <main className={styles.main}>
      <ScoreBoard score={score} />
      <p>{result}</p>
      <button onClick={handleWin}>Win Test</button>
      <button onClick={handleDraw}>Draw Test</button>
      <button onClick={handleLose}>Lose Test</button>
    </main>
  );
};

export default Home;

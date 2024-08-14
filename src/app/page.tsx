"use client";

import { ScoreBoard, GameBoard, Footer, Rules } from "./components/export";
import styles from "./page.module.scss";
import classNames from "classnames";
import { useState } from "react";

const Home = () => {
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);

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

    const isPlayer1Winner = winningOptions.some(([winner, loser]) => player1 === winner && player2 === loser);
    updateScore(isPlayer1Winner);

    const winner = isPlayer1Winner ? player1 : player2;

    if (player1 === player2) return setResult("DRAW");
    isPlayer1Winner ? setResult("YOU WIN") : setResult("YOU LOSE");

    return winner;
  };

  const handleChoice = (choice: string) => {
    setPlayerChoice(choice);
    const computer = computerChoice();
    isWinner(choice, computer);
  };

  const computerChoice = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

  const functions = { openModal: () => setModalOpen(true), closeModal: () => setModalOpen(false), handlePlayAgain: () => setPlayerChoice(null) };

  return (
    <>
      <main className={classNames(styles.main, isModalOpen ? styles.modalOpen : "")}>
        <ScoreBoard score={score} />
        {playerChoice ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{result}</span>
            <button style={{ width: "fit-content" }} onClick={functions.handlePlayAgain}>
              PLAY AGAIN
            </button>
          </div>
        ) : (
          <GameBoard onChoice={handleChoice} />
        )}
        <Footer onClick={functions.openModal} />
      </main>
      {isModalOpen && <Rules closeModal={functions.closeModal} />}
    </>
  );
};

export default Home;

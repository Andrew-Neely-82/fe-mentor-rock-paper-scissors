"use client";

import classNames from "classnames";
import Rules from "./components/modal/Rules";
import GameBoard from "./components/scoreBoard/gameBoard/GameBoard";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";
import styles from "./page.module.scss";
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

    if (player1 === player2) return setResult("DRAW");

    const isPlayer1Winner = winningOptions.some(([winner, loser]) => player1 === winner && player2 === loser);
    updateScore(isPlayer1Winner);

    const winner = isPlayer1Winner ? player1 : player2;
    isPlayer1Winner ? setResult("YOU WIN") : setResult("YOU LOSE");

    return winner;
  };

  const handleChoice = (choice: string) => {
    setPlayerChoice(choice);
    const computer = computerChoice();
    isWinner(choice, computer);
  };

  const computerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };

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
        <footer className={styles.footer}>
          <button className={styles.footerButton} onClick={functions.openModal}>
            RULES
          </button>
        </footer>
      </main>
      {isModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Rules closeModal={functions.closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

"use client";

import { ScoreBoard, GameBoard, Footer, Rules } from "./components/export";
import Step2 from "./components/scoreBoard/gameBoard/Step2";
import styles from "./styles/page.module.scss";
import classNames from "classnames";
import { useState } from "react";

const Home = () => {
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [houseChoice, setHouseChoice] = useState<string | null>(null);

  const updateScore = (result: string | null) => {
    setTimeout((e: any) => {
      if (result === "YOU WIN") {
        setScore((prev) => prev + 1);
      } else if (result === "YOU LOSE") {
        setScore((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }, 2500);
  };

  const isWinner = (player1: string, player2: string) => {
    const choices = { rock: "rock", paper: "paper", scissors: "scissors" };

    const winningOptions: [string, string][] = [
      [choices.rock, choices.scissors],
      [choices.scissors, choices.paper],
      [choices.paper, choices.rock],
    ];

    const isPlayer1Winner = winningOptions.some(([winner, loser]) => player1 === winner && player2 === loser);

    const result = player1 === player2 ? "DRAW" : isPlayer1Winner ? "YOU WIN" : "YOU LOSE";

    setResult(result);
    updateScore(result);

    return isPlayer1Winner ? player1 : player2;
  };

  const computerChoice = (): string => {
    const choice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    setHouseChoice(choice);
    return choice;
  };

  const handleChoice = (choice: string) => {
    setPlayerChoice(choice);
    const computer = computerChoice();
    isWinner(choice, computer);
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setHouseChoice(null);
    setResult(null);
  };

  console.log(playerChoice, houseChoice);

  return (
    <>
      <main className={classNames(styles.main, isModalOpen ? styles.modalOpen : "")}>
        <ScoreBoard score={score} />
        {playerChoice ? (
          <>
            <Step2 player={playerChoice} house={houseChoice} result={result} onClick={handlePlayAgain} />
          </>
        ) : (
          <GameBoard key={playerChoice} onChoice={handleChoice} />
        )}
        <Footer onClick={() => setModalOpen(true)} />
      </main>
      {isModalOpen && <Rules closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default Home;

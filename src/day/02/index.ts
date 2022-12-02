/* 
🎄🎅 ADVENT OF CODE DAY TWO 🎅🎄
** 02/12/2022
** https://adventofcode.com/2022/day/2
*/

import { input, test } from "./input";

type Scores = { [key: string]: number };

const winningScore: string[] = ["AY", "BZ", "CX"];
const drawingScore: string[] = ["AX", "BY", "CZ"];
const losingScore: string[] = ["AZ", "BX", "CY"];

const shapeScores: Scores = {
  ["A"]: 1, //rock
  ["B"]: 2, //paper
  ["C"]: 3, //scissors
  ["X"]: 1, //rock
  ["Y"]: 2, //paper
  ["Z"]: 3, //scissors
};

const gameScores: Scores = {
  win: 6,
  draw: 3,
};

const checkWon = (round: string) =>
  winningScore.includes(round) ? gameScores.win : 0;

const checkDraw = (round: string) =>
  drawingScore.includes(round) ? gameScores.draw : 0;

const parseRounds = (game: string): string[] =>
  game.split("\n").map((i) => i.replace(/\s+/g, ""));

const day2 = (list: string): number => {
  return parseRounds(list).reduce(
    (it: number, curr: string) =>
      (it += shapeScores[curr[1]] + checkWon(curr) + checkDraw(curr)),
    0
  );
};

//STEP TWO
const GameStates: Scores = {
  ["X"]: 0, //lose
  ["Y"]: 3, //draw
  ["Z"]: 6, //win
};

const parseScore = (arr: string[], curr: string): number => {
  const findIndex = arr.findIndex((t) => t.includes(curr));
  return findIndex >= 0 ? shapeScores[arr[findIndex][1]] : 0;
};

const day2Step2 = (list: string): number => {
  return parseRounds(list).reduce((it, play: string) => {
    if (play[1] === "Z") {
      it += parseScore(winningScore, play[0]);
    } else if (play[1] === "Y") {
      it += parseScore(drawingScore, play[0]);
    } else {
      it += parseScore(losingScore, play[0]);
    }
    return (it += GameStates[play[1]]);
  }, 0);
};

export const executeDay2 = ((gameInput: string): void => {
  console.log("Advent of Code - Day 2 🎄🎅", day2(gameInput));
  console.log("Advent of Code - Day 2 [2] 🎄🎅", day2Step2(gameInput));
})(input);

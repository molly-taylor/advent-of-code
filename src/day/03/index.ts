/* 
🎄🎅 ADVENT OF CODE DAY THREE 🎅🎄
** 03/12/2022
** https://adventofcode.com/2022/day/3
*/

import { input, test } from "./input";

const lowercase: string = "abcdefghijklmnopqrstuvwxyz";
const alphabet: string = lowercase + lowercase.toUpperCase();

const parseString = (game: string): string[][] =>
  game
    .split("\n")
    .map((i) => [
      i.substring(0, i.length / 2),
      i.substring(i.length / 2, i.length),
    ]);

const getLetterScore = (letter: string) => alphabet.indexOf(letter) + 1;

const day3 = (list: string): number => {
  let total = 0;

  const backpacks = parseString(list);
  for (let i = 0; i < backpacks.length; i++) {
    const set = new Set([...backpacks[i][0]]);

    const sharedLetter = [...backpacks[i][1]].filter((j) => set.has(j));

    total += sharedLetter[0] ? getLetterScore(sharedLetter[0]) : 0;
  }
  return total;
};

const parseString2 = (game: string): string[][] =>
  game
    .trim()
    .match(/(?=[\s\S])(?:^.*$\n?){1,3}/gm)
    ?.map((i) => i.split("\n")) || [];

const day3Step3 = (list: string): number => {
  let total = 0;
  const parsed = parseString2(list);

  for (let i = 0; i < parsed.length; i++) {
    let set = new Set([...parsed[i][0]]);
    let matchingChar = [...parsed[i][1]].filter((j) => set.has(j));

    set = new Set(matchingChar);
    matchingChar = [...parsed[i][2]].filter((j) => set.has(j));

    total += getLetterScore(matchingChar[0]);
  }

  return total;
};

export const executeDay3 = ((gameInput: string): void => {
  console.log("Advent of Code - Day 3 🎄🎅", day3(gameInput));
  console.log("Advent of Code - Day 3 [2] 🎄🎅", day3Step3(gameInput));
})(input);

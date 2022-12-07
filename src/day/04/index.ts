/* 
🎄🎅 ADVENT OF CODE DAY FOUR 🎅🎄
** 04/12/2022
** https://adventofcode.com/2022/day/4
*/

import { input, test } from "./input";

const parseInput = (toFormat: string): number[][][] =>
  toFormat
    .split("\n")
    .map((i) => i.split(",").map((j) => j.split("-").map(Number)));

const isInRange = (range: number[][]): boolean => {
  const result = range.map((r) => [...Array(r[1] + 1).keys()].slice(r[0]));
  return (
    result[1].every((e) => result[0].find((f) => f === e)) ||
    result[0].every((e) => result[1].find((f) => f === e))
  );
};

const day4 = (list: string): number => {
  let total = 0;
  parseInput(list).forEach((pair) => {
    total += isInRange(pair) ? 1 : 0;
  });
  return total;
};

const isContained = (range: number[][]): boolean => {
  const result = range.map((r) => [...Array(r[1] + 1).keys()].slice(r[0]));
  return result[1].some((e) => result[0].find((f) => f === e));
};

const day4Step2 = (list: string): number => {
  let total = 0;
  parseInput(list).forEach((pair) => {
    total += isContained(pair) ? 1 : 0;
  });
  return total;
};

export const executeDay4 = ((gameInput: string): void => {
  console.log("Advent of Code - Day 4 🎄🎅", day4(gameInput));
  console.log("Advent of Code - Day 4 [2] 🎄🎅", day4Step2(gameInput));
})(input);

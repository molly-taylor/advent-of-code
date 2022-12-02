/* 
🎄🎅 ADVENT OF CODE DAY ONE 🎅🎄
** 01/12/2022
** https://adventofcode.com/2022/day/1
*/

import { input } from "./input";

const reduceList = (list: string): number[] => {
  return list
    .split(/\n\s*\n/)
    .map((listItem: string) =>
      listItem
        .split("\n")
        .reduce((it: number, curr: string): number => (it += parseInt(curr)), 0)
    );
};

export const day1 = (list: string): number => {
  return Math.max(...reduceList(list));
};

export const day1Step2 = (list: string): number => {
  return reduceList(list)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((i, c) => (i += c));
};

export const executeDay1 = ((gameInput: string): void => {
  console.log("Advent of Code - Day 1 🎄🎅", day1(gameInput));
  console.log("Advent of Code - Day 1 [2] 🎄🎅", day1Step2(gameInput));
})(input);

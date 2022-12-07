/* 
🎄🎅 ADVENT OF CODE DAY SIX 🎅🎄
** 06/12/2022
** https://adventofcode.com/2022/day/6
*/

import { input, test } from "./input";

const day6 = (list: string): number | undefined => {
  for (let i = 0; i < list.length; i++) {
    const arr = [list[i], list[i + 1], list[i + 2], list[i + 3]];
    const set = new Set(arr);
    if (set.size === arr.length) return i + 4;
  }
};

const day6Step2 = (list: string): number | undefined => {
  for (let i = 0; i < list.length; i++) {
    const arr = list.slice(i, i + 14);
    const set = new Set(arr);
    if (set.size === arr.length) return i + 14;
  }
};

export const executeDay6 = ((gameInput: string): void => {
  console.log("Advent of Code - Day 5 🎄🎅", day6(gameInput));
  console.log("Advent of Code - Day 5 [2] 🎄🎅", day6Step2(gameInput));
})(input);

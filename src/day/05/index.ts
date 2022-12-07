/* 
🎄🎅 ADVENT OF CODE DAY FIVE 🎅🎄
** 05/12/2022
** https://adventofcode.com/2022/day/5
*/

import { input, test } from "./input";

const parseInput = (game: string) => {
  let stackContainer: { [key: number]: string } = {};
  let gamePlay: { [key: string]: number }[] = [];

  const board = game.split("\n").forEach((line) => {
    const content = line.replace(/\s/g, "");
    if (!content || !isNaN(parseInt(content))) {
      return;
    }

    if (line.indexOf("move") > -1) {
      let [move, quantity, from, source, to, target] = line.split(" ");
      gamePlay.push({
        [move]: parseInt(quantity),
        [from]: parseInt(source),
        [to]: parseInt(target),
      });
    } else {
      for (let index = 0; index < line.length; index += 4) {
        let stack = index / 4 + 1;

        let crate = line.substring(index, index + 4).match(/\w/g);

        stackContainer[stack] =
          (!stackContainer[stack] ? "" : stackContainer[stack]) +
          (crate ? crate : "");
      }
    }
  });
  return { stackContainer, gamePlay };
};

const day5 = (list: string) => {
  const { stackContainer, gamePlay } = parseInput(list);
  gamePlay.forEach(({ from, to, move }) => {
    const cratesToMove = stackContainer[from].substring(0, move);
    stackContainer[from] = stackContainer[from].substring(move);
    stackContainer[to] =
      cratesToMove.split("").reverse().join("") + stackContainer[to];
  });
  return [...Object.values(stackContainer)].reduce(
    (it: string, curr: string) => (it += curr[0])
  );
};

const day5Step2 = (list: string) => {
  const { stackContainer, gamePlay } = parseInput(list);
  gamePlay.forEach(({ from, to, move }) => {
    const cratesToMove = stackContainer[from].substring(0, move);
    stackContainer[from] = stackContainer[from].substring(move);
    stackContainer[to] = cratesToMove + stackContainer[to];
  });
  return [...Object.values(stackContainer)].reduce(
    (it: string, curr: string) => (it += curr[0])
  );
};

export const executeDay5 = ((gameInput: string): void => {
  console.log("Advent of Code - Day 5 🎄🎅", day5(gameInput));
  console.log("Advent of Code - Day 5 [2] 🎄🎅", day5Step2(gameInput));
})(input);

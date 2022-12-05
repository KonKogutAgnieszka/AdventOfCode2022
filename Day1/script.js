import { readFileSync } from "node:fs";

const input = readFileSync("./Day1/day-1-input.txt", "utf8")
  .replace(/\r/g, "") // remove "\r"
  .trim() // remove whitespace
  .split("\n\n");

function calories() {
  const calories = input.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((prev, curr) => prev + curr, 0);
  });

  //for part one console.log(Math.max(...calories));

  calories.sort((a, b) => b - a);
  console.log(calories.slice(0, 3).reduce((prev, curr) => prev + curr, 0));
}

calories();

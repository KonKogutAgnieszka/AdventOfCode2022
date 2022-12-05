import { readFileSync } from "node:fs";

const input = readFileSync("./Day1/day-1-input.txt", "utf8")
  .replace(/\r/g, "") // remove "\r"
  .trim() // remove whitespace
  .split("\n\n");

console.log(input);

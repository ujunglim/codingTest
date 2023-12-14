function solution() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map((e) => Number(e)));
  const count = input.shift()[0];
  const result = [];

  for (let i = 0; i < count; i++) {
    const person1 = input[i];
    let biggerCount = 0;
    for (let j = 0; j < count; j++) {
      if (i === j) continue;
      const person2 = input[j];
      if (person1[0] < person2[0] && person1[1] < person2[1]) {
        biggerCount++;
      }
    }
    result.push(biggerCount + 1);
  }
  console.log(result.join(" "));
}
solution();

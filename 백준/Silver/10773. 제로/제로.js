function solution() {
  let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  const count = input[0];
  input = input.map((e) => Number(e));
  const stack = [];

  for (let i = 1; i <= count; i++) {
    if (input[i] !== 0) {
      stack.push(input[i]);
    } else {
      stack.pop();
    }
  }
  console.log(stack.reduce((acc, curr) => acc + curr, 0));
}
solution();
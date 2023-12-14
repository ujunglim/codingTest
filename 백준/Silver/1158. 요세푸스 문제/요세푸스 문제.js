function solution() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));
  const [n, count] = input;

  const result = [];
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  let i = 0;
  // 큐에서 하나씩 꺼내면서 count번째이면 result에 push하고 아니면 다시 queue에 push
  while (queue.length) {
    i++;
    const curr = queue.shift();
    if (i === count) {
      result.push(curr);
      i = 0;
    } else {
      queue.push(curr);
    }
  }
  console.log(`<${result.join(", ")}>`);
}
solution();
function solution() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));
  const [n, k] = input;

  const result = [];
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  let count = 1;
  // 큐에서 하나씩 꺼내면서 count번째이면 result에 push하고 아니면 다시 queue에 push
  while(queue.length) {
      const curr = queue.shift();
      if (count % k === 0) {
          result.push(curr);
      } else {
          queue.push(curr);
      }
      count++;
  }
  console.log(`<${result.join(", ")}>`);
}
solution();
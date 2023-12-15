function solution() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  for (let i = 1; i < input.length - 1; i += 2) {
    const [count, n] = input[i].split(" ").map((e) => Number(e));
    const arr = input[i + 1]
      .split(" ")
      .map((e, i) => ({ priority: Number(e), index: i }));

    getPrintOrder(arr, n);
  }
}
function getPrintOrder(arr, targetIndex) {
  arr, targetIndex;
  let i = 0;
  if (arr.length === 1) {
    console.log(1);
    return;
  }
  while (arr.length) {
    const curr = arr.shift();
    // 최상위 순위임
    if (arr.every((e) => e.priority <= curr.priority)) {
      i++;
      // 찾음
      if (curr.index === targetIndex) {
        console.log(i);
        return;
      }
    } else {
      arr.push(curr);
    }
  }
}
solution();
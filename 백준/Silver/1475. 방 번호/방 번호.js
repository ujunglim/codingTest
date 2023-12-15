// 1. 숫자별로 갯수를 정리한다 (6, 9 제외)
// 2. 6, 9는 통일해서 갯수를 구한다
// 1번에서 구한 갯수 중 최대갯수를 구하고 6,9를 만들기 위해 필요한 갯수와 비교한다
function solution() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const numArr = input[0].split("").map((e) => Number(e));
  const hashMap = new Map();
  let sixAndNineCount = 0; // 6와 9를 통일한다

  for (const num of numArr) {
    if (num === 6 || num === 9) {
      sixAndNineCount++;
      continue;
    }
    if (!hashMap.has(num)) {
      hashMap.set(num, 1);
    } else {
      hashMap.set(num, hashMap.get(num) + 1);
    }
  }
  let result = Math.max(...[...hashMap.values()]);
  if (sixAndNineCount === 0) {
    console.log(result);
    return;
  }
  const sixNineGroup = Math.floor(sixAndNineCount / 2) + (sixAndNineCount % 2);
  result = Math.max(result, sixNineGroup);
  console.log(result);
}
solution();
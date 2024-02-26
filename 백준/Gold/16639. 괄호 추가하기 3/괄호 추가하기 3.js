// 입력 처리
const file = '/dev/stdin';
// const file = "test.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = parseInt(input[0]);
const equation = input[1];

let maxdp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => -Infinity)
);
let mindp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Infinity)
);

// 초기화 dp[i][i] = i
for (let i = 0; i < N; i++) {
  if (!isNaN(parseInt(equation[i]))) {
    maxdp[i][i] = parseInt(equation[i]);
    mindp[i][i] = parseInt(equation[i]);
  }
}

let res = dp(0, N - 1);
console.log(maxdp[0][N - 1]);

// i에서 j까지 [최소, 최대] 리턴
function dp(i, j) {
  if (i === j) return [parseInt(equation[i]), parseInt(equation[i])];

  if (maxdp[i][j] !== -Infinity && mindp[i][j] !== Infinity) {
    return [mindp[i][j], maxdp[i][j]];
  }

  for (let k = i + 1; k < j; k += 2) {
    let ops = equation[k];
    let [frontMin, frontMax] = dp(i, k - 1);
    let [backMin, backMax] = dp(k + 1, j);

    const calRes = [];
    calRes.push(calc(frontMax, backMax, ops));
    calRes.push(calc(frontMax, backMin, ops));
    calRes.push(calc(frontMin, backMax, ops));
    calRes.push(calc(frontMin, backMin, ops));
    calRes.sort((a, b) => a - b);

    maxdp[i][j] = Math.max(maxdp[i][j], calRes[3]);
    mindp[i][j] = Math.min(mindp[i][j], calRes[0]);
  }

  return [mindp[i][j], maxdp[i][j]];
}

function calc(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
  }
}

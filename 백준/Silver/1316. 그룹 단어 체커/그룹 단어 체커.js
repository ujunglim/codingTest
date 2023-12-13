function solution() {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  let answer = 0;

  for (let i = 1; i < input.length; i++) {
    if (isConsecutive(" " + input[i])) {
      answer++;
    }
  }

  function isConsecutive(str) {
    const obj = {};
    let isRelay = true;
    for (let i = 1; i <= str.length; i++) {
      const c = str[i];

      // 연속하지 않음
      if (obj[c] && i - obj[c] > 1) {
        isRelay = false;
        break;
      }
      // 아직 없거나 연속하거나
      else if (!obj[c] || i - obj[c] === 1) {
        obj[c] = i;
      }
    }
    if (isRelay) {
      answer++;
    }
  }
  return answer;
}
console.log(solution());

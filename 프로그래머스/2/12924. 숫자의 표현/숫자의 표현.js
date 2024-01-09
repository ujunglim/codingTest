// 연속된 자연수로 표현
function solution(n) {
  var answer = 0;
  let left = 1;
  let right = 1;
  let sum = 0;

  while (right <= n) {
    sum = getSum(left, right);
    if (sum === n) {
      answer++;
      left++;
      continue;
    }
    if (sum < n) {
      right++;
    } else {
      left++;
    }
  }
  return answer;
}

function getSum(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += i;
  }
  return sum;
}

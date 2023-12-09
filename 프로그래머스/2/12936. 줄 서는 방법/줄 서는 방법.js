// 백트래킹 순열
function solution(n, k) {
  var answer = [];
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  const factorialArr = [1, 1];

  function getFactorialArr(n) {
    for (let i = 2; i <= n; ++i) {
      factorialArr[i] = i * factorialArr[i - 1];
    }
  }
  getFactorialArr(n);

  function bt(n, k, acc) {
    if (n === 0) {
      answer = acc.concat(arr);
      return;
    }
    const selectedIndex = Math.floor((k - 1) / factorialArr[n - 1]);
    k = k % factorialArr[n - 1];

    bt(n - 1, k, [...acc, ...arr.splice(selectedIndex, 1)]);
  }

  bt(n, k, []);
  return answer;
}

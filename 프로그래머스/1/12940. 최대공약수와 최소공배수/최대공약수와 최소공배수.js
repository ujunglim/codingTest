function solution(n, m) {
    const gcd = getGCD(n, m);
    return [gcd, n * m / gcd];
}

function getGCD(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  while(min > 0) {
      const smaller = min;
      min = max%min;
      max = smaller;
  }
  return max;
}

function solution() {
  const max = 10000;
  const isSelfNum = Array.from({ length: max + 1 }, () => true);

  for (let i = 1; i < max; ++i) {
    let sum = i + getSum(i);
    if (sum <= max) {
      isSelfNum[sum] = false;
    }
  }

  for (let i = 1; i < max; ++i) {
    if (isSelfNum[i] === true) {
      console.log(i);
    }
  }
}

function getSum(n) {
  if (n < 10) return n;
  return (n % 10) + getSum(Math.floor(n / 10));
}

solution();
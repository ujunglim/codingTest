function solution() {
  let [n, ...nums] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e));

  // 평균
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const avg = Math.round(sum / nums.length)
  console.log(avg === -0 ? 0 : avg);
  // 중앙값
  nums = nums.sort((a, b) => a - b);
  console.log(nums[Math.floor(nums.length / 2)]);
  // 최빈값 (2번째 작은 값)
  const oftenObj = {};
  let maxOften = 0;
  for (const num of nums) {
    if (!oftenObj[num]) {
      oftenObj[num] = 1;
    } else {
      oftenObj[num] += 1;
    }
    maxOften = Math.max(maxOften, oftenObj[num]);
  }

  const maxArr = [];
  for (const [key, value] of Object.entries(oftenObj)) {
    if (value === maxOften) {
      maxArr.push(Number(key));
    }
  }
  console.log(
    maxArr.length === 1 ? maxArr[0] : maxArr.sort((a, b) => a - b)[1]
  );
  // 최대값- 최소값
  console.log(nums[nums.length - 1] - nums[0]);
}
solution();

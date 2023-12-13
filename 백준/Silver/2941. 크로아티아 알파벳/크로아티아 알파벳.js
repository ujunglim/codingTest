function solution() {
  let input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
  input = input[0];
  const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (const cro of croatia) {
    input = input.split(cro).join("A");
  }
  console.log(input.length);
}
solution();

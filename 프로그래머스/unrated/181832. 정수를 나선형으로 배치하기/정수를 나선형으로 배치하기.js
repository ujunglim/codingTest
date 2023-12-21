function solution(n) {
  var answer = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  const lastNum = n * n;
  let currRow = 0;
  let currCol = 0;
  let currNum = 1;

  let currDir = 0; // 0: right, 1: down, 2: left, 3: top
  let padding = 0;

  while (currNum <= lastNum) {
    answer[currRow][currCol] = currNum;

    // 현재 진행방향이 오른쪽
    if (currDir === 0) {
      // 그 다음 좌표가 범위를 넘어가면 진행방향 바꾸기
      if (currCol + 1 >= n - padding) {
        currDir = getNextDir(currDir);
        currRow++;
      } else {
        currCol++;
      }
    }
    // 현재 진행방향이 아래쪽
    else if (currDir === 1) {
      // 그 다음 좌표가 범위를 넘어가면 진행방향 바꾸기
      if (currRow + 1 >= n - padding) {
        currDir = getNextDir(currDir);
        currCol--;
      } else {
        currRow++;
      }
    }
    // 현재 진행방향이 왼쪽
    else if (currDir === 2) {
      // 그 다음 좌표가 범위를 넘어가면 진행방향 바꾸기
      if (currCol - 1 < 0 + padding) {
        currDir = getNextDir(currDir);
        currRow--;
        padding++;
      } else {
        currCol--;
      }
    } else {
      // 그 다음 좌표가 범위를 넘어가면 진행방향 바꾸기
      if (currRow - 1 < 0 + padding) {
        currDir = getNextDir(currDir);
        currCol++;
      } else {
        currRow--;
      }
    }
    currNum++;
  }
  return answer;
}

function getNextDir(currDir) {
  return currDir + 1 <= 3 ? currDir + 1 : (currDir + 1) % 4;
}
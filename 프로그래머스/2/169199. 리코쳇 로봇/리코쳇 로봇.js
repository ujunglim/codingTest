// // D: 장애물, R: 처음위치, G: 목표, .: 빈공간
// function solution(board) {
//     var answer = -1;
//     board = board.map(row => row.split(''));
//     let start = [];
//     // 시작지점을 찾는다
//     for (let r = 0; r < board.length; ++r) {
//         if (board[r].includes('R')) {
//             start[0] = r;
//             const indexOfCol = board[r].indexOf('R');
//             start[1] = indexOfCol;
//         }
//     }
//     const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
//     const queue = [start];
//     const visited = [];
    
//     while(queue.length)
//     function dfs(currPos, visited, )
//     console.log(start)
    
//     return answer;
// }
function solution(board) {
  const dR = [-1, 0, 1, 0];
  const dC = [0, 1, 0, -1];
  const maxR = board.length;
  const maxC = board[0].length;
  let start = {};
  let target = {};

  function isMovable(r, c) {
    if (r < 0 || r >= maxR || c < 0 || c >= maxC) {
      return false;
    } else if (board[r][c] === "D") {
      return false;
    }
    return true;
  }

  // 시작점, 목표위치 찾기
  for (let r = 0; r < maxR; r++) {
    for (let c = 0; c < maxC; c++) {
      if (board[r][c] === "R") start = { r, c };
      if (board[r][c] === "G") target = { r, c };
    }
  }

  const isVisited = Array.from({ length: maxR }, () =>
    Array.from({ length: maxC }, () => false)
  );
  isVisited[start.r][start.c] = true;
  const queue = [{ r: start.r, c: start.c, step: 0 }];

  while (queue.length) {
    // console.log("----", queue);
    const { r, c, step } = queue.shift();
    // 타겟을 찾음
    if (r === target.r && c === target.c) {
      return step;
    }

    // 4가지 방향 찾기
    for (let i = 0; i < 4; i++) {
      let currR = r;
      let currC = c;
      let nextR = currR + dR[i];
      let nextC = currC + dC[i];
      // 범위안에서 D를 만날떄까지 직진
      while (isMovable(nextR, nextC)) {
        currR = nextR;
        currC = nextC;
        nextR += dR[i];
        nextC += dC[i];
      }
      if (!isVisited[currR][currC]) {
        isVisited[currR][currC] = true;
        queue.push({ r: currR, c: currC, step: step + 1 });
      }
    }
  }
  return -1;
}
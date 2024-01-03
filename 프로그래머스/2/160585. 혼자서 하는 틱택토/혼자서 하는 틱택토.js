function solution(board) {
  let oCount = 0;
  let xCount = 0;
  board.forEach((row, r) => {
    row.split("").forEach((e, c) => {
      if (e === "O") oCount++;
      else if (e === "X") xCount++;
    });
  });
  // 아직 시작 안한 경우
  if (!oCount && !xCount) return 1;
  // [순서를 잘못 놓은 경우] O보다 X가 더 많거나 둘의 차이가 2이상인 경우
  if (oCount < xCount || oCount - xCount > 1) return 0;

  const [oBingoCount, xBingoCount] = getBingoCount(board);
console.log(oBingoCount, xBingoCount)
  // 둘다 빙고인 경우
  if (oBingoCount !== 0 && xBingoCount !== 0) return 0;

  // [승리 후 계속 진행한 경우]
  // O승리 후 X를 둔 경우(O의 갯수가 X의 갯수보다 작거나 같은 경우)
  if (oBingoCount !== 0 && oCount <= xCount) return 0;
  // X승리 후 O를 둔 경우 (O의 갯수가 X보다 많은경우)
  if (xBingoCount !== 0 && oCount > xCount) return 0;

  // const isTTT = checkTTT(board);
  // if (isTTT !== false) {
  // }
  // // O 틱택토이고 둘의 갯수가 같을때
  // if (isTTT) {
  //    // 틱택토인데
  //    // O,X갯수가 같은경우
  //    if (oCount === xCount) {
  //     return 0;
  //    }
  // }
  return 1;
}

function checkTTT(board) {
  // 가로, 세로
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2])
      return board[i][0];
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i])
      return board[0][i];
  }
  // 대각선
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2])
    return board[0][0];
  if (board[2][0] === board[1][1] && board[1][1] === board[2][0])
    return board[2][0];
  return false;
}

function getBingoCount(board) {
  let oBingoCount = 0;
  let xBingoCount = 0;
  for (let i = 0; i < 3; i++) {
    // 가로
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === "O") oBingoCount++;
      if (board[i][0] === "X") xBingoCount++;
    }
    // 세로
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] === "0") oBingoCount++;
      if (board[0][i] === "X") xBingoCount++;
    }
  }
  // 대각선
  if (
    (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0])
  ) {
    if (board[1][1] === "O") oBingoCount++;
    if (board[1][1] === "X") xBingoCount++;
  }
  return [oBingoCount, xBingoCount];
}

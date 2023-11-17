// dfs, 대문자
function isValidIndex(r, c, arr) {
  return r >= 0 && r < arr.length && c >= 0 && c < arr[r].length; /////
}

function isSquareSame(r, c, arr) {
  const right = { r, c: c + 1 };
  const rightDown = { r: r + 1, c: c + 1 };
  const down = { r: r + 1, c };
  if (
    isValidIndex(right.r, right.c, arr) &&
    isValidIndex(rightDown.r, rightDown.c, arr) &&
    isValidIndex(down.r, down.c, arr)
  ) {
    return (
      arr[r][c] === arr[right.r][right.c] &&
      arr[right.r][right.c] === arr[rightDown.r][rightDown.c] &&
      arr[right.r][right.c] === arr[down.r][down.c]
    );
  }
  return false;
}

function solution(m, n, board) {
  let answer = 0;
  const newBoard = [];
  const UPPERCASE = /[A-Z]/;
  board = board.reverse();
  // board를 왼쪽에서 오른쪽으로 떨이지게 재배열
  for (let c = 0; c < n; c++) {
    let newRow = [];
    for (let r = 0; r < m; r++) {
      newRow.push(board[r][c]);
    }
    newBoard.push(newRow);
  }
  let isRemoved = Array.from({ length: newBoard.length }, () =>
    Array.from({ length: newBoard[0].length }, () => false)
  );
  const square = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  findSquare(newBoard);

  function findSquare(newBoard) {
    let isRemovedThisTime = false;
    // 순회하며 2x2찾기
    for (let r = 0; r < newBoard.length - 1; r++) {
      for (let c = 0; c < newBoard[r].length - 1; c++) {
        if (!newBoard[r][c]) break;
        if (!UPPERCASE.test(newBoard[r][c])) continue;

        if (isSquareSame(r, c, newBoard)) {
          for (const [dr, dc] of square) {
            if (!isRemoved[r + dr][c + dc]) {
              isRemovedThisTime = true;
              isRemoved[r + dr][c + dc] = true;
              answer++;
            }
          }
        }
      }
    }
    // 제거된게 있으면 true제거하고 또 스캔
    if (isRemovedThisTime) {
      // true 제거
      const afterRemoveBoard = [];
      for (let r = 0; r < newBoard.length; r++) {
        const temp = [];
        let removedCount = 0;
        for (let c = 0; c < newBoard[r].length; c++) {
          if (!isRemoved[r][c]) {
            temp.push(newBoard[r][c]);
          } else {
            removedCount++;
          }
        }
        afterRemoveBoard[r] = temp;
      }
      isRemoved = isRemoved.map((row) => row.filter((c) => c === false));
      findSquare(afterRemoveBoard);
    } else {
      return;
    }
  }
  return answer;
}
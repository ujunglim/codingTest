function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  rectangle = rectangle.map((r) => r.map((e) => e * 2));

  const board = Array.from({ length: 103 }, () =>
    Array.from({ length: 103 }, () => 0)
  );

  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let r = y1; r <= y2; r++) {
      for (let c = x1; c <= x2; c++) {
        // 현재 rectangle의 둘레인 경우
        if (c === x1 || c === x2 || r === y1 || r === y2) {
          // 겹치지 않은 경우
          if (board[r][c] === 0) {
            board[r][c] = 1;
          }
        } else {
          // rectanlge 내부
          board[r][c] = 2;
        }
      }
    }
  });
  // board확인용
  // const a = board
  //   .map((row) => row.join(""))
  //   .reverse()
  //   .join("\n");
  // console.log(a);
  // bfs순회하며 target을 찾는다
  const queue = [{ x: characterX, y: characterY, count: 0 }];
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  while (queue.length) {
    const curr = queue.shift();
    // 찾음
    if (curr.x === itemX && curr.y === itemY) {
      return curr.count / 2;
    }
    for (let i = 0; i < 4; i++) {
      const nextR = curr.y + dr[i];
      const nextC = curr.x + dc[i];

      if (board[nextR][nextC] === 1) {
        board[nextR][nextC] = 0; // 방문한 곳 표시
        queue.push({ x: nextC, y: nextR, count: curr.count + 1 });
      }
    }
  }
  return answer;
}
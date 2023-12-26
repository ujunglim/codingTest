class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.front) return null;
    const node = this.front;

    if (this.front === this.rear) {
      this.rear.next = null;
    }

    this.front = this.front.next;
    this.size--;
    return node.val;
  }
}

function solution(land) {
  const COL = land[0].length;
  const ROW = land.length;

  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  const q = new Queue();

  //시추관을 뚫었을 때 각 컬럼에서 접근 가능한 석유 덩어리의 크기를 저장하기 위한 배열
  const oilArr = new Array(COL).fill(0);

  //모든 배열을 돌면서 석유 덩어리 순회
  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      //석유가 없는 땅일 경우 다음 칸으로 이동
      if (!land[r][c]) continue;

      //방문한 컬럼을 저장하기 위한 변수
      const visitedCol = new Set();
      //석유 덩어리의 크기를 저장하기 위한 변수
      let oilSize = 0;

      q.enqueue({ currentR: r, currentC: c });
      //방문한 칸은 0으로 수정하여 방문처리
      land[r][c] = 0;
      oilSize++;
      visitedCol.add(c);

      //큐가 빌 때까지 반복
      while (q.size) {
        const { currentR, currentC } = q.dequeue();

        for (let i = 0; i < 4; i++) {
          const nextR = currentR + dr[i];
          const nextC = currentC + dc[i];
          if (
            nextR >= 0 &&
            nextR < ROW &&
            nextC >= 0 &&
            nextC < COL &&
            land[nextR][nextC]
          ) {
            q.enqueue({ currentR: nextR, currentC: nextC });
            land[nextR][nextC] = 0;
            oilSize++;
            visitedCol.add(nextC);
          }
        }
      }

      //덩어리의 크기를 구한 다음, 방문한 컬럼별로 석유 덩어리 크기 oilArr에 더해줌
      Array.from(visitedCol).forEach((c) => {
        oilArr[c] += oilSize;
      });
    }
  }

  return Math.max(...oilArr);
}

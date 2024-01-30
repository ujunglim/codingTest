function solution(friends, gifts) {
  var answer = {};
  const n = friends.length;
  const arr = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  const hash = {};

  friends.forEach((friend, i) => {
    hash[friend] = {
      index: i,
      gave: 0,
      got: 0,
    };
  });
  gifts.forEach((gift) => {
    const [from, to] = gift.split(" ");
    hash[from].gave += 1;
    hash[to].got += 1;

    //배열 정리
    arr[hash[from].index][hash[to].index] += 1;
  });
  // 선물지수 정리
  for (const [key, value] of Object.entries(hash)) {
    hash[key].point = hash[key].gave - hash[key].got;
  }
  for (let i = 0; i < n - 1; ++i) {
    for (let j = i + 1; j < n; ++j) {
      const from = friends[i];
      const to = friends[j];

      // 기록이 없거나 선물갯수가 같을시
      if ((arr[i][j] === 0 && arr[j][i] === 0) || arr[i][j] === arr[j][i]) {
        // 선물지수 비교
        const fromPoint = hash[from].point;
        const toPoint = hash[to].point;
        if (fromPoint > toPoint) {
          answer[from] = (answer[from] || 0) + 1;
        } else if (fromPoint < toPoint) {
          answer[to] = (answer[to] || 0) + 1;
        }
      }
      // 주고받은 기록이 있거나 선물갯수가 다를시
      else if (
        arr[i][j] ||
        arr[j][i] ||
        (arr[i][j] && arr[j][i] && arr[i][j] !== arr[j][i])
      ) {
        // 선물 갯수 비교
        if (arr[i][j] > arr[j][i]) {
          answer[from] = (answer[from] || 0) + 1;
        } else if (arr[i][j] < arr[j][i]) {
          answer[to] = (answer[to] || 0) + 1;
        }
      }
    }
  }
  const values = Object.values(answer);
  if (values.length === 0) {
    return 0;
  }
  return Math.max(...Array.from(values));
}
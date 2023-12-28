function solution(targets) {
  //타겟의 끝점을 기준으로 오름차순 정렬
  targets.sort((a, b) => a[1] - b[1]);

  //요격 횟수
  let cnt = 0;
  //요격 범위 끝점
  let missile = -Infinity;

  targets.forEach(([start, end]) => {
    //타겟의 시작점이 요격범위보다 크거나 같으면(개구간)
    //미사일 추가하고 범위 조정
    if (start >= missile) {
      cnt++;
      missile = end;
    }
  });

  return cnt;
}

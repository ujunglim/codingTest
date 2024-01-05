// 10분청소 후 다음 사용가능
// 필요한 최소객실수는?
// 분으로 변환
// 시작시각 오름차순
function solution(book_time) {
  var answer = 0;
  const bookArr = book_time
    .map((book) => {
      const converted = book.map((b) => {
        const [h, m] = b.split(":");
        return Number(h) * 60 + Number(m);
      });
      return { start: converted[0], end: converted[1] };
    })
    .sort((a, b) => a.start - b.start);

  answer++; // 첫번째방
  const endTime = [bookArr[0].end+10];

  for (let i = 1; i < bookArr.length; ++i) {
    const { start, end } = bookArr[i];
    // 대실시작시각에 퇴실한 방이 없는 경우
    if (start < endTime[0]) {
      answer++; // 방추가
      endTime.push(end+10);
    }
    // 대실시작시각에 퇴실한 방이 있는 경우
    else {
      endTime.shift(); // 이미 퇴실한 방 제거
      endTime.push(end+10);
    }
    endTime.sort((a, b) => a - b); // 가장빠른퇴실시각 갱신
  }
  return answer;
}
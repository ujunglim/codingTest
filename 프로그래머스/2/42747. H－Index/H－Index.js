function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => a - b);
  const total = citations.length;

  for (let h = 0; h <= citations.length; ++h) {
    let i = 0;
    // h미만까지 i옮기기
    while (h > citations[i]) {
      i++;
    }
    const count = total - i; // h이상 갯수
    // h이상 갯수가 h이상이면 answer갱신
    if (count >= h) {
      answer = h;
    }
  }
  return answer;
}

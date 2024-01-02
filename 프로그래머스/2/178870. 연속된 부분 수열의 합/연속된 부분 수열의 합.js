// 짧은, 앞 인덱스
// nlogn
function solution(sequence, k) {
    var answer = [];
    const len = sequence.length;
    let i = 0;
    let j = 0;
    let sum = sequence[0];
    
    // i, j 둘 다 sequence 마지막까지 순회한다.
    while(j < len) {
        if (sum === k) { // k를 찾음 answer에 추가하고 기존의 i값을 빼서 새로운 수열을 찾는다
            answer.push({i, j, len: j-i});
            sum -= sequence[i++];
        } else if (sum < k) { // k보다 작으면 다음으로 큰 수를 더한다
            sum += sequence[++j];
        } else if (sum > k) { // k보다 크면 가장 작은 수를 뺀다
            sum -= sequence[i++];
        } 
    }
    if (answer.length === 1) return [answer[0].i, answer[0].j]; // 부분수열이 하나면 바로 리턴
    // 여러개이면 길이로 오름차순, 길이가 같다면 인덱스로 오름차순
    answer.sort((a, b) => {
        if (a.len === b.len) {
            return a - b;
        } 
        return a.len - b.len;
    })
    return [answer[0].i, answer[0].j];
}
// 짧은, 앞 인덱스
// nlogn
function solution(sequence, k) {
    var answer = [];
    const len = sequence.length;
    let i = 0;
    let j = 0;
    let sum = sequence[0];
    
    while(i < len && j < len) {
        if (sum === k) {
            answer.push({i, j, dist: j-i});
            sum -= sequence[i++];
        } else if (sum < k) {
            sum += sequence[++j];
        } else if (sum > k) {
            sum -= sequence[i++];
        }
    }
    if (answer.length === 1) return [answer[0].i, answer[0].j];
    answer.sort((a, b) => {
        if (a.dist === b.dist) {
            return a - b;
        } 
        return a.dist - b.dist;
    })
    return [answer[0].i, answer[0].j];
}
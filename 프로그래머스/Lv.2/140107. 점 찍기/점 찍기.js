// d 반지름
// x를 0부터 d까지 순회하며 가능한 최대 y구하기
function solution(k, d) {
    var answer = 0;
    const squareD = d*d;
    for (let x = 0; x <= d; x += k) {
        const maxY = Math.floor(Math.sqrt(squareD - x*x));
        answer += Math.floor(maxY/k) + 1;
    }
    return answer;
}
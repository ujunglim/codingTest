// 유한한 경우 => 완탐
// 다 담을 수 있는 가장 작은 지갑 크기
// 가장 큰 가로, 세로 구함
// 큰 기준으로 미리 돌림
function solution(sizes) {
    var answer = 0;
    const big = [];
    const small = [];
    for (const [w, h] of sizes) {
        if (w >= h) {
            big.push(w);
            small.push(h);
        } else {
            big.push(h);
            small.push(w);
        }
    }
    return Math.max(...big) * Math.max(...small);
}
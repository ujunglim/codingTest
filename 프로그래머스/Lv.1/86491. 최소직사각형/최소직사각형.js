// 유한한 경우 => 완탐
// 다 담을 수 있는 가장 작은 지갑 크기
// 가장 큰 가로, 세로 구함
// 가로를 큰 기준으로 돌림
function solution(sizes) {
    var answer = 0;
    const w = [];
    const h = [];
    for (const [width, height] of sizes) {
        if (width >= height) {
            w.push(width);
            h.push(height);
        } else {
            w.push(height);
            h.push(width);
        }
    }
    const maxW = Math.max(...w);
    const maxH = Math.max(...h);
    console.log(maxW, maxH)
    return maxW*maxH;
}
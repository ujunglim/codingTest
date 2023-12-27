// 원의 4분의1 안의 갯수를 구한다.
function solution(r1, r2) {
    var answer = 0;
    const r1Pow = r1*r1;
    const r2Pow = r2*r2;
    
    for (let x = 1; x <= r2; x++) {
        const currPow = x*x;
        const maxY = Math.floor(Math.sqrt(r2Pow - currPow));
        const minY = x < r1 ? Math.ceil(Math.sqrt(r1Pow - currPow)) : 0;
        answer += maxY - minY + 1;
    }
    return answer*4;
}
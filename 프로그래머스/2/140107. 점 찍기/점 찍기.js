// 간단히 생각
// x를 순회하면서 최대y값 구하기
function solution(k, d) {
    var answer = 0;
    // k배씩 증가
    for (let x = 0; x <= d; x=x+k) {
        const maxY = Math.sqrt(d*d - x*x);
        answer += Math.floor(maxY/k)+1;
    }
    return answer;
}
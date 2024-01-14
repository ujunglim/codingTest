// 1 => 11011, 0 => 00000
// l에서r 구간내 1의 갯수리턴

// n번째일때 총 5^n개의 비트 중 4^n개의 1이 존재한다
function solution(n, l, r) {
    var answer = 0;
    for (let i = l-1; i < r; i++) {
        if (i.toString(5).includes(2)) continue;
        answer++;
    }
    return answer;
}
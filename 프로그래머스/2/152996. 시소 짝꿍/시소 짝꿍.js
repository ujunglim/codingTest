// 시소짝꿍: 몸무게*거리가 같으면 
// 몇쌍 짝꿍존재?

// 2,3,4 모든 조합
// 시소의 오른쪽, 왼쪽 중 어디에 앉는지는 구별하지 않음
// 몸무게가 같으면 어느 거리에 앉든 1쌍으로 쳐줌
// 몸무게갯수 {}로 관리
// 그럼 100, 100, 100처럼 100이 세명이면 3쌍? 아니면 1쌍

// 4,3,2 || 2,3,4
// 가능한 비율 1:1, 2:3, 1:2, 3:4

function solution(weights) {
    var answer = 0;
    const possibles = [1, 3/2, 2, 4/3];
    const obj = {};
    weights.forEach(weight => {
        obj[weight] = (obj[weight] || 0) +1;
    })
    weights.sort((a, b) => a-b);
    
    for (const leftW of weights) {
        for (const p of possibles) {
            const rightW = leftW*p;
            
            // 같은 몸무게이면 
            if (leftW === rightW) {
                if (obj[rightW] > 1) {
                    answer += obj[leftW]-1;
                }
            } else if (obj[rightW]) {
                answer += obj[rightW];
            }
        }
        obj[leftW]--;
    }
    return answer;
}

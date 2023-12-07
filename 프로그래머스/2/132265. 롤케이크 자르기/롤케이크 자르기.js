// 매번 자르면서 동생과 형 둘의 토핑갯수를 세는건 불필요하다
// 처음부터 형한테 모든 토핑을 주고 그 후 토핑을 순회하며 동생이 하나씩 가져가면서 형과 동생의 토핑갯수를 비교한다.
// 그냥 첨부터 순회하면서 하면 비교하면 안 되나?
function solution(topping) {
    var answer = 0;
    const old = {}; // 토핑 종류별 갯수
    const young = {};
    let oldCount = 0; // 토핑 종류 갯수
    let youngCount = 0;
    
    for (const t of topping) {
        if (!old[t]) {
            old[t] = 1;
            oldCount++;
        } else {
            old[t]++;
        }
    }
    
    for (const t of topping) {
        if (!young[t]) {
            young[t] = 1;
            youngCount++;
        } else {
            young[t]++;
        }
        
        // 토핑이 한개 남아있으면 형의 토핑 갯수는 감소한다.
        if (old[t] === 1) {
            oldCount--;
        }
        old[t]--; // 형의 토핑 감소
        
        // 형과 동생의 토핑갯수 비교
        if (oldCount === youngCount) {
            answer++;
        }
    }
    return answer;
}
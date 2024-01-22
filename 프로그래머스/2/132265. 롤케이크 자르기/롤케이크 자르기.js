// o(nlogn)
// 동일한 토핑 갯수
function solution(topping) {
    var answer = 0;
    const old = {};
    const young = {};
    let oldCount;
    let youngCount = 0;
    topping.forEach(t => {
        old[t] = (old[t] || 0) +1;
    })
    oldCount = Object.keys(old).length;
    for (const curr of topping) {
        // 동생이 없던거
        if (!young[curr]) {
            young[curr] = 1;
            youngCount++;
        } else {
            young[curr]++;
        }
        
        // 형이 해당 토핑을 1개만 갖고 있는 경우
        if (old[curr] === 1) {
            delete old[curr];
            oldCount--;
        } else {
            old[curr]--;
        }
        if (oldCount === youngCount) answer++;
    }
    return answer;
}
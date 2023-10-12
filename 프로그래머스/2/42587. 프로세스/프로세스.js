function solution(priorities, location) {
    var answer = 0;
    const hash = {}; // {순위: 갯수} 순위비교
    priorities.forEach(p => hash[p] = (hash[p] || 0) + 1);
    const queue = priorities.map((p, i) => ({p, i})); // {p: 순위, i: location}
    let foundTarget = false;
    
    function getMaxPriority() {
        return Math.max(...Object.keys(hash));
    }
    
    //  location을 찾을때까지
    while(queue.length && !foundTarget) {
        const {p, i} = queue[0];
        // 현재순위가 최상순위일때 삭제
        if (p === getMaxPriority()) {
            // 1개 일때
            if (hash[p] === 1) {
                delete hash[p];
            } else {
                hash[p] -= 1;
            }
            answer++;
            queue.shift();
            if (i === location) foundTarget = true;
        } else {
            queue.push(queue.shift());
        }
    }
    return answer;
}
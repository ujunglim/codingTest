function solution(priorities, location) {
    var answer = 0;
    priorities = priorities.map((priority, i) => ({priority, location: i}));
    
    while(priorities.length) {
        const curr = priorities.shift();
        // 현재보다 우선순위가 없을시
        if (!priorities.some(p => p.priority > curr.priority)) {
            answer++;
            if (curr.location === location) {
                return answer;
            }
        } else {
            priorities.push(curr);
        }
    }
    return answer;
}
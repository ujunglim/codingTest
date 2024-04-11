function solution(numbers, target) {
    var answer = 0;
    
    function dfs(curr, remain) {
        if (!remain.length ) {
            if (curr === target) {
                answer++;
            }
            return;
        }
        const newRemain = [...remain];
        const selected = newRemain.shift();
        dfs(curr+selected, newRemain);
        dfs(curr-selected, newRemain);
    }
    dfs(0, numbers);
    
    return answer;
}
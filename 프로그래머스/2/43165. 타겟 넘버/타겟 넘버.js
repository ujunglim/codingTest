function solution(numbers, target) {
    var answer = 0;
    function dfs(remain, currSum) {
        if (!remain.length) {
            if (currSum === target) answer++;
            return;
        }
        const newRemain = [...remain];
        const selected = newRemain.shift();
        dfs(newRemain, currSum+selected);
        dfs(newRemain, currSum-selected);
    }
    dfs(numbers, 0);
    return answer;
}
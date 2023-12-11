function solution(numbers, target) {
    var answer = 0;
    
    function dfs(num, remainArr) {
        if (!remainArr.length) {
            if (num === target) {
                console.log(num, remainArr)
                answer++;
            }
            return;
        }
        const curr = remainArr[0];
        const newArr = [...remainArr];
        newArr.shift();
        dfs(num-curr, newArr);
        dfs(num+curr, newArr);
    }
    dfs(0, numbers);
    return answer;
}
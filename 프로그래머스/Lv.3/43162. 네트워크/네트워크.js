// 현재와 연결된 곳은 먼저 방문
function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({length: n}, () => false);
    
    for(let curr = 0; curr < n; curr++) {
        if (!visited[curr]) {
            visited[curr] = true;
            answer++;
            dfs(curr); // 현재와 연결된 곳 모두 방문
        }
    }
    
    function dfs(curr) {
        for (let i = 0; i < n; i++) {
            if (i !== curr && computers[curr][i] === 1 && !visited[i]) {
                visited[i] = true;
                dfs(i);
            }
        }
    }
    return answer;
}